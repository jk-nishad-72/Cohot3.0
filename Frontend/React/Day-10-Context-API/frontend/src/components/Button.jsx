
import React from 'react'

const Button = ({value ,id,  user ,users ,setUsers ,setUpdateUser ,setToggle }) => {



  
    
    const handleClick = ()=>{
        
        setToggle(prev => !prev);    
    }



      const  handlEdit= ()=>{
        
        setUpdateUser(user) 
        setToggle(prev => !prev)  
    }

      const handlDelet = ()=>{
         
         const filtedArr = users.filter(elem => elem.id !== id)
         setUsers(filtedArr)
         localStorage.setItem('users',JSON.stringify(filtedArr))
    
    }

 
    
  return (

    <div 
      className={` ${value === "Edit" ? "bg-orange-500" :   value === "Delete" ? "bg-red-500" : "bg-blue-500"}  flex items-center justify-center p-2 rounded-lg text-white cursor-pointer `}
       onClick={value === 'Delete' ? handlDelet : value === 'Edit' ? handlEdit : handleClick} 
      >
         <button  

          className=' cursor-pointer' 
         >
         {value}

      </button>
    </div>
  )
}

export default Button