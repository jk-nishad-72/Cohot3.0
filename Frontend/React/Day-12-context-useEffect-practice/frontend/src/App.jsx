
import React, { useContext, useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import { MyStore } from './context/MyContext'
import { useState } from 'react'
import axios from 'axios'



const App = () => {

 
    const {count , setCount }  =  useContext(MyStore) 
    const [toggle , setToggle ] =   useState(false)


     
  

    // useEffect(()=>{
    //    console.log('App is rendering ');
    // },[toggle])

    // kyuki setCount ka Parent Component  ContextProvider(hof)  hai jiska children   app hai jo ->
    //  jab bhi setcount function chalta hai to vo state ko update karta hai and 
    // apne parent component ko renrender karta hai   and isliye app rerender hoti hai isko solve karne ke liye useEffect() ka use krte hai


    // now axios 

    const [product , setProduct] = useState([])
    const getData = async () => {

        const result = await axios.get('https://fakestoreapi.com/products')

        console.log(result.data);
        setProduct(result.data) 
    }

    // getData()  // cuase of recursion so 

    useEffect(()=>{
       
    getData()

    },[]) // this run callback function only once on mount 


  
  return (
    <div>
      
      App 

      {/* < Home /> */}
     {
      toggle ?  < About /> : < Contact />

     }

      <button onClick={()=> setToggle(prev => !prev )} >

         Toggle 
      </button>
     

       
       <p> {count} </p>
       {/* on this single change the entire react app is rendered  */}

       <button 
        onClick={()=>{
           setCount(count+1)
        }}
       >
         Increment 
       </button>
      </div>


  )
}

export default App