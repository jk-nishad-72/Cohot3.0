
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeStoreContext } from '../context/ThemeContext'

const Navber = () => {

     const theme = useContext(ThemeStoreContext)
  return (

    <div className=' w-full h-[100px] p-4 '>

         <div className='w-full flex  items-center justify-between p-4 '> 
              <div className=' font-bold text-3xl'>
                 <h1>JK.</h1>
              </div>
             <div className=' flex gap-8 text-gray-200 '>
                  
                   <Link to="/" className='hover:text-white cursor-pointer' > Home </Link>
                   <Link to="/about" className='hover:text-white cursor-pointer' > About   </Link>
                   <Link to="/product" className='hover:text-white cursor-pointer' > Product  </Link> 
                
             </div>
             <div className='flex gap-8'>
                  <button className='hover:text-white cursor-pointer'> {theme === "dark" ? "Dark" : "Light"} </button>
                  <button className='hover:text-white cursor-pointer'>Logout</button>
             </div>
             
         </div>
    </div>
  )
}

export default Navber