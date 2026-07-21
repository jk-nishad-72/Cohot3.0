import React, { useContext } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { MyContext } from "../context/MyUserContext";
import { toast } from "react-toastify";

const Login = () => {

     let navigate = useNavigate() 
     let {users , setUsers ,loggedUser , setLoggedUser} = useContext(MyContext)  


     let {
                register,
                handleSubmit,
                reset,
                formState:{errors}
    
                }       = useForm({
                                mode:'onChange' })
    
    
    
      const handleLoginForm =(data)=>{
    
        console.log(data);

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
    



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.form
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onSubmit={handleSubmit(handleLoginForm)} 
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">
          Welcome Back 👋
        </h2>

        {/* Email */}
        <div className="flex items-center border rounded-md px-3 py-2 mb-4">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none"
            {...register('email',{
                required:"Email  is required ",
                pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:'Invaid Email '
            })}
          />
        </div>

        {errors.email && (<p className="text-sm text-red-500 mb-3">{errors.email?.message}</p>)}


        {/* Password */}
        <div className="flex items-center border rounded-md px-3 py-2 mb-6">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Password"
            className="w-full outline-none"
            {...register('password',{
                required:"Password  is required ",
                minLength:{
                    value:6,
                    message:'Minimum  length 6 is Required'
                }, 
                maxLength:{
                    value:15,
                    message:'Maximum  length 15 is Required'
                }
            })}
          />
        </div>
        {errors.password && (<p className="text-sm text-red-500 mb-3">{errors.password?.message}</p>)}

        {/* Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Login
        </motion.button>

        {/* Footer */}
        <p className="text-sm text-center mt-4 text-gray-500">
          Don’t have an account?{" "}
          <span 
           onClick={()=> navigate('/auth/register')}
           className="text-blue-500 cursor-pointer">Register</span>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;