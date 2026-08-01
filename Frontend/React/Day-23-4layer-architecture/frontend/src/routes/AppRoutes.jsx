

import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from '../app/layout/MainLayout';
import AuthLayout from '../app/layout/AuthLayout';
import Login from '../features/auth/UI/pages/Login';
import Register from '../features/auth/UI/pages/Register';
import Home from '../shared/ui/Home';
import About from '../shared/ui/About';

const AppRoutes = () => {

    let router = createBrowserRouter([
        {
            path:"/",
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

        },
        {
            path:"/main",
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

        },
    ])


  return (
    <> 
         <RouterProvider router={router} />
    </>
  )
}

export default AppRoutes