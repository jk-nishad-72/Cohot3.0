
import React, { use } from 'react'

const Card = ({elem}) => {


  
  return (
    <div className=' flex flex-col gap-2 items-center justify-center w-[350px] h-[450px] border-1 px-[2rem] py-[1rem]'>
        <img className=' w-full  h-[70%] object-cover ' src={elem.imageUrl} alt="user" />
        <h1 className=' uppercase'> {elem.name } </h1>
        <h2> { elem.email } </h2>


      <button> Log out </button>
    </div>
  )
}

export default Card