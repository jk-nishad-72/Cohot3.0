
import React from 'react'
import { NavLink } from "react-router";
import { IoIosLogOut } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { BsBox } from "react-icons/bs";




const Navbar = () => {
    return (
        <div className=' flex items-center gap-10  justify-between px-10 py-2 '>
             <div>
                 <h1 className=' text-2xl'>sky<span className=' text-green-500'>Mart</span></h1>
             </div>
            <ul className=' flex items-center gap-4 ' >
                <NavLink 
                 className={({isActive})=>{return isActive ? 'text-green-500 underline':''}}
                 to={'/main'} end >Home</NavLink>
                <NavLink   className={({isActive})=>{return isActive ? 'text-green-500 underline':''}}  to={'/main/shop'}>Shop</NavLink>
                <NavLink   className={({isActive})=>{return isActive ? 'text-green-500 underline':''}} to={'/main/about'}>About</NavLink>
             
            </ul>
            <div className='flex items-center gap-6  '>
                 <NavLink  className={({isActive})=>{return isActive ? 'text-green-500 underline':''}}  to={'/main/cart'} > <FaCartShopping /> </NavLink>
                 <NavLink  className={({isActive})=>{return isActive ? 'text-green-500 user-valid:':''}}  to={'/main/orders'} > <BsBox /> </NavLink>
                 <button className='flex items-center gap-2 p-2 bg-green-500 rounded-md cursor-pointer text-white ' >  <IoIosLogOut />  log out </button>
            </div>
        </div>
    )
}

export default Navbar