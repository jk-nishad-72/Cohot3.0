

import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from '../pages/Home';
import ManiLayout from '../layout/ManiLayout';
import About from '../pages/About';
import Services from '../pages/Services';
import AuthLayout from '../layout/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoute from './ProtectedRoute';


const AppRouter = () => {

    let router = createBrowserRouter([ 

         {
            path:'/auth',
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
         },
        
        {
            path:'/',
            element:<ProtectedRoute />,
            children:[

               { 
                path:'',
                element:<ManiLayout />,
                children:[
                { 
                    path:'',
                    element:<Home/>
                },
                { 
                    path:'about',
                    element:<About/>
                },
                { 
                    path:'services',
                    element:<Services/>
                },]

               }, ]


        }
    ])

  return  <RouterProvider router={router} />
}

export default AppRouter