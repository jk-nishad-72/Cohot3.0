import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router"
import { loginEmployee } from "../state/authAction";

export const AuthHook = ()=>{
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState:{errors},
        reset,
    } = useForm({mode:"onChange"})


    // login submit handler
    const handleLoginSubmit = (data)=>{
        console.log(data);
        dispatch(loginEmployee(data))
        reset() 
    }


    // register rubmit handler 
    const handleRegisterSubmit = (data)=>{
        console.log(data);
        // reset()
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