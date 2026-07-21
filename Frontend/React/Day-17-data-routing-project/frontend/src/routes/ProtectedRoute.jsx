
import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router";
import { MyContext } from '../context/MyUserContext';

const ProtectedRoute = () => {

    let {loggedUser} = useContext(MyContext)   

    if(!loggedUser){

        return <Navigate to={'/auth/login'} />
    }

  return (
    <div> <Outlet /> </div> 
  )
}

export default ProtectedRoute 