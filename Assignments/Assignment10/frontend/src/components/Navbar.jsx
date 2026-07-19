import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiShoppingBag,
  FiMenu,
  FiX,
  FiUser,
  FiLogOut,
  FiShoppingCart,
  FiMail,
} from "react-icons/fi";
import { toast } from "react-toastify";
import { useContext } from "react";
import { MyShopStoreContext } from "../context/MyContext";

const Navbar = () => {

  const {currentUser  ,uCart} = useContext(MyShopStoreContext)

  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [showUserPopUp, setShowUserPopUp] = useState(false);

  const handleLogout = () => {
    
    setShowUserPopUp(false)


    let confirm = window.confirm("Are you sure to Logout ? ")
    if(confirm){
      localStorage.removeItem("currentUser");
      navigate("/login");
      toast.success("Logout Successfully");
    }

  };

const navLinkStyle = ({ isActive }) =>
  `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
    isActive
      ? "bg-black text-white shadow-md scale-105"
      : "text-gray-600 hover:bg-gray-100 hover:text-black hover:scale-105"
  }`;

  const handlSideBarOpenClose  = () => {
    setOpenMenu(false)
    setShowUserPopUp(false) 
  }

  return (
    <motion.nav 

     initial={{y:-100,opacity:0}}
     animate={{y:0,opacity:1}}
     transition={{duration:1}}
    className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-t border-gray-300">
      
      <div className="max-w-7xl mx-auto px-3 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-xl font-semibold cursor-pointer"
        >
          <FiShoppingBag className="text-2xl" />
          Buyzaar
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/shop" className={navLinkStyle}>
            Shop
          </NavLink>
          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-5 relative"> 
          
          {/* Cart */}
          <NavLink to='/cart-products'  className="relative cursor-pointer border border-gray-300 rounded-full p-2">
            <FiShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 text-xs bg-black text-white px-1 rounded-full">
              {uCart.length}
            </span>
          </NavLink>

          {/* User */}
          <div 
          onClick={()=>setShowUserPopUp(prev => !prev)}
          className="flex items-center gap-2 cursor-pointer  border border-gray-300 rounded-full p-2 px-3 relative">
            <FiUser />

          </div>
            {showUserPopUp && 
              
               <motion.div className=" absolute top-[40px] left-[50px]  flex flex-col gap-2 border bg-white shadow-sm  border-gray-300 rounded-xl p-2">
                 
                    <motion.div>
                       <span className="text-sm font-medium uppercase text-blue-400 flex gap-2 hover:text-black">    <FiUser size={18} />  {currentUser.fName}  </span>
                    </motion.div>  
                      
                      <motion.div>
                        <span className="text-xs text-gray-400 flex items-center gap-2 hover:text-black transition-all duration-300">  <FiMail size={14} /> {currentUser.email}</span>
                      </motion.div>

               </motion.div>
             
              }


          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-sm  border border-gray-300 rounded-full py-2 px-3 text-gray-600 hover:text-black"
          >
            <FiLogOut />
            Logout
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setOpenMenu(prev => !prev)}>
            {openMenu ? <FiX size={22} /> : <FiMenu size={22} />} 
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden px-6 pb-6 space-y-4 bg-white"
          >
            <NavLink to="/" className={navLinkStyle} onClick={handlSideBarOpenClose}>
              Home
            </NavLink>
            <NavLink to="/shop" className={navLinkStyle} onClick={handlSideBarOpenClose}>
              Shop
            </NavLink>
            <NavLink to="/about" className={navLinkStyle} onClick={handlSideBarOpenClose}>
              About
            </NavLink>

            <div className="flex items-center gap-2 pt-2 border-t ">
              <FiUser />
              <span className="text-sm font-medium text-blue-500"> {currentUser?.fName}   </span>
            </div>

            <NavLink to='/cart-products' className="flex items-center gap-2" onClick={handlSideBarOpenClose} > 

              <FiShoppingCart />
              <span> Cart ({uCart.length}) </span>
            </NavLink>  

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-500 pt-2"
            >
              <FiLogOut />
              Logout
            </button>
          </motion.div>
        )}

      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;