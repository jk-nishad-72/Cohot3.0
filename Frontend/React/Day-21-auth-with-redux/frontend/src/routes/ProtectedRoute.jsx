
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router'

const ProtectedRoute = () => { 

   
  const {user} = useSelector((store)=> store.auth)
  const navigate = useNavigate()

 console.log('protected route');
 
   if(!user){
    
   
     return  <Navigate to={'/auth/login'} />  
   } 
 
   
  return ( <Outlet />)
}

export default ProtectedRoute