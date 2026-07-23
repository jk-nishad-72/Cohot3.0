
import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

      let {loggedUser}  = useContext(AuthContext)


      console.log(loggedUser);
      
      

    
  return (

    <div className='flex w-full justify-between px-8'>
             <div>
              Vibe
             </div>
             <div>
              
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favrouite">Favrouite</NavLink>
      <NavLink to="/artist-dashboard">Artist Dashboard</NavLink>

             </div>
             <div>
                <h2>{loggedUser?.username} </h2>
             </div>
    </div>
  )
}

export default Navbar