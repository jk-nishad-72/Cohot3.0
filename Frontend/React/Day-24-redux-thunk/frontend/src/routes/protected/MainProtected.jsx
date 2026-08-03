
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router'

const MainProtected = () => {

    
    const {user , isAuthenticated} = useSelector((store)=>store.auth)

    console.log(user ,isAuthenticated);


  return ( isAuthenticated ? <Outlet /> : <Navigate to={'/'} />)
}

export default MainProtected