
import React, { useContext } from 'react'
import { Mystore } from '../context/MyContext'

const Comp4 = () => {


     const { name , setName } = useContext(Mystore)


    //   console.log(name , setName);
      

  return (



    <div> Comp4 inside comp3  

         <span className='text-5xl text-blue-600'> {name} </span>
         
    </div>
  )
}

export default Comp4