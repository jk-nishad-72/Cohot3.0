
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
export const useAuthHook = ()=>{

     const navigate = useNavigate()
     const { register , handleSubmit , reset , formState:{errors}} = useForm({mode:'onChange'})


    return {

         navigate,
         register,
         handleSubmit,
         errors,
    }
}