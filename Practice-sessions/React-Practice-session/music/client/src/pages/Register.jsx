import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaApple } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { data, useNavigate } from "react-router";
import {useForm} from 'react-hook-form'
import { AuthHook } from "../hooks/AuthHook";
import { AuthContext } from "../context/AuthContext";

const Register = () => { 

        let { role, setRole } = useContext(AuthContext)
      let { navigate, register , handleSubmit , errors , registerHandle } =       AuthHook() 


  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col lg:flex-row">
      
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center p-10 overflow-hidden">
        
        {/* Gradient Glow */}
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#BD00FF] via-[#FF00E5] to-[#00F0FF] blur-[120px] opacity-30"></div>

        <div className="z-10 max-w-lg">
          <h1 className="font-syne text-6xl font-bold leading-tight">
            VIBE <br />
            Where every beat <br />
            <span className="text-[#00F0FF]">finds its soul.</span>
          </h1>

          <p className="mt-6 text-gray-400 font-jakarta">
            Join a community of 10M+ creators and fans.
            Experience sound in high-fidelity, layered with electric sophistication.
          </p>

          {/* Placeholder artwork */}
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
          
          <h2 className="text-3xl font-syne font-semibold mb-2">
            Create your account
          </h2>
          <p className="text-gray-400 font-jakarta mb-6">
            Start your journey into the soundscape.
          </p>

          {/* ROLE TOGGLE */}
          <div className="mb-6">
            <p className="text-xs text-gray-400 mb-2 font-grotesk">I AM A...</p>

            <div className="flex bg-[#0f0f0f] rounded-full p-1">
              {["listener", "artist"].map((item) => (
                <button
                  key={item}
                  onClick={() => setRole(item)}
                  className={`flex-1 py-2 rounded-full text-sm font-grotesk transition-all ${
                    role === item
                      ? "bg-gradient-to-r from-[#BD00FF] to-[#FF00E5] text-white shadow-lg"
                      : "text-gray-400"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* INPUTS */} 
        <form 
  onSubmit={handleSubmit(registerHandle)}
  className="space-y-4"
>

  {/* FULL NAME */}
  <div>
    <label className="text-xs text-gray-400 font-grotesk">
      Full Name
    </label>
    <input
      type="text"
      placeholder="Enter your name"
      {...register("fullName", {
        required: "Full Name is required",
        minLength: {
          value: 3,
          message: "Minimum 3 characters required",
        },
      })}
      className="w-full mt-1 bg-[#0f0f0f] border border-white/10 rounded-lg px-3 py-3 outline-none focus:border-[#BD00FF] transition font-jakarta"
    />
    {errors.fullName && (
      <p className="text-red-500 text-sm mt-1">
        {errors.fullName.message}
      </p>
    )}
  </div>

  {/* USERNAME */}
  <div>
    <label className="text-xs text-gray-400 font-grotesk">
      Username
    </label>
    <input
      type="text"
      placeholder="@vibing_user"
      {...register("username", {
        required: "Username is required",
        pattern: {
          value: /^[a-zA-Z0-9_]+$/,
          message: "Only letters, numbers & underscore allowed",
        },
      })}
      className="w-full mt-1 bg-[#0f0f0f] border border-white/10 rounded-lg px-3 py-3 outline-none focus:border-[#BD00FF] transition font-jakarta"
    />
    {errors.username && (
      <p className="text-red-500 text-sm mt-1">
        {errors.username.message}
      </p>
    )}
  </div>

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
          minLength: {
            value: 6,
            message: "Minimum 6 characters required",
          },
          maxLength: {
            value: 16,
            message: "Maximum 16 characters allowed",
          },
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

  {/* SUBMIT BUTTON (IMPORTANT FIX) */}
  <button
    type="submit"
    className="mt-2 w-full cursor-pointer py-3 rounded-lg font-grotesk bg-gradient-to-r from-[#BD00FF] to-[#FF00E5] shadow-lg hover:scale-[1.02] transition"
  >
    CREATE ACCOUNT
  </button>

</form>


          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-[1px] bg-white/10"></div>
            <span className="text-xs text-gray-400 font-grotesk">
              OR SIGN UP WITH
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

          <p className="text-center text-sm text-gray-400 mt-6 font-jakarta">
            Already have an account?{" "}
            <span
            onClick={()=>navigate('/auth/login')}
            className="text-[#00F0FF] cursor-pointer"> 
              Sign in
            </span> 

          </p>

        </motion.div>
      </div>
    </div>
  );
};


export default Register;