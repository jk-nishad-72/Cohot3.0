

import React from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
import Comp4 from './Comp4'
import { useState } from 'react'

const TestComp = () => {



    const [data, setData] = useState("Data of Parent child Hello ")


  return (

    <div>


        <h1 className= ' text-black'> Sheriyans </h1> 
        
         < Comp1 />
       
       
    </div>

  )
}

export default TestComp