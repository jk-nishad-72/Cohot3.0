import React from 'react'
import Button from './Button'

import  {useForm}  from 'react-hook-form'
import { nanoid } from 'nanoid'


const Form = ({setToggle,users ,setUsers ,updateUser ,setUpdateUser}) => {
    



    let {
         register ,
         handleSubmit , 
         formState: {errors},   
         reset
        }  = useForm(
            {
                mode:"onChange",
                defaultValues:{
                    name:updateUser.name,
                    email:updateUser.email,
                    mobile:updateUser.mobile,
                    image:updateUser.image
                },
            }
        );


 const  submitData = (data)=>{

        let arr = []

          if(updateUser .id){

              arr = users.map(userObj => userObj.id === updateUser.id ? data : userObj) 
              setUpdateUser({}) 
             
          }else{
               arr = [...users , {...data , id:nanoid()}] // to handle asyncronus behaviour of setfunction here we store in arr first then set 
          }

    
    setUsers(arr) 
    localStorage.setItem('users',JSON.stringify(arr))
    setToggle(prev => !prev) 
    reset()

 }


  return (

    <div className=' w-full h-full flex items-center justify-center'     > 

                
           <form onSubmit={handleSubmit(submitData)} className=' text-white flex flex-col border w-[40%] rounded-xl p-4  justify-center gap-5 ' action="">

             <input 

                {...register('name',{
                    required:'Name is Required',
                })}
                type="text"   
                placeholder='Name' 
                className=' p-2 rounded-lg     border'
             />

             {errors.name && <p className=' text-red-500' >{errors.name.message}</p> }  

           

            <input 
                {...register('email',{
                    required:'Email is Required',
                })}
                type="email"   
                placeholder='Email' 
                className=' p-2 rounded-lg  border' 
            />
             {errors.email && <p className=' text-red-500' >{errors.email.message}</p> }  

   

            <input 
              {
                ...register('mobile',{
                    required:'Mobile Number is Required',
                    maxLength:{
                        value:10,
                        message:'Maximum length is 10 '
                    },  
                    minLength:{
                        value:10,
                        message:'Minimum length is 10 '
                    }
                })
              }
                type="number"  
                placeholder='Mobile NO.' 
                className=' p-2 rounded-lg   border'   
            />

            {errors.mobile && <p className=' text-red-500' >{errors.mobile.message}</p> }  


            <input  
             {
                ...register('image',{
                    required: 'Image is required'
             })
             }
             type="text"    
             placeholder='Image...' 
             className=' p-2 rounded-lg  border'
            />

            {
                errors.image && <p   className=' text-red-500' >{errors.image.message}</p> 
            }


            <button className=' flex items-center justify-center p-2 rounded-lg text-white cursor-pointer  bg-blue-500'>  Add User  </button>

           

           </form>
    
    </div>
  )
}

export default Form