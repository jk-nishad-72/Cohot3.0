
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router'

const MainProtected = () => { 

  const {isAuthenticated}  = useSelector((store)=>store.auth)

  // console.log(isAuthenticated);


    
  return (
    isAuthenticated ? <div>  <Outlet /> </div> : <Navigate to={'/'}  /> 
  )
}

export default MainProtected