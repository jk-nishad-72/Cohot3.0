
import React from 'react'

const User = ({name , age , isLogedIn}) => {


  return ( 

      isLogedIn ? <>
      <div>
           <h2>Welcome Back</h2>

         <h2>{name} is {age} year Old. </h2>
    </div>
    </> : <>
       <h2>Login first </h2>
    </>
  )
}

export default User