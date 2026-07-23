
import React from 'react'
import { NavLink } from "react-router";

export const Nav = () => {

  return (
    <div>

         <div>
            logo
         </div>

         <div>
            <NavLink to={'/'} > 
            Home
            </NavLink >

            <NavLink to={'/users'} > 
            Users
            </NavLink >

            <NavLink to={'/products'} > 
            Producst
            </NavLink >
         </div>


           <div>
              <h2>User </h2>
              <button>
                log out 
              </button>
           </div>
           


    </div>
  )
}

