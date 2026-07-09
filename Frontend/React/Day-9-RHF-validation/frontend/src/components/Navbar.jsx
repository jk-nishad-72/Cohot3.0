
import React from 'react'

const Navbar = ({setToggle}) => {


  return (


    <div className=' bg-black  flex items-center justify-between text-white py-5 rounded-md border-1  px-[2rem]'>
       <div>
        <h1 className='px-5 py-3   right-full text-black cursor-pointer'>
          
          <img className='w-10 rounded-full' src="https://imgs.search.brave.com/8N_daD3HBZmFJEDzeLtnxXixFSbU0l2Vx1RTlq5mAQg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtdmVjdG9y/L2JsdWUtY2lyY2xl/LXdpdGgtd2hpdGUt/dXNlcl83ODM3MC00/NzA3LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA" alt="" />
        </h1>
       </div>

       <div className=' flex  gap-8'>
         <h3>Home</h3>
         <h3>About </h3>
         <h3>Contact</h3>

       </div>
       <button onClick={()=>{setToggle(prev=> !prev)}} className='px-5 py-3 bg-blue-500 cursor-pointer  rounded-md '> Create User  </button>

       
    </div>
  )
}

export default Navbar 