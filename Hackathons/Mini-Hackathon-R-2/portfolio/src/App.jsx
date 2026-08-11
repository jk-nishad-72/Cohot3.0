
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react'
import AppRoutes from './routes/AppRoutes';


gsap.registerPlugin(useGSAP) 


const App = () => {


  return (
    <div className='min-h-screen w-screen '>
      <AppRoutes />
     </div>
  )
}

export default App