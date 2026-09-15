

import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import DashboardLayout from '../layout/DashboardLayout'
import Login from '../../features/Auth/ui/pages/Login'
import Register from '../../features/Auth/ui/pages/Register'
import AuthLayout from '../layout/AuthLayout'
import Home from '../../features/Dashboard/ui/pages/Home'
import { useDispatch } from 'react-redux'
import { currentLoggedEmployee } from '../../features/Auth/state/authAction.jsx'
import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes.jsx'
import PublicRoute from '../ProtectedRoutes/PublicRoute.jsx'
import { commerRoutes } from './commenRotes.jsx'

const AppRoutes = () => {


const dispatch = useDispatch();

useEffect(()=>{
    (async () => {
         try {
            dispatch(currentLoggedEmployee())  
         } catch (error) {
             console.log("Hydration Error",error)
         }
    })()
},[])


    const router = createBrowserRouter([
        {
            path:"/",
            element:<PublicRoute />,
            children:[
                {
                    path:"",
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
                }
            ]
        },
        {
            path:"/home",
            element:<ProtectedRoutes />,
            children:[
                {
                    path:"",
                    element:<DashboardLayout />,
                    children:[...commerRoutes] 
                        
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes