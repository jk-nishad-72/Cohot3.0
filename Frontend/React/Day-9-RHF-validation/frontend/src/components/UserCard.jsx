
import React from 'react'

const UserCard = ({user ,  setUsers ,setToggle , id  ,setUpdateUser}) => {
       
const updateHandle = function(){


     setUpdateUser({
       name:user.name,
       email:user.email,
       mobile:user.mobile,
       image:user.image,
       id:id
     })

   setToggle(prev=>!prev)

}


const deleteHandle = ()=>{
  
   setUsers(prev => prev.filter((e,index) => index !== id) )
    
}

  return (

    <div  className=' w-[300px] border border-white p-4 flex flex-col rounded-sm gap-4 bg-gray-900 '>  
         <div>
          <img 
            className='w-90 h-60  object-cover '
           src={user.image}
            alt="user" />
         </div>

         <div className='flex flex-col gap-2 text-white'>
             <h1 className=' uppercase'>Name: {user.name} </h1>
             <p>Email: {user.email} </p>
             <p>Contact NO.: {user.mobile} </p>
             
         </div>

         <div className='flex  text-white   justify-between '>
             <button onClick={updateHandle} className='p-2 rounded-md text-xl  uppercase bg-amber-500 cursor-pointer' >Update</button>
             <button onClick={deleteHandle} className='p-2 rounded-md text-xl  uppercase bg-red-500   cursor-pointer'>Delete </button>
         </div>


    </div>
  )
}

export default UserCard