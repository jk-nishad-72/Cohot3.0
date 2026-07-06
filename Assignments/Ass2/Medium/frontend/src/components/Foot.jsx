
import React from 'react'

const Foot = ({imgUrl , head , para}) => {

  console.log(imgUrl , head,para);
  


  return (
    
     <div  className='w-[30%] h-full p-2 flex items-center justify-center gap-2 border-1 border-[#011d32] border-r-[#5d5a5a] overflow-hidden' >

       <div className='left w-[50%] h-full  '>

        <img className=' w-[100%] h-full object-cover  ' src={imgUrl} alt="" />

       </div>

       <div className='right  w-[50%] h-full  '>
        <h5 className='text-white'>  {head} </h5>
        <h6 className='text-[#a9a7a7] '> {para}   </h6>
       </div>

     </div>
  )
}

export default Foot