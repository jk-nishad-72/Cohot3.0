import React from 'react'
import {RouterProvider , createBrowserRouter} from "react-router"
import MainLayout from '../app/layout/MainLayout'
import AuthLayout from '../app/layout/AuthLayout'
import Login from '../features/auth/ui/pages/Login'
import Register from '../features/auth/ui/pages/Register'
import Home from '../shared/ui/pages/Home'
import About from '../shared/ui/pages/About'
const AppRoutes = () => {


    let router = createBrowserRouter([
        {
            path:'/',
            element:<AuthLayout />,
            children:[
                {
                    path:'',
                    element:<Login />

                },
                {
                    path:'register',
                    element:<Register />

                },
            ]
        },
        {
            path:'/main',
            element:<MainLayout />,
            children:[
                {
                    path:'',
                    element:<Home />

                },
                {
                    path:'about',
                    element:<About />

                },
            ]
        },
    ])
  return (
     
    <RouterProvider router={router} /> 
  )
}

export default AppRoutes