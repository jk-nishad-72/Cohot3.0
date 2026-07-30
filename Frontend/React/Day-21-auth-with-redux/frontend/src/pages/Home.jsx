

import React from 'react'
import Counter from '../components/Counter'
import {useSelector} from 'react-redux'

const Home = () => {

     const {user} = useSelector((store)=>store.auth)
     
     

  return (
    <div> 
       <h1> Home  </h1>
        <Counter />
       <p> {user?.username} </p> 

    </div>
  )
}

export default Home 