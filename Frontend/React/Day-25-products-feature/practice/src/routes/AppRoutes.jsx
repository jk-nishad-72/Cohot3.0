
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthProtected from './protected/AuthProtected'
import AuthLayout from '../app/layout/AuthLayout'
import Home from '../shared/ui/pages/Home'
import Login from '../features/auth/ui/pages/Login'
import Register from '../features/auth/ui/pages/Register'
import MainProtected from './protected/MainProtected'
import MainLayout from '../app/layout/MainLayout'
import About from '../shared/ui/pages/About'

const AppRoutes = () => {

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
                             element:<Login />,

                        },
                        {
                             path:'register',
                             element:<Register />,

                        },
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
                             element:<Home />,

                        },
                        {
                             path:'about',
                             element:<About />,
                        },
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