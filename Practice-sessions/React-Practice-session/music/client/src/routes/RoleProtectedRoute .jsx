
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router';
import { toast } from 'react-toastify';

const RoleProtectedRoute  = ({allowRole}) => {

    let {loggedUser } = useContext(AuthContext) 

    console.log(loggedUser , allowRole);


    if(!loggedUser) return <Navigate to={'/auth/login'} replace/> 

    if(!allowRole.includes(loggedUser.role)) 
    {

        let redirectTo = loggedUser.role === 'artist' ? '/artist-dashboard' : '/'
        return <Navigate to={redirectTo} replace/> 
    }
    
  return (<Outlet /> )
}

export default RoleProtectedRoute  