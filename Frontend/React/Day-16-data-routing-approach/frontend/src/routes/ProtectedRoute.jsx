
import React, { useContext } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router'
import { MyContext } from '../context/AuthContext'

const ProtectedRoute = () => {

    let {isLoggedIn} = useContext(MyContext) 
    const navigate = useNavigate();


 if(!isLoggedIn){  
    
     return  <Navigate to={'/auth/login'} />
 } 

 return < Outlet /> 

}

export default ProtectedRoute