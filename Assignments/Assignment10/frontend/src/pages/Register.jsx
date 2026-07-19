import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FiShoppingBag, FiMail, FiLock, FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import { MyShopStoreContext } from "../context/MyContext";
import { nanoid } from "nanoid";


const Register = () => {

     const navigate = useNavigate()

     let {allUsers , setAllUser}    =   useContext(MyShopStoreContext)
     let {register , handleSubmit , formState:{errors} , reset }   = useForm({mode:'onChange'})

      const handleFormSubmit = (data)=>{

         if(allUsers.find((user)=>(user.email === data.email))){
            toast.error('Email Already Registered')
            return 
         }

         if(data.password !== data.cPassword){
            toast.error('Password Do Not Match')
            return 
         }

         let newArr = [...allUsers , {...data , _id:nanoid() , role:'customer' , status:'active' , cart:[] , address:[] , favorites:[] , orders:[]}]
         setAllUser(newArr) 
         localStorage.setItem('allUsers' , JSON.stringify(newArr)) 
         reset()
         toast.success('Account Created Successfully')
         navigate('/login')
      
      }
 

  return (
  <div className="fixed inset-0 z-[999] bg-[#f5f5f7] bg-white/70 backdrop-blur-md flex items-center justify-center px-4">
      
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-2xl shadow-lg border  border-gray-200 overflow-hidden"
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
              Join Buyzaar and explore
              <br />
              eco-friendly shopping 🌿
            </h2>
            <p className="text-gray-500 mt-3">
              Create your account and start discovering quality products curated just for you.
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
            Create Account
          </h2>

          <form  onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
            
            {/* Name */}
            <div className="flex items-center border rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-gray-300">
              <FiUser className="text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                {...register('fName',{
                    required:'Full Name is Required ! ',
                    minLength:{
                        value:3,
                        message:'Include minimum 3 Characters  '
                    },
                    maxLength:{
                        value:15,
                        message:'Maximum 15 Characters  '
                    }
                })}
                className="w-full outline-none px-2 bg-transparent"
              />
            </div>

            {errors.fName && <p className=" text-red-500 text-sm "> {errors.fName.message} </p>}

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

            {/* Confirm Password */}
            <div className="flex items-center border rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-gray-300">
              <FiLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Confirm Password"
                {...register('cPassword',{
                    required:'Confirm Password is required '
                })}

                className="w-full outline-none px-2 bg-transparent"
              />
            </div>
            {errors.cPassword && <p className=" text-red-500 text-sm "> {errors.cPassword.message} </p>}


            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full hover:opacity-90 transition"
            >
              Register
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <div className="flex-1 h-[1px] bg-gray-200"></div>
              OR
              <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>

            {/* Social Login */}
            <button className="w-full border py-3 rounded-full hover:bg-gray-50 transition flex items-center justify-center gap-3">
            <FcGoogle size={20} />
              Continue with Google
            </button>

            {/* Login Redirect */}
            <p className="text-sm text-gray-500 text-center">
              Already have an account?{" "}
              <span 
              onClick={()=>navigate('/login')} 
               className=" text-gray-800 hover:text-black font-medium cursor-pointer ">
                Login
              </span>
            </p>

          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;