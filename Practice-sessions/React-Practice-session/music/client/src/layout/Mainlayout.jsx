
import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const Mainlayout = () => {

  return (
    <div>
        <Navbar />

        <div className='router-content'>
            <Outlet /> 
        </div>
 
    </div>
  )
}

export default Mainlayout