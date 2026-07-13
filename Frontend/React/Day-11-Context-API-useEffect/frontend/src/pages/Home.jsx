
import React from 'react'
import Navber from '../components/Navber'

const Home = () => {



  return (
    <div className=' relative w-full h-screen   '>

        < Navber />
           <div className=' absolute  top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]' >

              <h1 className=' text-center w-full text-7xl mb-4 ' >Hello JK Nishad <br /> Welcome to your home page </h1>
    
           </div>
    </div>
  )
}

export default Home 