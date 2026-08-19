import { IoAddOutline } from "react-icons/io5";

import {  NavLink } from "react-router"


const Navbar = () => {
  return (
    <div className="  w-full  min-h-[80px]  px-10 py-8 ">
          <header className=" flex items-center justify-center w-full  h-full  shadow   rounded-xl border border-gray-200">
             <nav className=" w-full h-full flex items-center   justify-between py-4 px-4">
                  <div>
                     <NavLink className={` text-2xl  font-semibold  `} to="/">Client.</NavLink>
                  </div>

                  <div className=" flex gap-6 ">
                      <NavLink  className={` font-normal text-md   `} to="/">Home</NavLink>
                      <NavLink className={' font-normal text-md  '} to="/clients" > Clients </NavLink>
                      <NavLink className={' font-normal text-md  '} to="/about" > About </NavLink>
                  </div>

                  <button className=" px-4 py-3 rounded-lg  bg-slate-700 hover:bg-slate-900 hover:cursor-pointer text-white ">
                     <NavLink to="/create-client" className="flex items-center gap-2" > 
                       <IoAddOutline />
                     Create Client </NavLink>  
                  </button>
             </nav>
          </header>
    </div>
  )
}

export default Navbar