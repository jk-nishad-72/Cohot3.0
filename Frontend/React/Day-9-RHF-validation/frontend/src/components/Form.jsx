

import React from 'react'
import {  useForm } from 'react-hook-form';



const Form = ({setToggle ,setUsers , updateUser ,setUpdateUser}) => {

    const {
        register , 
        handleSubmit,
        reset,
        formState:{errors},
    } = useForm({
        mode:"onChange",
        defaultValues:{
            name:updateUser.name,
            email:updateUser.email,
            mobile:updateUser.mobile,
            image:updateUser.image 

        }
    })


    // console.log('errors' , errors);
    

const formSubmit = function(data){

  
    if(updateUser.name){
 
         let {name ,email , mobile ,image} = data
        console.log(updateUser.id , data);

        setUsers( prev=> prev.map((item ,index) => 
        index === updateUser.id ? {...item , name , email , mobile , image} :item ) ) 

        setUpdateUser({})
    }else{
     setUsers((prev)=>{
      return  [...prev , data]
     })



    }

    reset() 
    setToggle((prev)=> !prev)

}


  return (
    <div className=' flex flex-col  items-center gap-6'>

         <h1 className=' text-white  text-2xl  capitalize '>Create User </h1>

         <form onSubmit={handleSubmit(formSubmit)}  className='w-70 flex flex-col gap-3 rounded border-white border p-4 ' action="">

            <input 

              {...register('name' ,{
                required:'Name is required',
                
              })}
              className='p-2 rounded text-white border border-white outline-0 '
              type="text"  
               placeholder='Name'/>

             {
                errors.name &&   <p className=' text-red-500'> {errors.name.message} </p>
             }

            <input 
             {...register('email' ,{
                required:'Email is required'
              })}
             className='p-2 rounded text-white border border-white outline-0 '
              type="email" 
              placeholder='Email'/>
            {
                errors.email &&   <p className=' text-red-500'> {errors.email.message} </p>
             }

            <input 
             {...register('mobile' ,{
                required:'Mobile NO. is required',
                minLength:{
                    value:10,
                    message:'Minimum 10 digits required'
                },
                 maxLength:{
                    value:10,
                    message:'Maximum 10 digits required'
                },

              })}
             className='p-2 rounded text-white border border-white outline-0 '
              type="number" 
              placeholder='Mobile'/>
                {
                errors.mobile &&   <p className=' text-red-500'> {errors.mobile.message} </p>
             }

            <input 
             {...register('image' ,{
                required:'Image url is required'
              })} 
             className='p-2 rounded text-white border border-white outline-0 '
              type="url"   
              placeholder='Image url'/>
            {
                errors.image &&   <p className=' text-red-500'> {errors.image.message} </p>
             }

            <button className=' text-white bg-blue-700 p-2 rounded-xl cursor-pointer'> Add User </button>
         </form>
    </div>
  )
}

export default Form