
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthContext } from '../context/AuthContext'

const PublicRoute = () => {


  let {loggedUser} = useContext(AuthContext)

  
  if(loggedUser) {
    return <Navigate to={'/'} />
  }
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PublicRoute