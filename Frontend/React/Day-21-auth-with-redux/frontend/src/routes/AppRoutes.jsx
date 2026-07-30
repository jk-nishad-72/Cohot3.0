
import React, { Children, useEffect } from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router'
import ProtectedRoute from './ProtectedRoute'
import MainLayout from '../layout/MainLayout'
import Home from "../pages/Home.jsx"
import AuthLayout from '../layout/AuthLayout.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import PublicRoute from './PublicRoute.jsx'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/userSlice.jsx'

const AppRoutes = () => {

    const dispatch = useDispatch()

    const hydrateUser  = ()=>{

        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

        if(!loggedInUser){
           
             toast.warn('Please login to continue')

        }

     dispatch(addUser(loggedInUser))
        
    }

    useEffect(()=>{
        hydrateUser()
    },[])

    const router = createBrowserRouter([

          {
            path:'/',
            element:<ProtectedRoute />,
            children:[{
                path:'',
                element:<MainLayout />,
                children:[
                    {
                        path:"",
                        element: <Home />
                    },
                ]
            }]
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
                        }
                    ]
                }
            ]

          }
    ])


  return (
     <RouterProvider router={router} />
  )
}

export default AppRoutes