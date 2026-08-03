
import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
         <div>
             <h1> Logo  </h1>
         </div>
          <div>
             <NavLink to={'/main'}> Home </NavLink>
             <NavLink to={'/main/shop'}> Shop </NavLink>
             <NavLink to={'/main/about'}> About </NavLink>
          </div>
    </div>
  )
}

export default Navbar