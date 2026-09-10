
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoutes = () => {

    const {employee , isLoading} = useSelector((state)=>state.auth)

    console.log("Protected Routes") 

    if(isLoading) return <h1>Loading... </h1>

    if(!employee) return <Navigate to={"/"} /> 

  return (
    <Outlet />
  )
}

export default ProtectedRoutes