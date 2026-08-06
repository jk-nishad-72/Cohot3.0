
import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

      let {loggedUser}  = useContext(AuthContext)
      // console.log(loggedUser);
  return (

    <div className='flex w-full justify-between px-8'>
             <div>
                <h1>Vibe</h1>
             </div>

             <div className=' flex items-center gap-10'>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/favrouite">Favrouite</NavLink>
             </div>
             <div>
                <h2>{loggedUser?.fullName} </h2> 
             </div>
    </div>
  )
}

export default Navbar