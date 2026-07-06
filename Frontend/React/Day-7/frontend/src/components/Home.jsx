
import React from 'react'
import Card from './Card'

const Home = ({users}) => {
  

  return (
    <div className=' w-full h-full bg-green-200'>


       {
        users.map((elem)=>{
          return < Card elem= {elem} />
        })
       }


    </div>
  )
}

export default Home