
import React, { useState } from 'react'
import Navabar from './components/Navabar'
import Form from './components/Form'
import UserCard from './components/UserCard'
import Home from './components/Home'

const App = () => {

   const [toggle, setToggle] = useState(true)

   const [users, setUsers] = useState(()=>{

    return JSON.parse(localStorage.getItem('users')) || []
   })

    const [updateUser, setUpdateUser] = useState({})


  
  return (
    <div className='w-full h-screen bg-mauve-800 p-4 flex flex-col gap-4'> 

        < Navabar   setToggle = {setToggle} />

        {
          toggle ? 

            <div className=' user-container flex w-full h-[80vh] gap-2  overflow-auto flex-wrap items-start justify-start p-4  border border-gray-500 rounded-xl'>
               
               {
                 users.length === 0 ? 
                 
               <h1 className=' text-white  flex items-center justify-center text-4xl  ' >    NO USERS </h1>
               :

                 users.map((user, index)=>{

                  return <UserCard 

                   
                   key={index}
                   user = {user} 
                   users = {users}
                   setUsers = {setUsers} 
                   setUpdateUser = {setUpdateUser}
                   setToggle = {setToggle}
                  
                  />
                 })

               }
                 
            </div>
            
             : 

            <div className='flex w-full h-[80vh] items-center justify-center border border-white rounded-xl'>
                 < Form  setToggle = {setToggle} users = {users} setUsers = {setUsers} updateUser = {updateUser} setUpdateUser ={setUpdateUser}  /> 
            </div>
            
        }

         
        
    </div>
  )
}

export default App