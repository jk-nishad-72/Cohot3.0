
import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {

    const isActiveFun = (isActive)=>{
         return isActive ? 'text-green-400 text-lg ' :''
    }
  return (
    <nav className=' fixed  z-50 min-w-screen min-h-7 flex items-center justify-between p-4 '>
        
        <div>
             <h1> JK Nishad  </h1>
        </div>

         <div className='flex items-center justify-between p-4 gap-5'>
             <NavLink to={'/'} className={({isActive}) =>isActiveFun(isActive) } >  Home  </NavLink> 
             <NavLink to={'/projects'} className={({isActive}) =>isActiveFun(isActive) } >   <span>  Projects </span></NavLink> 
             {/* <NavLink to={'/project-detail/:id'} > Projects Details  </NavLink>  */}
             <NavLink to={'/about'} className={({isActive}) =>isActiveFun(isActive) } > About Me </NavLink> 
             <NavLink to={'/contact'}className={({isActive}) => isActiveFun(isActive)} > Contact </NavLink> 
         </div>

    </nav>
  )
}

export default Navbar