import { useNavigate } from "react-router"
import {useForm  } from "react-hook-form";
import { loginAPi } from "../api/useAuthAPI";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";

 export const useAuthHooks = ()=>{

    const navigate = useNavigate()
    const dispatch = useDispatch();
    

             let {
                register,
                handleSubmit,
                reset,
                formState:{errors},

             } =  useForm({mode:"onChange"})


   const registerForm =  (data) => {

                console.log(data);
                
                
                 
             }

     const loginForm = async (data) => {

        
             try {
              const result = await  loginAPi(data) 
            //   console.log('response of api', result);

              dispatch(addUser(result))
              toast.success('User logged In ')
             } catch (error) {
                console.log('login error frontend' ,error);
             }
        
     }

    return{
      navigate,
      register,
      handleSubmit,
      errors,
      registerForm,
      loginForm

    }

}