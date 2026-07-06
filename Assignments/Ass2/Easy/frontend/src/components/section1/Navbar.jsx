
import React from 'react'
import Butoon from '../Butoon'

const Navbar = () => {
  return (
    <div className='flex  w-[100%] h-[15vh]  items-center justify-between px-[1rem] py-[2rem] '>

         <div className='flex  items-center cursor-pointer'>
            <img className='w-25 max-sm:w-15' src="/Images/logo.jpg" alt="" />
             <h1 className='text-3xl'>ScaleX</h1>
         </div>

         <div className='flex  items-center gap-[3rem] text-normal max-sm:hidden '>
             <a href="">Home </a>
             <a href="">About Us </a>
             <a href="">Blogs</a>
             <a href="">Contact Us  </a>
         </div>
         < Butoon />

         <div className='menu  max-sm:flex max-sm:flex-col max-sm:gap-2 max-sm: max-sm:items-center  lg:hidden max-md:hidden  max-sm:block w-[100px] h-[100%]  justify-center'>
                 <div className=' max-sm:w-[35px] h-[4px] bg-white'></div>
                 <div className='w-[35px] h-[4px] bg-white'></div>
         </div>

    </div>
  )
}

export default Navbar