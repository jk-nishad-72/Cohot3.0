
import React from 'react'
import { Outlet } from 'react-router'

const MainProtected = () => {

    
  return (
    <div>
         <Outlet />
    </div>
  )
}

export default MainProtected