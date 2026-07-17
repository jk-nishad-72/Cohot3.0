
import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {


  return (

    <div>

         <div>
            logo
         </div>

         <div>
             <NavLink  to={'/'} > Home </NavLink>
             <NavLink  to={'/about'} > About </NavLink>
             <NavLink  to={'/products'} > Products </NavLink>
            
         </div>

    </div>
  )
}

export default Navbar