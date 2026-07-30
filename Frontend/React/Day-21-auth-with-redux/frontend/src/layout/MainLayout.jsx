
import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {


  return (
    <div> 
       <Outlet />
    </div>
  )
}

export default MainLayout