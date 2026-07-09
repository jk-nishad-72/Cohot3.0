
import React from 'react'
import Button from './Button'



const UserCard = ({user , users, setUsers  ,setUpdateUser,setToggle }) => {
    

  return (
    <div className=' text-white rounded-lg  border flex  gap-5 p-4 '>

        <div >
            <img className=' w-30 h-30 object-cover rounded-full'
             src={user.image} 
              alt="" />
        </div>
        <div className='flex flex-col gap-2'>

             <h2> <span className='font-bold     text-blue-300  text-xl'>Name: </span> {user.name} </h2>
             <h3><span className='font-bold  text-blue-300  text-xl'>Email:</span>{user.email}</h3>
             <p><span className='font-bold  text-blue-300  text-xl'>Mobile NO.</span>{user.mobile} </p>

             <div className='flex gap-2'> 

                 < Button 
                 value = "Edit" 
                 id = {user.id}
                 user = {user}
                 users = {users}
                 setUsers={setUsers}
                 setUpdateUser = {setUpdateUser}
                 setToggle = {setToggle}
                 />

                 < Button
                 value = "Delete"
                  id = {user.id}
                  users={users}
                 setUsers={setUsers}
                 />    
             </div>
        </div>

    </div>
  )
}

export default UserCard