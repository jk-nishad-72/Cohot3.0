
import React, { useContext } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import { MyStore } from './context/MyContext'

const App = () => {

 
    const {count , setCount }  =  useContext(MyStore) 


    // kyuki setCount ka Parent Component  ContextProvider(hof)  hai jiska children   app hai jo ->
    //  jab bhi setcount function chalta hai to vo state ko update karta hai and 
    // apne parent component ko renrender karta hai   and isliye app rerender hoti hai isko solve karne ke liye useEffect() ka use krte hai

    console.log('App is rendering ');
  
  return (
    <div>
      
      App 

      < Home />
      < About />
      < Contact />

       
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