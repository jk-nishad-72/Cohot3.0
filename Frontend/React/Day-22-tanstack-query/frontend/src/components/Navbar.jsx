import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import { removeUser } from '../features/authSlice';
import { useAuth } from '../hooks/useAuth';

const navLinks = [
  { to: '/main', label: 'Home' },
  { to: '/main/shop', label: 'Shop' },
  { to: '/main/about', label: 'About' },
];

const Navbar = () => { 

  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const { logoutUser } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink to={'/main'} className="flex items-center gap-1 shrink-0">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            sky
            <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Mart
            </span>
          </h1>
        </NavLink>

        {/* Desktop nav links with sliding indicator */} 
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50/70 p-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/main'}
              className="relative"
            >
              {({ isActive }) => (
                <span
                  className={`relative z-10   block rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isActive && ( 
                    <motion.span
                      layoutId="navPill"
                      className="text-slate-900  absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 shadow-sm shadow-sky-500/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </span>
              )} 

            </NavLink>
          ))} 
          
        </nav>

        {/* Right side actions */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/70 px-3 py-1.5">
            <FaRegUserCircle className="text-slate-500" />
            <span className="text-sm font-medium text-slate-700">
              {user?.username ?? 'Guest'}
            </span>
          </div>

          <motion.button
            whileHover={{ y: -1, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            <FaShoppingCart />
            Cart
          </motion.button>

          <motion.button
            onClick={logoutUser}
            whileHover={{ scale: 1.08, rotate: -6 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Log out"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-red-50 hover:text-red-500"
          >
            <IoIosLogOut className="text-lg" />
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-slate-200 bg-white"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-medium ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-3">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <FaRegUserCircle className="text-slate-500" />
                  {user?.username ?? 'Guest'}
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1 text-sm font-medium text-slate-700">
                    <FaShoppingCart /> Cart
                  </button>
                  <button
                    onClick={logoutUser}
                    className="flex items-center gap-1 text-sm font-medium text-red-500"
                  >
                    <IoIosLogOut className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;