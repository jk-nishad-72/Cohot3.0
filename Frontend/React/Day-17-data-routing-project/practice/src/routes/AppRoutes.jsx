
import React from 'react'
import {  createBrowserRouter } from "react-router";
import { RouterProvider  } from 'react-router/dom'
import Home from '../pages/Home';
import MainLayout from '../layout/MainLayout';
import Products from '../pages/Products';
import Users from '../pages/Users';
import AuthLayout from '../layout/AuthLayout';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRoutes = () => {

    let router =  createBrowserRouter([
        
       {
        path:'/',
        element:<ProtectedRoute />,
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
            path:'users',
            element:<Users />
          },
          {
            path:'products',
            element:<Products />
          },
        ] 
      }
        ]

       },
       {
        path:'/auth',
        element:<PublicRoute />,
        children:[
          {
            path:'',
            element:<AuthLayout />,
            children:[
              {
                path:'login',
                element:<Login />
              },
              {
                path:'register',
                element:<Register />
              },

            ]

           }
        ]
       }



      ]
    )

  return (
     <RouterProvider router={ router}  />
  )
}

export default AppRoutes