
import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PublicProtected from './protected/PublicProtected'
import AuthLayout from '../layout/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainProtected from './protected/MainProtected'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/authSlice'

const AppRoutes = () => {

    // Hydration -> In every render set state from localStorage
    const dispatch = useDispatch()

    const hydrateLoggedUser = ()=>{

          let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
     

          if(!loggedInUser) {
            
             toast.warn('UnAuthenticate User ')
             return
            }

        dispatch(addUser(loggedInUser))
          
    }


    useEffect(()=>{
        
        hydrateLoggedUser();

    }, [])

    let router = createBrowserRouter([
        {
            path:'/',
            element:<PublicProtected />,
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
                            path:'shop',
                            element:<Shop />,
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
  return (<RouterProvider router={ router} />)
}

export default AppRoutes