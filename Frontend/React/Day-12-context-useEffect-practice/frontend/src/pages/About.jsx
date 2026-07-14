
import React, { useEffect } from 'react'

const About = () => {

// this code is cause of memory leak this code is execute even this component is unmounted 

 const interval = setInterval(() => {
    
    console.log('hey this is memory leak ');
 }, 1000); 


 useEffect(()=>{
 
    // when component is mount[render] than this code is execute 
       console.log('About is mounted ');


    // when component is unmount[remove from render tree ] than this code is execute  . 
    // Known as unmount function [callback function]

     return ()=>{
        console.log('About is unmounted ');
        clearInterval(interval)
     }
     

     // [] this is depencie array if it is empty than callback functn execute only once.
     //  if any depencies is given than whenever the depencies is changes it will execute the callback fun

 },[]) 

  return (
    <div>About</div>
  )
}

export default About