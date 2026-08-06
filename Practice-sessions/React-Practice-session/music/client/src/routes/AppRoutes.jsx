


import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import ProtectedRoute from './ProtectedRoute'
import Mainlayout from '../layout/Mainlayout'
import Home from '../pages/Home'
import Favrouite from '../pages/Favrouite'
import ArtiestDashboard from '../pages/ArtiestDashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PublicRoute from './PublicRoute'
import AuthLayout from '../layout/AuthLayout'
import RoleProtectedRoute from './RoleProtectedRoute '
import HomeLayout from '../layout/HomeLayout'

const AppRoutes = () => {


    let router = createBrowserRouter([
        {
            path:'/',
            element: <ProtectedRoute />,
            children:[{

                path:'',
                element:<Mainlayout />,
                children:[
                    // listener only 
                     {
                         element:<RoleProtectedRoute allowRole={['listener']} />,
                         children:[
                                 {
                                    path:'',
                                    element:<HomeLayout />,
                                    children:[ 
                                         { path:'',
                                           element:<Home />
                                         },
                                         {
                                          path:'favrouite',
                                          element:<Favrouite />
                                           },
                                    ]
                                 }
                               ]

                     },
                    // arstist only
                    {
                        element:<RoleProtectedRoute allowRole={['artist']} />,
                        children:[ 
                            {
                                 path:'artist-dashboard',
                                 element:<ArtiestDashboard />
                            },
                        ]
                    }, 

                    
                ]
            }]
        },

        {
            path:'/auth',
            element:<PublicRoute />,
            children:[{
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
                    }, 
                ]
            }]

        }

    ])
  return (
    
     <RouterProvider router={ router } />
  )
}

export default AppRoutes