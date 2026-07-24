
import React from 'react'
import Shop from './Shop'
import Button from '../components/Button'
import { useNavigate } from 'react-router'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from './About'


const Home = () => {


  return (
    <div> 
       <Hero />
       <About /> 
    </div>
  )
}

export default Home