import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";

const AppRoutes = () => {
    let router = createBrowserRouter([


        {
            path:'/',

        }

    ])
    return (
        <div>
             <RouterProvider router={router} />
        </div>
    )
}
export default AppRoutes
