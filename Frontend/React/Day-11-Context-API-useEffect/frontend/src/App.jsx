import React from 'react'
import Navber from './components/Navber'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Product from './pages/Product'

const App = () => {
  return (
    <div className='w-full h-screen bg-black  text-white '>


       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/product" element={<Product />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
       </Routes>
  </div>
  )
}

export default App