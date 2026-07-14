

import React from 'react'

import BlurText from "./BlurText";




const HeroText = ({value}) => {    


const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


  return (
     <div className=' flex items-center justify-center  w-full h-screen ' >

          <h1 className=' text-center w-full text-7xl ' > 
           
            <BlurText
            text="JK Nishad"
            delay={100}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className=' text-8xl text-orange-500  w-full flex items-center justify-center '
          />
            Welcome to your  <br />
               <span className='text-8xl text-orange-500 '>  {value}  </span>  page  </h1> 
    
    </div>
  )
}

export default HeroText