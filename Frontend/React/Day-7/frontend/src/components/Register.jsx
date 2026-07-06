
import React, { useState }  from 'react'


const Register = ({setToggle ,formData, setFormData , users , setUsers}) => {



const handleChange = (e)=>{

const { name , value} = e.target 
 
// console.log({[name]:value});

setFormData({...formData , [name]: value})

}

const handleSubmit = (e)=>{

e.preventDefault()

setUsers([...users,formData]) 


setFormData({
  ...formData,
  name:"",
  email:"",
  imageUrl:"",
  password:"",
})


}


  return ( 

     <div className=' w-[30%] h-[50%] bg-white  rounded-xl '>

        <form onSubmit={handleSubmit}  className='w-[100%] h-[100%] px-[1rem] py-[2rem] flex flex-col  items-center gap-2  justify-between' action="">


            <h1 className=' w-full text-left text-xl'>Register</h1> 

            <input
               
             required
             value={formData.name}
             className='w-[100%] border-1 border-b-blue-600 p-[.5rem] rounded-sm text-xl ' 
             type="text" 
             placeholder='Name'
             name ='name'

             onChange={handleChange}

              />

            <input 

            required
            value={formData.email}
            name='email'
            className='w-[100%] border-1 border-b-blue-600 p-[.5rem] rounded-sm text-xl ' 
            type="email" 
            placeholder='Email'
            onChange={handleChange}
            />

             <input
               
             required
             value={formData.imageUrl}
             className='w-[100%] border-1 border-b-blue-600 p-[.5rem] rounded-sm text-xl ' 
             type="url" 
             placeholder='Image URL '
             name ='imageUrl'

             onChange={handleChange}

              />


            <input 
             required
             value={formData.password}
            name='password'
            onChange={handleChange}
            className='w-[100%] border-1 border-b-blue-600 p-[.5rem] rounded-sm text-xl '
            type="password"
            placeholder='Password'
            />

            <button 


             className=' w-full border-1 bg-green-500 text-white border-b-blue-600 p-[.5rem] rounded-sm text-xl  cursor-pointer'> Register  </button>

            <p onClick={()=>setToggle((prev)=> !prev )} >Already  have an Account? <span className='text-blue-400 hover:underline cursor-pointer'  > Login here </span> </p>

        </form>
    </div>
  )
}

export default Register