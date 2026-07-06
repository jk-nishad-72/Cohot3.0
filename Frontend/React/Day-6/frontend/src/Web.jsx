
import React from 'react'
import { useState } from 'react'

const Web = () => {


const [formData,setFormData ] = useState({})

console.log(formData);


//* optimal approach 

const inputHandle = (e)=>{


    //-> destructuring 
    //  let {name , value} = e.target  

    //  or

    // console.log(e.target.value ,e.target.name);

    setFormData({...formData , [e.target.name]:e.target.value})

}
 
  return (

    <div className='w-screen h-screen bg-black flex flex-col gap-3 items-center '>

{/* name */}
         <input
         
         className=' border-2 border-white text-white'
         name='name'
         type="text" 
         onChange={inputHandle}
         />

{/* email */}

        <input
         className=' border-2 border-white text-white'
         name='email'
         type="text" 
         onChange={inputHandle}
         />

{/* password */}

        <input

         className=' border-2 border-white text-white'
         name='passwordd'
         type="text" 
         onChange={inputHandle}
         />



        
    </div>
  )
}

export default Web