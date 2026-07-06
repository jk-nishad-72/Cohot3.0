


import React from 'react'

const Card = ({brand , name , image , colors , price}) => {

    // console.log(brand , name , image , colors , price);
    



  return (


    <div className=' cursor-pointer overflow-hidden w-[16rem] h-[32rem] bg-[#7490a8]  rounded-2xl border-[#747c82] border-[1px]  '>

        <div className='w-full h-[80%] '>
            <img className=' w-full h-[100%] object-cover ' src={image} alt="" />
        </div>

        <div className='  w-full h-[20%] bg-[#22374a]  text-white px-4 py-2  '>    

             <h5 className=' opacity-90 text-[.9rem]' >{brand} </h5>
             <h6 className=' opacity-70  text-[1rem]'>{name} </h6>

             <h5 className='flex gap-[1rem] ' > 

            
            {colors.map((clr)=>{

              
                return <h6 className= 'opacity-90 flex items-center gap-1 ' > <div className= "w-[1rem] h-[1rem] rounded-full "
                 style={{ backgroundColor: clr.toLowerCase() }}
                 ></div> {clr}  </h6>

            })
            }

            </h5>


            <h6 className=' opacity-60 text-[.8rem] '>{price}</h6> 

        </div>


        
    </div> 





  )
}

export default Card