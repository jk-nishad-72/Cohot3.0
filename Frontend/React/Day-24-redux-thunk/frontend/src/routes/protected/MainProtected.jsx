
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router'

const MainProtected = () => {

    
    const {user , isLoading } = useSelector((store)=>store.auth)

    console.log(isLoading);
    

    if(isLoading) return <h1> loading state.... </h1>
   

  

  return ( user ? <Outlet /> : <Navigate to={'/'} />)
}

export default MainProtected