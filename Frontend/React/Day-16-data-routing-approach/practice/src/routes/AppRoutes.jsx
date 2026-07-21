
import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from '../layout/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Service from '../pages/Service';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {

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
            children:[{
                path:'',
                element:  <MainLayout  />,
                children:[
                {
                    path:'',
                    element:<Home />
                },
                 {
                    path:'/about',
                    element:<About />
                },
                 {
                    path:'/service',
                    element:<Service />
                },

            ]
          }]
        }
    ])

  return ( <RouterProvider router={router}  />)
}

export default AppRoutes