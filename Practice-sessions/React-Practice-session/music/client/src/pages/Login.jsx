import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaApple } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router";
import { AuthHook } from "../hooks/AuthHook";

const Login = () => {



let { navigate, register , handleSubmit , errors , registerHandle , loginHandle } =    AuthHook() 

  return (

    <div className="min-h-screen bg-[#121212] text-white flex flex-col lg:flex-row">
      
      {/* LEFT SIDE (same hero reused for consistency) */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center p-10 overflow-hidden">
        
        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#BD00FF] via-[#FF00E5] to-[#00F0FF] blur-[120px] opacity-30"></div>

        <div className="z-10 max-w-lg">
          <h1 className="font-syne text-6xl font-bold leading-tight">
            VIBE <br />
            Feel every beat <br />
            <span className="text-[#00F0FF]">in your soul.</span>
          </h1>

          <p className="mt-6 text-gray-400 font-jakarta">
            Dive back into your personalized soundscape.
            Your music, your vibe, uninterrupted.
          </p>

          <div className="mt-10 rounded-xl border border-white/10 bg-[#1a1a1a] p-6 backdrop-blur-md">
            <div className="h-40 bg-gradient-to-r from-[#BD00FF] to-[#00F0FF] rounded-lg opacity-40"></div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-1 items-center justify-center p-6">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 shadow-xl backdrop-blur-lg"
        >
          {/* Heading */}
          <h2 className="text-3xl font-syne font-semibold mb-2">
            Welcome back
          </h2>
          <p className="text-gray-400 font-jakarta mb-6">
            Continue your journey into the soundscape.
          </p>

          {/* INPUTS */}
                    
          <form
            onSubmit={handleSubmit(loginHandle)}
            className="space-y-4"
          >

            {/* EMAIL */}
            <div>
              <label className="text-xs text-gray-400 font-grotesk">
                Email
              </label>
              <input
                type="email"
                placeholder="name@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter valid email",
                  },
                })}
                className="w-full mt-1 bg-[#0f0f0f] border border-white/10 rounded-lg px-3 py-3 outline-none focus:border-[#BD00FF] transition font-jakarta"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-xs text-gray-400 font-grotesk">
                Password
              </label>

              <div className="flex items-center bg-[#0f0f0f] border border-white/10 rounded-lg px-3 mt-1">
                <input
                  type="password"
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength:{
                      value:6,
                      message:'Minimun 6 character is required '
                    },
                    maxLength:{
                      value:15,
                      message:'Maximum 15 character is Allowed '
                    }
                  })}
                  className="w-full bg-transparent py-3 outline-none font-jakarta"
                />
                <FiEye className="text-gray-400 cursor-pointer" />
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* FORGOT PASSWORD */}
            {/* <div className="text-right">
              <span className="text-sm text-[#00F0FF] cursor-pointer font-grotesk">
                Forgot password?
              </span>
            </div> */}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-grotesk bg-gradient-to-r from-[#BD00FF] to-[#FF00E5] shadow-lg hover:scale-[1.02] transition"
            >
              SIGN IN
            </button>

          </form>

         

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-[1px] bg-white/10"></div>
            <span className="text-xs text-gray-400 font-grotesk">
              OR SIGN IN WITH
            </span>
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 border border-[#00F0FF]/40 py-2 rounded-lg hover:bg-[#00F0FF]/10 transition">
              <FaGoogle /> Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-white/20 py-2 rounded-lg hover:bg-white/10 transition">
              <FaApple /> Apple
            </button>
          </div>

          {/* FOOTER */}
          <p className="text-center text-sm text-gray-400 mt-6 font-jakarta">
            Don’t have an account?{" "}
            <span 
             onClick={()=>navigate('/auth/register')}
             className="text-[#00F0FF] cursor-pointer">
              Sign up
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};


export default Login;