
import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About'

const App = () => {

  console.log("App rendering ");
  
    const [count, setCount] = useState(0)
  return (
    <div>
       <button 

       onClick={()=> setCount(count+1)}
       
       > Incremnet  </button>

       <Home />
       <About />
    </div>
  )
}

export default App