
import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PublicProtected from './protected/PublicProtected'
import AuthLayout from '../app/layout/AuthLayout'
import Login from '../features/auth/ui/pages/Login'
import Register from '../features/auth/ui/pages/Register'
import MainLayout from '../app/layout/MainLayout'
import MainProtected from './protected/MainProtected'
import About from '../shared/ui/pages/About'
import { hydrateAPI } from '../features/auth/api/useAuthAPI'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/auth/state/authSlice'
import Home from '../shared/ui/pages/Home'
import Shop from '../shared/ui/pages/Shop'
import { hydrationAction } from '../features/auth/state/authOuterAction'
import CartPage from '../features/cart/ui/pages/CartPage'
import OrdersPage from '../features/orders/ui/pages/OrdersPage'

const AppRoutes = () => {

    const dispatch = useDispatch();


    useEffect(()=>{
        (async()=>{

            try {

                // let result = await hydrateAPI() 
                // console.log('hydration result', result);
                // dispatch(addUser(result))

                // replace by 

                dispatch(hydrationAction()) 
                
            } catch (error) {

                console.log('hydration fun error',error);
                
            }
        })()
    },[])

    let router = createBrowserRouter([
         
         {
            path:"/",
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
                },
            ]

         },
         {
            path:"/main",
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
                        {
                            path:'shop',
                            element:<Shop />,
                        },
                        {
                            path:'cart',
                            element:<CartPage />,
                        },
                         {
                            path:'orders',
                            element:<OrdersPage />,
                        },


                    ]
                },
            ]

         },

    ])
  return (
    
     <RouterProvider router={router} />
  )
}

export default AppRoutes