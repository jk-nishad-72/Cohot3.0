

import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';


const RHF = () => {


    const [formData, setFormData] = useState({})

    const { register , handleSubmit , reset , } = useForm()

    const submitHandler = (data)=>{


        setFormData(data)
        reset()
    }



  return (

       <div className='w-full h-screen flex items-center  justify-center  '>


     {/* {handleSubmit((data)=>console.log(dat))}  */} 

    <form onSubmit={handleSubmit(submitHandler)} action="#" className='flex flex-col gap-4 p-6 rounded-xl bg-white w-1/4  '>

            <h1>React Hook Form </h1> 
            <input 
           
            {...register('productName')}
            type="text"
            placeholder='Product Name'
            className='p-2 border-1 rounded-md text-sm '   />

            
            <input 
            {...register('price')}
            type="text" 
            placeholder='price'
            className='p-2 border-1 rounded-md text-sm ' />

            <span>Select Category </span>  

            <input
              {...register('category')}
            type="text" placeholder='Category'
            className='p-2 border-1 rounded-md text-sm ' /> 
               
          
        <input 

         {...register('image')}
          type="text" placeholder='image'
          className='p-2 border-1 rounded-md text-sm '  />
        <button className='w-full p-2 bg-blue-500  text-white  rounded-md' > Create </button>
            
        </form>

         
         <div>
             <h1>{formData.productName} </h1>
             <h1>{formData.price} </h1>
             <h1>{formData.category} </h1>
             <h1>{formData.image} </h1>
         </div>
    </div>
  )
}

export default RHF