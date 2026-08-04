

import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import {useDispatch } from "react-redux";
import { loginUserAction } from "../state/authOuterAction";
export const useAuth = ()=>{


    const navigate = useNavigate()
   let {register ,handleSubmit , reset ,formState:{errors}} = useForm({mode:"onChange"})
  const dispatch  = useDispatch()


   const loginForm = async (data) => {

         try {

            dispatch(loginUserAction(data))
            
         } catch (error) {

            console.log('loginform error',error);
            
            
         }
    
   }



    return{
         navigate,
         register,
         handleSubmit,
         errors,
         loginForm,


    }
}