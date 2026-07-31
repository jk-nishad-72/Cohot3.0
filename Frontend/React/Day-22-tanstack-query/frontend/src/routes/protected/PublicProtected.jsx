
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicProtected = () => {

  const {isAuthenticated}  = useSelector((store)=>store.auth)

  console.log(isAuthenticated);
  



    
  return (
     isAuthenticated ? <Navigate to={'/main'} /> :  <div> <Outlet /> </div> 
  )
}

export default PublicProtected