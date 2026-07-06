
import React from 'react'

const Card = ({image ,cat , para , date}) => {

  // console.log(image , cat , para  , date);
  



  return (
    <div className=' w-[30%] h-[100%]    p-[.5rem]  rounded-4xl overflow-hidden bg-[#211e1e] max-sm:w-[100%]'  >
      
       <img className='w-[100%] h-[60%] object-cover rounded-4xl' src={image} alt="" /> 

       <div className="cardBottom flex flex-col gap-[.5rem]  p-[1rem] justify-between h-[40%]">
         
          <h4 className=' bg-[#581D09] text-[#ee4700] w-[fit-content] px-4 py-1 rounded-4xl'>{cat}</h4> 

          <h2 className='text-[2rem] capitalize'> {para} </h2> 

          <p className='text-sm opacity-55'>{date} </p>
           
       </div>
    </div>
  )
}

export default Card