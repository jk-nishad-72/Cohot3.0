import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthProtected from './protected/AuthProtected';
import AuthLayout from '../app/layout/AuthLayout';
import Home from "../shared/ui/pages/Home.jsx"
import Login from "../features/auth/ui/pages/Login.jsx";
import Register from "../features/auth/ui/pages/Register.jsx";
import MainProtected from './protected/MainProtected.jsx';
import MainLayout from '../app/layout/MainLayout.jsx';
import Shop from '../shared/ui/pages/Shop.jsx';
import About from '../shared/ui/pages/About.jsx';

import { hydrationApi } from '../features/auth/api/auth.api.jsx';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/auth/state/authSlice.jsx';

const AppRoutes = () => {

  const dispatch = useDispatch();


  useEffect(()=>{

     (async()=>{

        try {

           let result = await hydrationApi();

          console.log('hydration fun error', result);

          dispatch(addUser(result))

          
        } catch (error) {

          console.log('hydration fun error',error);
          
          
        }
       

     })()
  })

  let router = createBrowserRouter([
    {
      path:'/',
      element:<AuthProtected />,
      children:[
        {
          path:'',
          element:<AuthLayout />,
          children:[
            {
               path:'',
               element:<Login />
              
            },
            {
              path:'register',
              element:<Register />
             
           }
          ]

        }
      ]
    },
    {
      path:'/main',
      element:<MainProtected />,
      children:[
        {
          path:'',
          element:<MainLayout />,
          children:[
            {
               path:'',
               element:<Home />
              
            },
            {
              path:'shop',
              element:<Shop />
             
           },   {
            path:'about',
            element:<About />
           
         }
          ]

        }
      ]
    },
    
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes