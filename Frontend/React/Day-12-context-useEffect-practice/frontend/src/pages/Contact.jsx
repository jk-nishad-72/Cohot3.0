
import React, { useEffect } from 'react'

const Contact = () => {



    useEffect(()=>{
         console.log('Cantact is Mount ');

         return ()=>{
             console.log('Cantact is UnMount ');
         }
    },[])
     
  return (
    <div>Contact</div>
  )
}

export default Contact