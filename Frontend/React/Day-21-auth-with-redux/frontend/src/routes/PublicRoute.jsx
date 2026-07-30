
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => { 
  
      const {user} = useSelector((store)=>store.auth)
      console.log(user);
  

      if(user){
        return <Navigate to={'/'} /> 
      }
  return (
    <Outlet />
  )
}

export default PublicRoute