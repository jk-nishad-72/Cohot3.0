
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import DashBoardLayout from '../layout/DashBoardLayout'
import Dashboard from '../pages/Dashboard/Dashboard'
import AllNotesPage from '../pages/Dashboard/AllNotesPage'
import Favorites from '../pages/Dashboard/Favorites'
import Notebooks from '../pages/Dashboard/Notebooks'
import Tags from '../pages/Dashboard/Tags'
import Archive from '../pages/Dashboard/Archive'
import AddNotesPage from '../pages/Dashboard/AddNotesPage'
import UpdateNote from '../pages/Dashboard/UpdateNote'
import SingleNote from '../pages/Dashboard/SingleNote'

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
                    path:"update/:id",
                    element:<UpdateNote />
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
                    {
                    path:"view/:id",
                    element:<SingleNote />
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