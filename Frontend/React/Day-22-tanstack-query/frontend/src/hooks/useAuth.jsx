import { useNavigate } from "react-router"
import {useForm} from "react-hook-form"
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../features/authSlice";

export const useAuth =()=>{

     const navigate = useNavigate();
     const dispatch = useDispatch();
     const {
        register,
        handleSubmit,
        formState:{errors} ,
        reset,
        

     }  = useForm({mode:'onChange',}) 

     const [users,setUsers] = useState(()=>{
        return JSON.parse(localStorage.getItem('users') ) || [] 
     })



    //  register Logic 

     const registerForm = (data)=>{
        
        let find = users.find(u => u.email === data.email)
        if(find) return toast.error("Already Exist's ! ")
        find = [...users , data]

        setUsers(find)
        localStorage.setItem('users',JSON.stringify(find))
        reset()
        toast.success('Register SuccesFully ')
        navigate('/')



     }

    //  login Logic

     const loginForm = (data)=>{

        console.log(users);
        
     
        let find = users.find(u => u.email === data.email && u.password === data.password)

        console.log(find);

        if(!find) return toast.error("Invalid Credentials ! ")


             
        dispatch(addUser(find)) 
        localStorage.setItem('loggedInUser',JSON.stringify(find))
        navigate('/main')
        reset()
        toast.success('Login SuccesFully ')

     }

// log Oute logic 

    const logoutUser = ()=>{

         localStorage.removeItem('loggedInUser')
         dispatch(removeUser())
         toast.success('Log Out SuccesFully ')

    }

     return{
        navigate,
        register,
        handleSubmit,
        errors,
        registerForm,
        loginForm,
        logoutUser
     }
}