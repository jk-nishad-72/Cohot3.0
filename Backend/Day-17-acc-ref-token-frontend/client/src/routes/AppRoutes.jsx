
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from '../app/App.jsx'
import Register from '../modules/pages/Register.jsx'

const AppRoutes = () => {

    let router = createBrowserRouter([

        {

            path:"/",
            element:<App />,
           
        },
        {

             path:"/register",
            element:<Register />,

        }
    ])

  return (
    <>

   <RouterProvider router={router} />
    </>
  )
}

export default AppRoutes