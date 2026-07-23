
import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About'

const App = () => {

  console.log("App rendering ");
  
    const [count, setCount] = useState(0)  // premitive data 
    const [user , setUser  ] = useState({name:"jay" , age:20 , id:1}) //reference data , user state store the refence of object 


  return (
    <div>

      <h1> {count} {" "} {user.name} </h1>
       <button 

       onClick={()=> setCount(count+1)}
       
       > Incremnet  </button>

       <br />

        <button 

       onClick={()=> setUser({name:"kishan"})}  // here we are create new object , so new refence is created  every sigle time when it render ,  this is the main problem of re-rendering  , we can solved this issue by using  memoization
       
       > change User   </button>

       <Home user = {user} />
       <About /> 
    </div>
  )
}

export default App