
import React from 'react'

const Button = ({value , textSize= 'text-[13px]', bgcolor = 'bg-white' , textColor= 'text-black'   , hoverBg = 'bg-black' ,hoverText = 'text-white' ,onclick}) => { 


  return (
    <button 
    onClick={onclick} 
     className={`
        ${bgcolor} ${textColor} ${textSize} hover:${hoverText}  hover:${hoverBg}   
        hover:cursor-pointer
        rounded-full  font-light px-4 py-2 capitalize transition-colors border  `}
    >
        {value}
    </button>
  )
}

export default Button