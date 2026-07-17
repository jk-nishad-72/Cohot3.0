
import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Product from '../pages/Product'
import Mens from '../pages/Mens'
import Womens from '../pages/Womens'

const AppRoutes = () => {



  return (

    
    <Routes>
         
          <Route path='/'  element={<Home />} />
          <Route path='/about'  element={<About />} />
          <Route path='/contact'  element={<Contact />} />

          <Route path='/product'  element={<Product />} > 

               <Route path='mens' element={<Mens />}  />
               <Route path='womens' element={<Womens />}  />
            
          </ Route>


    </Routes>
  )
}

export default AppRoutes