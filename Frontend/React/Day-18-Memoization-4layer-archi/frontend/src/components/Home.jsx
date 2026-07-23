
import React from 'react'


const Home = ({user}) => {

  console.log("Home rendering ");  

  return (
    <div>Home - {user.name} </div>  
  )
}

export default React.memo(Home ,(prevProps , nextProps)=>{
  return prevProps.user.name === nextProps.user.name // if this is true it will not re render when the name is changed than only will the home is re render 
})  