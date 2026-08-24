

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import DashboardLayout from '../layout/DashboardLayout'
import Login from '../../features/Auth/ui/pages/Login'
import Register from '../../features/Auth/ui/pages/Register'
import AuthLayout from '../layout/AuthLayout'
import Home from '../../features/Dashboard/ui/pages/Home'

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path:"/",
            element:<AuthLayout />,
            children:[
                {
                    path:"",
                    element:<Login/>,
                },
                {
                    path:"register",
                    element:<Register/>,
                }
            ]
        },
        {
            path:"/home",
            element:<DashboardLayout />,
            children:[
                {
                    path:"",
                    element:<Home/>,

                }
            ]
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes