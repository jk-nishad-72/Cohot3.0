import React, { useContext } from "react";
import { NavLink } from "react-router";
import { FaUserCircle, FaSignOutAlt, FaHome, FaInfoCircle, FaServicestack } from "react-icons/fa";
import { motion } from "framer-motion";
import { MyContext } from "../context/MyUserContext";
import { toast } from "react-toastify";
import { FaUserSecret } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";



const Nav = () => {

  let { loggedUser, setLoggedUser } = useContext(MyContext);

  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-blue-500 text-white"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  const handleLogout = () => {
    let confirm = window.confirm("Are you sure About Log out!");
    if (!confirm) return toast.error("Log Out Cancel");

    setLoggedUser(null);
    localStorage.removeItem("loggedUser");
    toast.success("Logout successfully");
  };

  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 bg-white shadow-lg flex flex-col justify-between p-5"
    >
      
      {/* TOP SECTION */}
      <div>
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500 mb-8 cursor-pointer">
          Tekan
        </h1>

        {/* NAV LINKS */}
        <nav className="flex flex-col gap-3">
          <NavLink to="/" className={navLinkStyle}>
            <FaHome /> Home
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            <FaInfoCircle /> About
          </NavLink>

          <NavLink to="/service" className={navLinkStyle}>
            <FaServicestack /> Services
          </NavLink> 

          <NavLink to="/users" className={navLinkStyle}>
            <FaUserSecret /> Users 
          </NavLink> 

          <NavLink to="/products" className={navLinkStyle}>
            <BsCartFill /> Products 
          </NavLink> 

        </nav>
      </div>

      {/* BOTTOM SECTION (User + Logout) */}
      <div className="border-t pt-4">
        <div className="flex items-center gap-2 text-gray-700 mb-3">
          <FaUserCircle size={22} />
          <span className="truncate">
            {loggedUser?.username}
          </span>
        </div>

        <motion.button
          onClick={handleLogout}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
        >
          <FaSignOutAlt />
          Logout
        </motion.button>
      </div>

    </motion.div>
  );
};

export default Nav;