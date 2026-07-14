
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeStoreContext } from '../context/ThemeContext' 

const Navber = () => {

     const {theme , toggleTheme } = useContext(ThemeStoreContext)

  return (

    <div className=' w-full h-[100px] p-4 '>

         <div className='w-full flex  items-center justify-between p-4 '> 

              <div className=' font-bold text-3xl'>
                 <h1>JK.</h1>
              </div>
             <div className=' flex gap-8 text-gray-200 '>
                  
                   <Link to="/" className={ theme ==='dark'? 'hover:text-white cursor-pointer':' text-gray-600 hover:text-black cursor-pointer' }> Home </Link>
                   <Link to="/about" className={ theme ==='dark'? 'hover:text-white cursor-pointer':' text-gray-600 hover:text-black cursor-pointer' } > About   </Link>
                   <Link to="/projects" className={ theme ==='dark'? 'hover:text-white cursor-pointer':' text-gray-600 hover:text-black cursor-pointer' } > Product  </Link> 
                
             </div>
             <div className='flex gap-8'> 

                  <button 
                    onClick={toggleTheme}
                   className= { theme ==='dark'? 'hover:text-white cursor-pointer':'hover:text-black cursor-pointer' }> {theme === "light" ? "🌙 Dark" : "☀️ Light"} </button>
                  <button className={ theme ==='dark'? 'hover:text-white cursor-pointer':'hover:text-black cursor-pointer' } >Logout</button>
             </div>
             
         </div>
    </div>
  )
}

export default Navber