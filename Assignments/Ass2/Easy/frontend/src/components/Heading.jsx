
import React from 'react'

const Heading = ({text}) => {


// console.log(text);



    
  return (
    <div>
         <h2 className=' max-sm:text-sm text-2xl hover:bg-orange-600  bg-[#3c3939]  border-1 border-[#7e7d7d] rounded-[1.5rem] px-4 py-2 flex items-center  justify-center '> {text.text} </h2>
    </div>
  )
}

export default Heading