
import React from 'react'
import { useNavigate } from 'react-router'

const Womens = () => {


    const navigate = useNavigate()

  return (
    <div>
        
        Womens Category
        

        <button 
        onClick={
             ()=> navigate('/')
        }
        >
            Back to Home 
        </button>
   </div>
  )
}

export default Womens 