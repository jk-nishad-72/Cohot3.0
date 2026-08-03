import { useForm } from "react-hook-form";
import { useNavigate } from "react-router"
import { loginAPI } from "../api/useAuthAPI";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";




export const useAuth = ()=>{

     const navigate = useNavigate();
     const dispatch = useDispatch();

   let { 
    register,
    handleSubmit,
    formState:{errors},
    reset,
   }   = useForm({mode:'onChange'})


   const loginForm = async (data)=>{

      try {

         const result = await loginAPI(data)
         console.log('login Form result ',result);

         dispatch(addUser(result))
      } catch (error) {

        console.log('Login Form error',error);
        
        
      }

    reset()
   }
   
    return {
      
         navigate,
         register,
         handleSubmit,
         errors,
         loginForm,
        
    }
}