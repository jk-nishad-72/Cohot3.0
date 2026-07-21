
import React from 'react'
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { MyContext } from '../context/MyUserContext';

 export const userAuthHook = () => {



let {users , setUsers ,loggedUser , setLoggedUser} = useContext(MyContext)  

let navigate = useNavigate()  


let {
           register,
           handleSubmit,
           reset,
           formState:{errors}

           }       = useForm({
                           mode:'onChange' })



 const handleLoginForm =(data)=>{

  

   let userExist  = users.find((user)=> data.email === user.email)
   
        if(!userExist){ 
          toast.error("User Doesn't exists")
          return;
        }
        if(userExist.password !== data.password){
            toast.error("Invalid Password")
            return;
        } 
         
           setLoggedUser(userExist)
           localStorage.setItem('loggedUser',JSON.stringify(userExist))
           toast.success(` Login Succesfully `)
           reset();
           navigate('/') 
   

 }
 
  const handleRegisterForm =(data)=>{


     let newUser  = users.find((user)=> data.email === user.email)

     if(newUser){
       toast.error("User already exists")
       return;
     }

        newUser = [...users , {...data , _id:Date.now()}]

        setUsers(newUser)
        localStorage.setItem('users',JSON.stringify(newUser))
        toast.success(` Login Succesfully `)
        reset();
        navigate('/auth/login') 
        
  }




  return { 
     navigate,
     register , 
     handleSubmit,
     errors ,
     handleLoginForm,
     handleRegisterForm,
   }
}

