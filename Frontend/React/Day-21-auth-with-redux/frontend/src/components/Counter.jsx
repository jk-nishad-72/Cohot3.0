import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../features/counterSlice'

const Counter = () => {
 
    const {count} = useSelector((store)=>store.counter)
    const dispatch = useDispatch() 

    
    

  return (

    <div>
           <h1> Counter </h1> 

           <div>
              <button onClick={()=>dispatch(decrement())}> - </button> 
              <h2> {count} </h2>
              <button onClick={()=>dispatch(increment())}> + </button>
           </div>
    </div>
  )
}

export default Counter