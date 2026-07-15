import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaPlus,
  FaSearch,
  FaUtensils,
} from "react-icons/fa";

const Navbar = () => {

  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
      isActive
        ? "bg-orange-500 text-white shadow-lg"
        : "text-gray-600 hover:bg-orange-100 hover:text-orange-500"
    }`;


  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <motion.div
            whileHover={{ rotate: 15, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center"
          >
            <FaUtensils size={20} />
          </motion.div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Recipe<span className="text-orange-500">Book</span>
            </h1>
            <p className="text-xs text-gray-500">
              Cook • Share • Enjoy
            </p>
          </div>
        </NavLink>

        {/* Search */}
        <div className="hidden md:flex items-center relative w-[380px]">
          <FaSearch className="absolute left-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search recipes..."
            className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
          />
          
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4">

          <NavLink
            to="/favourites"
            className={navLinkStyle}
          >
            <FaHeart />
            <span>Favourite</span>
          </NavLink>

          <NavLink
            to="/create-recipe"
            className={navLinkStyle}
          >
            <FaPlus />
            <span>Create Recipe</span>
          </NavLink>

        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;