

import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router";
import { MyContext } from '../context/MyUserContext';

const PubliRoute = () => {

    let {loggedUser} = useContext(MyContext)   

    if(loggedUser){

        return <Navigate to={'/'} /> 
    }

  return (
    <div> <Outlet /> </div> 
  )
}

export default PubliRoute 