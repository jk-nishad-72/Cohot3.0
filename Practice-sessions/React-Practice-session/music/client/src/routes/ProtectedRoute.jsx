
import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Navigate, Outlet } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify'

const ProtectedRoute = () => { 


  let { role , loggedUser } = useContext(AuthContext)

  if(!loggedUser){

      toast.error('Unauthrized user ')
      return <Navigate to={'/auth/login'} replace />
  }


  console.log(role);


return (
    <div>
        <Outlet />
    </div>

  )
}

export default ProtectedRoute
