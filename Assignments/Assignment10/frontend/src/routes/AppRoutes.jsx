

import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProductDetails from '../pages/ProductDetails'

const AppRoutes = () => {

  return (

    <div>
         <Routes > 
             <Route path='/'  element={<Home />} > </Route> 
             <Route path='/shop'  element={<Shop />} > </Route>
             <Route path='/product/:id'  element={<ProductDetails />} > </Route>
             <Route path='/about'  element={<About />} > </Route>
             <Route path='/login'  element={<Login />} > </Route>
             <Route path='/register'  element={<Register />} > </Route>
         </Routes>
    </div>
  )
}

export default AppRoutes