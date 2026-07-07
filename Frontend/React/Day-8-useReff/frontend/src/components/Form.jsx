

import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

const Form = () => {


     const [singlInp, setSinglInp] = useState('')
    const [formData, setFormData] = useState({})


//  This is for storing sinle input in inpRef 
const inpRef = useRef();



//This is for Storing multiple inputs reference in a single object FormRef isme help karta hai ref ={(e)=> FormRef.current.keyName = e}
const FormRef =  useRef({})
   
const handleSubmit =function(e){

    e.preventDefault()
   console.log( inpRef,FormRef); 

   setSinglInp(inpRef.current.value)
   setFormData({
    productName:FormRef.current.productName.value,
    price:FormRef.current.price.value,
    category:FormRef.current.category.value,
    image:FormRef.current.image.value,
   })

}
//all data without rerendering multiple times to the components 
console.log(singlInp , formData);

  return (


    <div className='w-full h-screen flex items-center  justify-center  '>

        <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4 p-6 rounded-xl bg-white w-1/4  '>


              {/* for single inpRef  */}
             <input 
             ref={inpRef}
              className='p-2 border-1 rounded-md text-sm ' 
             type="text" />

            <input 
             ref={(e)=> FormRef.current.productName = e}
            className='p-2 border-1 rounded-md text-sm '  type="text" placeholder='Product Name' />
            <input 
               ref={(e)=> FormRef.current.price = e}
              className='p-2 border-1 rounded-md text-sm ' type="text" placeholder='price' />

            <span>Select Category </span>  

            <select
               ref={(e)=> FormRef.current.category = e}
            className='p-2 border-1 rounded-md text-sm '  name="" id="">
                 <option value="MENS">Mens</option>
                 <option value="WOMENS">Womens</option>
                 <option value="KIDS">kids</option>
            </select>



        <input 
           ref={(e)=> FormRef.current.image = e}

          className='p-2 border-1 rounded-md text-sm ' type="text" placeholder='image' />


                <button className='w-full p-2 bg-blue-500  text-white  rounded-md' > Create </button>
            
        </form>
    </div>
  )
}

export default Form