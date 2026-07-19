

import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const Navbar = () => {

    const navigate = useNavigate()

  const handleLogout = ()=>{
    localStorage.removeItem('currentUser')
    navigate('/login')
    toast.success('Logout Successfully')
  }
  return (
    <div>
         <div>
             <h1>logo</h1>
         </div>
          <div>
             <NavLink  to={'/'} > Home  </NavLink>
             <NavLink  to={'/shop'} > Shop  </NavLink>
             <NavLink  to={'/about'} > About  </NavLink>
          </div>

          <div>
             <div> user  </div>
               <h3> Cart </h3>
               <div 
               onClick={handleLogout}
               > logout  </div>
          </div>
    </div>
  )
}

export default Navbar