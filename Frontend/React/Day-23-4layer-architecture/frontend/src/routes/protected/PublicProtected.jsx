
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicProtected = () => {

  const { user  ,  isAuthenticated, isLoading} = useSelector((store)=>store.auth)

  
  return (

           isAuthenticated ? <Navigate to={'/main'} /> : <> <Outlet /> </> 
         
  )
}

export default PublicProtected