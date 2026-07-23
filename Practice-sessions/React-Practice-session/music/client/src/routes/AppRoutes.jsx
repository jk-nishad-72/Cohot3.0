


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

const AppRoutes = () => {


    let router = createBrowserRouter([
        {
            path:'/',
            element: <ProtectedRoute />,
            children:[{
                path:'',
                element:<Mainlayout />,
                children:[
                    {
                        path:'',
                        element:<Home />
                    },
                    {
                        path:'/favrouite',
                        element:<Favrouite />
                    },
                    {
                        path:'/artist-dashboard',
                        element:<ArtiestDashboard />
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