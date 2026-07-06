

import React from 'react'

const Card = (props) => {


    // we get props as object 

    // console.log(props.user , props.age) 



  return (
    <div>
          <h1>{props.user} </h1>
          <h2>{props.age} </h2>
    </div>
  )
}

export default Card