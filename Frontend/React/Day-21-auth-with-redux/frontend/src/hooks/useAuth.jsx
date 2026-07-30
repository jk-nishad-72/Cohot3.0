import { useNavigate } from "react-router"
import {useForm} from 'react-hook-form'
import { useState } from "react";
import {toast} from 'react-toastify'
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice.jsx";

export const useAuth = ()=>{
 
      const navigate = useNavigate();
      const dispatch = useDispatch(); 
      const [users , setUsers] =  useState(()=>{
       return JSON.parse(localStorage.getItem('loggedUsers') ) || [] 
      }

      )
      

      const {
         register ,
         handleSubmit,
         formState:{errors},
         reset,
      }  = useForm({
             mode:'onChange',
      })
 
      const registerForm = (data)=>{
  
             console.log(users, data);

       let find = users.find((u)=> u.email === data.email);

       if(find){

           toast.error("User already exists");
           return
       }

        find = [...users , {...data , id:nanoid()}]
       
        setUsers(find);
        localStorage.setItem('loggedUsers',JSON.stringify(find))
        toast.success("User registered successfully");
        reset()
        navigate('/auth/login')

      }
      


      const loginForm = (data)=>{
  
             console.log( users, data);
       const find = users.find((u)=> u.email === data.email && u.password === data.password)

       if(!find){

        toast.error("Invalid credentials");
        return
       }

       dispatch(addUser(find))
       localStorage.setItem('loggedInUser',JSON.stringify(find))
       toast.success("Login successfully");
       navigate("/");
       reset()
             
      }



    return {
         
          navigate ,
          register,
          handleSubmit,
          errors,
          registerForm,
          loginForm,
    }
}