
import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../components/Nav'




const MainLayout = () => {


  return (
    <div>

         <Nav />

         <Outlet />
    </div>
  )
}

export default MainLayout