import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { FiMenu, FiX, FiLogOut } from 'react-icons/fi';
import { useContext } from 'react';
import { MyContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' }, 
];

const Navbar = () => {

  
    let {  
              users , 
              setUsers , 
              isLoggedIn , 
              setIsLoggedIn 
  
              } = useContext(MyContext) 

              console.log(isLoggedIn); 
              
  
            

  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false);

  const initials = isLoggedIn.username
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

     const handleLogout = ()=>{

       localStorage.removeItem("isLoggedIn")
      setIsLoggedIn(null)
      navigate("/auth/login") 
      toast.success('Log out Succesfully ')


     }


  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0B2436] border-b border-white/5">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <svg width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 15c2.5-3 5.5-3 8 0s5.5 3 8 0 5.5-3 8 0" stroke="#3ED8C2" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M2 20c2.5-3 5.5-3 8 0s5.5 3 8 0 5.5-3 8 0" stroke="#F2C572" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
          </svg>
          <span className="font-['Fraunces'] italic text-[#F1F4F3] text-lg tracking-wide">Tidal</span>
        </div>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {({ isActive }) => (
                <span className="relative px-4 py-2 flex flex-col items-center">
                  <span
                    className={`text-[14px] font-medium transition-colors ${
                      isActive ? 'text-[#F1F4F3]' : 'text-[#8CA6B3] hover:text-[#DCE7E5]'
                    }`}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-[1px] left-4 right-4 h-[2px] bg-[#3ED8C2] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* user section — desktop */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-[#3ED8C2]/15 border border-[#3ED8C2]/30 flex items-center justify-center text-[#3ED8C2] text-[12px] font-medium font-['JetBrains_Mono']">
              {initials}
            </span>
            <span className="text-[#DCE7E5] text-[14px]">{isLoggedIn?.username}</span>
          </div>
          <button 
           
           onClick={handleLogout}
           className="flex items-center gap-1.5 text-[#8CA6B3] hover:text-[#E2896B] text-[13px] font-medium transition-colors">
            <FiLogOut size={15} />
            Logout
          </button>
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden text-[#DCE7E5]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-[#0B2436]"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-lg text-[14px] font-medium ${
                      isActive ? 'bg-white/5 text-[#F1F4F3]' : 'text-[#8CA6B3]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/5 px-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#3ED8C2]/15 border border-[#3ED8C2]/30 flex items-center justify-center text-[#3ED8C2] text-[12px] font-medium font-['JetBrains_Mono']">
                    {initials}
                  </span>
                  <span className="text-[#DCE7E5] text-[14px]">{isLoggedIn.username}</span>
                </div>
                <button 

                 onClick={handleLogout}
                 className="flex items-center gap-1.5 text-[#8CA6B3] hover:text-[#E2896B] text-[13px] font-medium transition-colors">
                  <FiLogOut size={15} />
                  Logout
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;