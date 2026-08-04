
import { Outdent } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicProtected = () => {


    const {user , isAuthenticated} = useSelector((store)=>store.auth)

   
    

  return ( user ? <Navigate to={'/main'} />: <Outlet />) 
}

export default PublicProtected