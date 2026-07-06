

import React from 'react'

const Navbar = () => {
  return (


   <>
    <div className=' w-full   h-[20vh]  px-10 py-4   '> 

         <h3 className='text-[#83b5f2] font-semibold '>2025 / WINNER DROP</h3>

         <div className='w-full   flex justify-between  items-center '>

             <h1 className='text-[#fff] text-8xl font-bold font-mono tracking-tighter '>NEW COLLECTION</h1> 

             <div className="nav-center text-white opacity-75 flex  w-[30%]  gap-[2rem] ">

                 <div className=' uppercase text-xl flex items-start flex-col justify-center  border-r-1  border-[#577599]  px-2'>
                 <h4>[ new collection ]</h4>
                 <h4>[ limited drop ]</h4>
                 <h4>[ winner 25  ]</h4>
                 </div>

                 <div className=' uppercase '>
                    <h4>puffer jackets </h4>
                    <h4>tech wear </h4>
                    <h4>glossy silver</h4>
                    <h4>stealth black </h4>
                 </div>
             </div>

        
            <h4 className= ' cursor-pointer text-white opacity-75 hover:[transform:scale(.90)] px-6 py-2 bg-[#242C35]  h-[fit-content]  text-xl rounded-2xl border-[#577599] border-1 '>FILTERS <i class="ri-equalizer-3-fill"></i> </h4>
           

         </div>

    </div>
   </>

   
  )
}

export default Navbar