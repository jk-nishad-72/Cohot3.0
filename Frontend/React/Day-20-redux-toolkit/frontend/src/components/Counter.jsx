
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counterSlice'

const Counter = () => {

    const {count} = useSelector((store)=> store.counter) 
    const dispatch = useDispatch()

    console.log(count);
    

  return (
    <div className=' flex  items-center justify-center gap-5  flex-col'>
        <h1> Counter </h1>
        <div className='flex  items-center justify-center gap-10'>
             <button className=' border border-blue-500 px-4 py-2  text-4xl hover:scale-95 cursor-pointer' 
             onClick={()=>{dispatch(decrement())}}> - </button>
              <h2> {count} </h2>
             <button className=' border border-blue-500 px-4 py-2  text-4xl hover:scale-95 cursor-pointer' 
             onClick={()=>{dispatch(increment())}}> + </button>
        </div>
    </div>
  )
}

export default Counter