
import React from 'react'
import { Nav } from '../components/Nav'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>

         <Nav />
         <div>

             <Outlet />
         </div>
    </div>
  )
}

export default MainLayout