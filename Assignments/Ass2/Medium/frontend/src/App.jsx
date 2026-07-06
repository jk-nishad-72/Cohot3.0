
import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

import SecondFooter from './pages/SecondFooter'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div  className='bg-[#0A131E] w-[100%]  flex flex-col gap-[2rem]  '>


              < Navbar />  

              < Main /> 

              < SecondFooter /> 
              < Footer /> 



           




    </div> 
  )
}

export default App