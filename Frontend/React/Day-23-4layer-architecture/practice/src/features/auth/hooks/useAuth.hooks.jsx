
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginApi } from "../api/auth.api";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";


export const useAuth =  ()=>{

   const navigate = useNavigate();
   const dispatch = useDispatch()
  let { register ,handleSubmit , reset, formState:{errors}} =   useForm({mode:"onChange"})


  const loginForm = async (data)=>{

     
     try {

        let result = await loginApi(data)
        console.log('login form result' , result); 
        dispatch(addUser(result)) 


     } catch (error) {  

        console.log('login form error' , error);
     }



     reset()
  }

    

    return {

        navigate,
        register,
        handleSubmit,
        errors,
        loginForm
    }

}