import React, { useContext } from 'react'
import Navber from './components/Navber'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'

import { ThemeStoreContext } from './context/ThemeContext.jsx'
import Projects from './pages/Projects.jsx'

const App = () => {

  const {theme}  =  useContext(ThemeStoreContext)

  
  
  return (
    <div className= {  theme  === "dark" ? 'w-full h-screen bg-black  text-white ' : 'bg-white  text-black '} >


       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
       </Routes>
  </div>
  )
}

export default App