import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiLoader } from 'react-icons/fi';
import { Navigate, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { MyContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const RIPPLES = [0, 1, 2];
const PARTICLES = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  left: 8 + Math.random() * 84,
  top: 10 + Math.random() * 80,
  size: 2 + Math.random() * 3,
  delay: Math.random() * 4,
  duration: 5 + Math.random() * 4,
  gold: i % 4 === 0,
}));

const Login = () => {

    let {
        register,
        handleSubmit,
        reset,
        formState:{errors} 
    
       } = useForm({
        mode:'onChange'
       })
    
       let {  
                users , 
                setUsers , 
                isLoggedIn , 
                setIsLoggedIn 
    
                } = useContext(MyContext) 

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [focusField, setFocusField] = useState(null);
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleSubmitForm = (data) => { 
 
      if(!isLoggedIn) {
        navigate('/auth/register') 
        reset() 
        return toast.error("User doesn't exist")
       }
        
     let  user = isLoggedIn.email === data.email && isLoggedIn.password === data.password  

      if(user){  
        navigate('/') 
        toast.success('Login successfully') 
        reset() 
      }
      else{ 
        toast.error('invalid email or password') 
      }     
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#F1F4F3]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      {/* DEPTHS — hero panel */}
      <div className="relative w-full h-64 sm:h-72 lg:h-auto lg:w-[46%] overflow-hidden bg-gradient-to-br from-[#081C2B] via-[#0B2436] to-[#0D2A3D] flex flex-col justify-between p-8 sm:p-10 lg:p-14 shrink-0">
        {/* ambient sonar rings */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {RIPPLES.map((i) => (
            <motion.span
              key={i}
              className="absolute rounded-full border border-[#3ED8C2]/40"
              style={{ width: 40, height: 40 }}
              animate={reduceMotion ? {} : { scale: [1, 7], opacity: [0.5, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: i * 1.6, ease: 'easeOut' }}
            />
          ))}
        </div>

        {/* drifting particles */}
        {!reduceMotion && (
          <div className="pointer-events-none absolute inset-0">
            {PARTICLES.map((p) => (
              <motion.span
                key={p.id}
                className={`absolute rounded-full ${p.gold ? 'bg-[#F2C572]' : 'bg-[#3ED8C2]'}`}
                style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
                animate={{ y: [0, -14, 0], opacity: [0.15, 0.75, 0.15] }}
                transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
              />
            ))}
          </div>
        )}

        {/* logo mark */}
        <div className="relative flex items-center gap-2.5">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 15c2.5-3 5.5-3 8 0s5.5 3 8 0 5.5-3 8 0" stroke="#3ED8C2" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M2 20c2.5-3 5.5-3 8 0s5.5 3 8 0 5.5-3 8 0" stroke="#F2C572" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
          </svg>
          <span className="font-['Fraunces'] italic text-[#F1F4F3] text-lg tracking-wide">Tidal</span>
        </div>

        {/* headline */}
        <div className="relative max-w-sm">
          <p className="font-['JetBrains_Mono'] text-[11px] tracking-[0.25em] text-[#3ED8C2]/70 uppercase mb-4">
            Field Log · Sign In
          </p>
          <h1 className="font-['Fraunces'] text-[28px] sm:text-[34px] leading-[1.15] text-[#F1F4F3]">
            Your logbook is right where you left it.
          </h1>
          <p className="hidden lg:block text-[#8CA6B3] text-sm mt-4 leading-relaxed">
            Dive notes, tide charts, and field entries — all waiting on the other side.
          </p>
        </div>

        <p className="hidden lg:block relative font-['JetBrains_Mono'] text-[11px] text-[#4A6473] tracking-wide">
          62°N · logging since 2019
        </p>
      </div>

      {/* SURFACE — form panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 lg:p-16">
        <motion.form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="w-full max-w-[380px]"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h2 variants={itemVariants} className="font-['Fraunces'] italic text-[#0F2635] text-[26px] mb-1.5">
            Welcome back
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#64798A] text-[14px] mb-9">
            Enter your credentials to access your logbook.
          </motion.p>

          {/* email */}
          <motion.div variants={itemVariants} className="mb-7">
            <label htmlFor="email" className="block text-xs font-medium text-[#64798A] tracking-wide mb-2">
              Email
            </label>
            <div className="relative flex items-center">
              <FiMail
                size={17}
                className={`absolute left-0 transition-colors duration-200 ${
                  focusField === 'email' ? 'text-[#2FBFA8]' : 'text-[#A9B8BE]'
                }`}
              />
              <input
                id="email"
                type="email"
                required
                {...register('email',{
                  required:'email is required',
                  pattern:{
                    value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message:'invalid email'
                  }
                })}

                onFocus={() => setFocusField('email')}
                onBlur={() => setFocusField(null)}
                placeholder="you@example.com"
                className="w-full bg-transparent border-b border-[#D8DFDC] pl-7 pb-2.5 text-[15px] text-[#0F2635] placeholder:text-[#B4C1C6] focus:outline-none"
              /> 
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] bg-[#2FBFA8]"
                initial={{ width: '0%' }}
                animate={{ width: focusField === 'email' ? '100%' : '0%' }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            {errors.email && <p className='text-red-300 text-xs'>{errors.email.message} </p>}  
          </motion.div>

          {/* password */}
          <motion.div variants={itemVariants} className="mb-5">
            <label htmlFor="password" className="block text-xs font-medium text-[#64798A] tracking-wide mb-2">
              Password
            </label>
            <div className="relative flex items-center">
              <FiLock
                size={17}
                className={`absolute left-0 transition-colors duration-200 ${
                  focusField === 'password' ? 'text-[#2FBFA8]' : 'text-[#A9B8BE]'
                }`}
              />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                {...register('password',{
                  required:'password is required',
                  minLength:{
                    value:6,
                    message:'password must be at least 6 characters long'
                  },
                  maxLength:{
                    value:15,
                    message:'password must be at most 15 characters long'
                  },
                 
                })}
                onFocus={() => setFocusField('password')}
                onBlur={() => setFocusField(null)} 
                placeholder="••••••••"
                className="w-full bg-transparent border-b border-[#D8DFDC] pl-7 pr-8 pb-2.5 text-[15px] text-[#0F2635] placeholder:text-[#B4C1C6] focus:outline-none"
              />
              <button
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-0 text-[#A9B8BE] hover:text-[#2FBFA8] transition-colors"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={showPassword ? 'on' : 'off'}
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                  </motion.span>
                </AnimatePresence>
              </button>
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] bg-[#2FBFA8]"
                initial={{ width: '0%' }}
                animate={{ width: focusField === 'password' ? '100%' : '0%' }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            {errors.password && <p className='text-red-300 text-xs'>{errors.password.message} </p>}  
          </motion.div>

          {/* remember / forgot */}
          <motion.div variants={itemVariants} className="flex items-center justify-between mb-9">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="peer sr-only"
              />
              <span className="w-4 h-4 rounded-[4px] border border-[#C7D2D6] peer-checked:bg-[#2FBFA8] peer-checked:border-[#2FBFA8] transition-colors flex items-center justify-center">
                {remember && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="text-[13px] text-[#64798A]">Remember me</span>
            </label>
            <a href="#" className="text-[13px] text-[#2FBFA8] hover:underline">
              Forgot password?
            </a>
          </motion.div>

          {/* submit */}
          <motion.button
            variants={itemVariants}
            type="submit"
            disabled={isLoading}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#0F2635] hover:bg-[#123047] text-[#F1F4F3] rounded-[10px] py-3.5 flex items-center justify-center gap-2 text-[15px] font-medium transition-colors disabled:opacity-70"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isLoading ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, rotate: 360 }}
                  exit={{ opacity: 0 }}
                  transition={{ rotate: { duration: 0.8, repeat: Infinity, ease: 'linear' }, opacity: { duration: 0.15 } }}
                  className="flex"
                >
                  <FiLoader size={17} />
                </motion.span>
              ) : (
                <motion.span
                  key="label"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  Sign in
                  <FiArrowRight size={16} /> 
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.p variants={itemVariants} className="text-center text-[13px] text-[#64798A] mt-7">
            New to Tidal?{' '}
            <button 
             type="button"
             onClick={()=> {

              
                navigate('/auth/register')
                
               
             }}  
             className="text-[#2FBFA8] font-medium hover:underline">
              Create an account
            </button>
          </motion.p>
        </motion.form>
      </div>
    </div>
  );
};

export default Login;