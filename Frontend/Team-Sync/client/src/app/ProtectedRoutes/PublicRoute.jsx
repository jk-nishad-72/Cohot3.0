
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => {

    const {employee , isLoading} = useSelector((state)=>state.auth)

        console.log("Public Route")


        if(isLoading) return <h1> Loading.... </h1>

        if(employee){
            return <Navigate to={"/home"} />
        }
        
  return (
    <>
         <Outlet />
    </>
  )
}

export default PublicRoute