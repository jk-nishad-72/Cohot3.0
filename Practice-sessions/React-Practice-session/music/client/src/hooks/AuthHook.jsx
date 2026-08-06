
import React from 'react'
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { toast  } from "react-toastify";

export const AuthHook = () => {


    
  const navigate = useNavigate()

   let { role , users ,setUsers ,loggedUser , setLoggedUser    } = useContext(AuthContext)

    let {

       register ,
       reset,
       handleSubmit,
       formState:{errors },

    }  = useForm({mode:'onChange'}); 


  const registerHandle = (data )=>{

     let newUser = users.find((user)=> user.email === data.email)

     if(newUser){

         toast.warn("User already Exist's")
         return 
     }

     newUser  = [...users , {...data , role:role , _id:Date.now()}]

      setUsers(newUser)
      localStorage.setItem('users',JSON.stringify(newUser))
      toast.success('Account Registered ')
      reset()
      navigate('/auth/login')
    }   
  const loginHandle = (data)=>{

     let userLog = users.find((user)=> user.email === data.email) 

     if(!userLog){
        toast.error('User Not Found')
        return 
     }

     if(userLog.password !== data.password ){

        toast.warn('Please check password ')
        return

     }

     setLoggedUser(userLog)
     localStorage.setItem('loggedUser',JSON.stringify(userLog))
     toast.success('Login SuccessFully ')
     reset();
    navigate(data.role === 'artist' ? '/artist-dashboard' : '/', { replace: true })
 
    }


  return { navigate, register , handleSubmit , errors , registerHandle , loginHandle }
}
