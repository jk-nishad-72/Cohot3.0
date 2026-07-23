import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import AuthLayout from "../layout/AuthLayout";
import Home from "../pages/Home";


const AppRoutes = () => {


    let router = createBrowserRouter([
        {
            path:'/',
            element :<Home />

        }
    ])


  return (
    <RouterProvider router={router} />
    // <h1>hello,</h1>
  )
}

export default AppRoutes