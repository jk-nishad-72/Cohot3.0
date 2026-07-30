
import React from 'react'
import {NavLink} from 'react-router'

const Navbar = () => {
  return (
    <div>
         <div>
            <h1> logo </h1>

         </div>

          <div>
               <NavLink to={'/'} > Home </NavLink>  
          
          </div>
    </div>
  )
}

export default Navbar