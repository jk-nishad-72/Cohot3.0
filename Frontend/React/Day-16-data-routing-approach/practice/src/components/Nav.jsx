import React from "react";
import { NavLink } from "react-router";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext } from "react";
import { MyContext } from "../context/MyUserContext";
import { toast } from "react-toastify";

const Nav = () => {


   let {users , setUsers ,loggedUser , setLoggedUser} = useContext(MyContext)  


  const navLinkStyle = ({ isActive }) =>
    `relative px-3 py-1 font-medium transition duration-300 ${
      isActive
        ? "text-blue-500"
        : "text-gray-700 hover:text-blue-400"
    }`;



    const handleLogout = ()=>{

      let confirm = window.confirm('Are you sure About Log out ! ')

      if(!confirm) return toast.error(' Log Out Cancel ')
          
      setLoggedUser(null)
      localStorage.removeItem('loggedUser')
      toast.success('Logout successfully')
    }


  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-2xl font-bold text-blue-500 cursor-pointer"
      >
        Tekan 
      </motion.div>

      {/* Nav Links */}
      <div className="flex gap-6"> 
        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkStyle}>
          About
        </NavLink>
        <NavLink to="/service" className={navLinkStyle}>
          Services
        </NavLink>
      </div>

      {/* User Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <FaUserCircle size={22} />
          <span className="hidden md:block"> {loggedUser.username} </span> 
        </div>

        <motion.button
         onClick={handleLogout}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600 transition"
        >
          <FaSignOutAlt />
          Logout
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Nav;