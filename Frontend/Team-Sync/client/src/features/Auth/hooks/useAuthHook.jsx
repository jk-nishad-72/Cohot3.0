import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router"
import { loginEmployee } from "../state/authAction";

export const authHook = ()=>{
    
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState:{errors},
        reset,


    } = useForm({mode:"onChange"})

    const handleLoginSubmit = (data)=>{
        console.log(data);
        dispatch(loginEmployee(data))
        reset() 
    }

    const handleRegisterSubmit = (data)=>{
        
        console.log(data);
       reset()
    }
    return{
         navigate,
         handleSubmit,
         register,
         errors,
         handleLoginSubmit,
         handleRegisterSubmit
    }
}