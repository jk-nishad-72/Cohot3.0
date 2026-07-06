import React from 'react'



const Login = ({ setLogged,users ,formData, setToggle}) => {



  console.log(users);
  
const handleSubmit = (e)=>{

  e.preventDefault();

  const email = e.target[0].value;
  const password = e.target[1].value;

  const filterData = users.find((elem)=> elem.email === email )


  if(!filterData){
     alert("Email not found")
     return
  }
  
  if(filterData.password === password){

     alert(" Login Succesfully 🎉 ")
     setLogged((prev)=> !prev)
     }
 
}




  return (

    <div className=' w-[30%] h-[40%] bg-white  rounded-xl '>

        <form onSubmit={handleSubmit} className='w-[100%] h-[100%] px-[1rem] py-[2rem] flex flex-col  items-center  justify-between' action="">

          
            <input 
             required
             name='email'
             className='w-[100%] border-1 border-b-blue-600 p-[.5rem] rounded-sm text-xl ' type="text"
             placeholder='Email'/>

            <input 
           
             required
             name='password' 
             type="password" 
             placeholder='Password'
             className='w-[100%] border-1 border-b-blue-600 p-[.5rem] rounded-sm text-xl '  />

            <button 
            className='w-[100%] border-1 bg-blue-500 text-white border-b-blue-600 p-[.5rem] rounded-sm text-xl cursor-pointer '> Login </button>
            
            <p onClick={()=>setToggle((prev)=> !prev )} >Din't have an Account? <span className='text-blue-400 hover:underline cursor-pointer' > Register here </span> </p>

        </form>
    </div>
  )
}

export default Login