
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const MainProtected = () => {

    const { user  ,  isAuthenticated, isLoading} = useSelector((store)=>store.auth)

   console.log(isAuthenticated);
   


    return (
  
             !isAuthenticated ? <Navigate to={'/'} /> : <> <Outlet /> </> 
           
    )
}

export default MainProtected 