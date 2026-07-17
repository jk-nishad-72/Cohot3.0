
import React from 'react'
import { NavLink, Outlet } from 'react-router'

const Product = () => {



  return (
    <div>
         <NavLink  to={'/product/mens'}>  Mens </NavLink>  <br /> 
         <NavLink  to={'/product/womens'}>  Womens </NavLink>  <br />   

    <Outlet/>

    </div>

  )
}

export default Product