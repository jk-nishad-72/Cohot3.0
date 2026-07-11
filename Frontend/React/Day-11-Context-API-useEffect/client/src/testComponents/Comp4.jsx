
import React, { useContext } from 'react'
import { Mystore } from '../context/MyContext'

const Comp4 = () => {


     const { name , setName } = useContext(Mystore)

 
      

  return (



    <div className='flex flex-col gap-4 p-4 text-2xl '> 
         <h1>  Comp4 inside comp3  </h1>
         
         <span className='text-5xl text-blue-600'> {name} </span>

         <button className='border border-blue-500 p-2' onClick={()=>setName('Anurag Nishad') }>Update name</button>
         
    </div>
  )
}

export default Comp4