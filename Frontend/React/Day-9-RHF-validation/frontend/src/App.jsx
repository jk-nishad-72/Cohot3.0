
import React from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'
import { useState } from 'react'


const App = () => {


 const [users, setUsers] = useState([])
 const [updateUser, setUpdateUser] = useState({})
 const [toggle, setToggle] = useState(false)


 
  return (
    <div className=' w-full h-screen  p-[1rem]   bg-gray-900 '>

        <Navbar setToggle = {setToggle} /> 

       { toggle ? 

        <div className='flex items-center justify-center h-screen'>
         <Form setToggle = {setToggle} setUsers = {setUsers} updateUser= {updateUser} setUpdateUser ={setUpdateUser}  /> 
       </div>

       :

       <div className='  w-full h-screen flex items-center gap-4'>
          {
            users.length > 0
             ?
            users.map((user ,index)=>{
              return <UserCard key={index}   user = {user}  setUsers={setUsers}  setToggle ={setToggle} id = {index} setUpdateUser = {setUpdateUser} /> 
            }) 
            :
            <h1 className=' text-white text-9xl text-center'> NO any User  </h1>
          }
       </div>
      
       }

     

      
       



    </div>
  )
}

export default App