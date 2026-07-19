import React from "react";
import { motion } from "framer-motion";
import { FiShoppingBag, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useContext } from "react";
import { MyShopStoreContext } from "../context/MyContext";

const Login = () => {

     let {allUsers , setAllUser , setCurrentUser} = useContext(MyShopStoreContext) 
     let {register , handleSubmit , formState:{errors} , reset }   = useForm({mode:'onChange'})
     const navigate = useNavigate()


    const handleLoginFun = (data)=>{

         let foundUser= allUsers.find((user)=>(user.email === data.email))
         console.log(foundUser);
         
         if(!foundUser){
            toast.error('User Does Not Exist !')
            return 
         }
         let  checkUser = foundUser.password === data.password 

         if(!checkUser){
            toast.error('Invalid Password !')
            return
         }
         setCurrentUser(foundUser)
         localStorage.setItem('currentUser' , JSON.stringify(foundUser)) 
         reset();
         toast.success('Login  Successfully')
         navigate('/')  
    }
  return (
    <div className="fixed inset-0 z-[999] bg-[#f5f5f7] flex items-center justify-center px-4 font-sans">
      
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-2xl shadow-lg  border  border-gray-200 overflow-hidden"
      >
        
        {/* LEFT SIDE - Branding */}
        <div className="hidden md:flex flex-col justify-between p-10 bg-gradient-to-br from-gray-100 to-white">
          
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-semibold">
            <FiShoppingBag className="text-2xl" />
            Buyzaar
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-semibold leading-snug">
              Welcome back to Buyzaar 👋
            </h2>
            <p className="text-gray-500 mt-3">
              Login to continue your eco-friendly shopping journey.
            </p>
          </div>

          {/* Footer */}
          <p className="text-sm text-gray-400">
            © 2026 Buyzaar. All rights reserved.
          </p>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="p-8 md:p-10">
          
          <h2 className="text-2xl font-semibold mb-6">
            Login to your account
          </h2>

          <form onSubmit={handleSubmit(handleLoginFun)} className="space-y-5">
            
            {/* Email */}
            <div className="flex items-center border rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-gray-300">
              <FiMail className="text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"

                {...register("email", {
                    required: "Email is required!",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                className="w-full outline-none px-2 bg-transparent"
              />
            </div>
            {errors.email && <p className=" text-red-500 text-sm "> {errors.email.message} </p>}


            {/* Password */}
            <div className="flex items-center border rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-gray-300">
              <FiLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                {...register('password',{
                    required:'Password is Required ! ',
                    minLength:{
                        value:6,
                        message:'Include minimum 6 Characters  '
                    },
                    maxLength:{
                        value:10,
                        message:'Maximum 10 Characters  '
                    }
                })}
                className="w-full outline-none px-2 bg-transparent"
              />
            </div>
            {errors.password && <p className=" text-red-500 text-sm "> {errors.password.message} </p>}

            {/* Forgot Password
            <div className="text-right text-sm">
              <span className="text-gray-500 cursor-pointer hover:text-black">
                Forgot Password?
              </span>
            </div> */}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full hover:opacity-90 transition"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <div className="flex-1 h-[1px] bg-gray-200"></div>
              OR
              <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>

            {/* Google Login */}
             <button className="w-full border py-3 rounded-full hover:bg-gray-50 transition flex items-center justify-center gap-3">
                       <FcGoogle size={20} />
                         Continue with Google
                       </button>

            {/* Redirect */}
            <p className="text-sm text-gray-500 text-center">
              Don’t have an account?{" "}
              <span 
              onClick={()=>navigate('/register')}
               className="text-black font-medium cursor-pointer">
                Register
              </span>
            </p>

          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;