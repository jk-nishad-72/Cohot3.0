
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import DashBoardLayout from '../layout/DashBoardLayout'
import Dashboard from '../pages/Dashboard'
import AllNotesPage from '../pages/AllNotesPage'
import Favorites from '../pages/Favorites'
import Notebooks from '../pages/Notebooks'
import Tags from '../pages/Tags'
import Archive from '../pages/Archive'
import AddNotesPage from '../pages/AddNotesPage'

const AppRoutes = () => {

     const router = createBrowserRouter([

        {
            path:'/',
            element:<AuthLayout />,
            children:[
                {
                    path:"",
                    element:<Login />,

                },
                {
                    path:"register",
                    element:<Register />,
                    

                }
            ]

        },
        {
            path:"/dashboard",
            element:<DashBoardLayout />,
            children:[
                {
                    path:"",
                    element:<Dashboard />
                },
                {
                    path:"allNotes",
                    element:<AllNotesPage />
                },{
                    path:"favorites",
                    element:<Favorites />
                },
                {
                    path:"notebooks",
                    element:<Notebooks />
                },
                {
                    path:"tags",
                    element:<Tags />
                },
                {
                    path:"archive",
                    element:<Archive />
                },
                {
                    path:"addNote",
                    element:<AddNotesPage />
                },
                
            ]
        }
     ])
  return (
    <>
         <RouterProvider router={router} />
    </>
  )
}

export default AppRoutes