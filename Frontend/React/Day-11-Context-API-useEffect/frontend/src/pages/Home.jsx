
import React from 'react'
import Navber from '../components/Navber'
import HeroText from '../components/HeroText'
import Counter from '../components/Counter'

const Home = () => {



  return (
    <div className=' relative w-full h-screen   '>

        < Navber />
        < HeroText value = "Home" />
         <Counter />

        
    </div>
  )
}

export default Home 