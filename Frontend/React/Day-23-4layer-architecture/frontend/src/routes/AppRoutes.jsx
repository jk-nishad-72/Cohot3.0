

import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider,  } from "react-router";
import MainLayout from '../app/layout/MainLayout';
import AuthLayout from '../app/layout/AuthLayout';
import Login from '../features/auth/UI/pages/Login';
import Register from '../features/auth/UI/pages/Register';
import Home from '../shared/ui/Home';
import About from '../shared/ui/About';
import { hydrateUser } from '../features/auth/api/useAuthAPI';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/auth/state/authSlice';
import MainProtected from './protected/MainProtected';
import PublicProtected from './protected/PublicProtected';
import { toast } from 'react-toastify';
import { useAuthHooks } from '../features/auth/hooks/useAuthHooks';

const AppRoutes = () => {

    const dispatch = useDispatch();
  


    useEffect(()=>{

         (async()=>{
            try {
                 
                const result = await hydrateUser()

                if(!result){ 
                    toast.warn('Un Autherized User') 

               
                    return 
                }

                console.log('hydation result', result);

                dispatch(addUser(result)) 
                
             } catch (error) {

                console.log('hydation error', error);
                
                
             }
         })()
    },[])

    let router = createBrowserRouter([
        {
            path:"/",
            element:<PublicProtected />,
            children:[
                {
                    path:"",
                    element:<AuthLayout />,
                    children:[
                        {
                            path:"",
                            element:<Login />,
        
                        },
                        {
                            path:"register",
                            element:<Register />,
                            
                        },
                    ]
        
                }
            ]

        },
        {
            path:"/main",
            element:<MainProtected />,
            children:[
                {
                    path:'',
                    element:<MainLayout />,
                    children:[
                        {
                            path:"",
                            element:<Home />
                        },
                        {
                            path:"about",
                            element:<About />
                        },
                    ]
                }
            ]


        },
    ])


  return (
    <> 
         <RouterProvider router={router} />
    </>
  )
}

export default AppRoutes