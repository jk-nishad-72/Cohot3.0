
import React from 'react'

const Product = ({id ,title , price , description , category , image ,del}) => {



    // console.log( id ,title , price,image,category);
    
  return (

    <div key={id} className='w-[220px] h-[250px] border-1 border-[black] rounded-[.2rem] flex items-center flex-col justify-between p-[.2rem] '>

        <h3 className=' text-sm'>{title }</h3>
        <p className='text-sm '> {category}</p>
    
         <img src={image} alt="prdimage"  className='w-[150px]  object-contain h-[100px]' />
        <h4>{price}  </h4>

        <button  className=' cursor-pointer bg-[#a60707] text-white p-[.2rem] px-[.5rem] rounded-sm' onClick={()=>(del(id))}>Delete</button>


    </div>
  )
}

export default Product