import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { userAuthHook } from "../hooks/userAuthHook";


const Register = () => { 

              let { 
                navigate,
                register , 
                handleSubmit,
                errors ,
                handleRegisterForm,
              }     =  userAuthHook();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.form
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onSubmit={handleSubmit(handleRegisterForm)}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">
          Create Account 🚀
        </h2>

        {/* Username */}
        <div className="flex items-center border rounded-md px-3 py-2 mb-4">
          <FaUser className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Username"
            className="w-full outline-none"
            {...register('username',{
                required:"User Name is required ",
                minLength:{
                    value:3,
                    message:'Minimum 3 character is Required'
                }, 
                maxLength:{
                    value:15,
                    message:'Maximum 15 character is Required'
                }
            })}
          />
      
        </div>

         {errors.username && (<p className="text-sm text-red-500 mb-3">{errors.username?.message}</p>)}

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
          Register
        </motion.button>

        {/* Footer */}
        <p className="text-sm text-center mt-4 text-gray-500">
          Already have an account?{" "}
          <span  
           onClick={()=> navigate('/auth/login')} 
          className="text-blue-500 cursor-pointer">Login</span>
        </p>
      </motion.form>
    </div>
  );
};

export default Register;