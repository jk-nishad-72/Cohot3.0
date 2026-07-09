

import React from 'react'
import Button from './Button'

const Navabar = ({setToggle}) => {


    
  return (
    <div className=' w-full h-[10%] border  border-white rounded-xl p-4 flex items-center justify-between text-white '>

         <div>
           logo
         </div>

         
         <div className='flex gap-10'>

           <a href="#"> Home </a>
           <a href="#">About</a>
           <a href="#">Contact</a>
           
         </div>

         <div>
           < Button
           
            value= "Create User"
            
            setToggle={setToggle}  />
         </div>
      
    </div>
  )
}

export default Navabar