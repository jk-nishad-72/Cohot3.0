
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import UserCard from '../components/UserCard'
import { axiosInstance } from '../config/axiosInstance'

const Users = () => { 
    
    let [users , setUsers] = useState([])
    let [isLoading , setIsLoading] = useState(true)

    const getUsersData = async () => {

        try { 
            let result = await axiosInstance.get('/users')
            console.log(result.data);
            setUsers(result.data);
            setIsLoading(false);
        } catch (error) {
            console.log('Error' , error); 
        }
        
    }

useEffect(()=>{
     getUsersData()
},[])


if(isLoading) return <h1 className=' text-4xl text-red-500'> Loading Users... </h1>

  return (
    <div className=' grid grid-cols-3 gap-5'>
        {
            users.map((user ,i)=> 
            <UserCard  
             key={i} 
             user = {user}
              /> )
        }
    </div>
  )
}

export default Users