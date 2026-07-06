
import React from 'react'

const Footer = () => {
  return (
    <div className='w-[100%] h-[15vh]  p-5 '>
         
         <div className='w-full h-full bg-[#011d32]  rounded-2xl border-[#747c82] border-[1px] p-4  text-white flex items-center justify-between '>

                <div className="left flex  items-center gap-3">
                  <img className=' w-[4rem]' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxGBDdacTDevPT8p0hhKCzQR_geAmVf3MsL2os3oyySEwejyIf" alt="" />

                   <p className=' opacity-70'>@2025 AURORA <sup>TM </sup> <br />
                   ALL RIGHT RESERVED 
                   </p>
                </div>

                <div className="center  flex  items-center gap-3  opacity-90">

                   <a href="#">SHOP  </a>
                   <a href="#">COLLECTION  </a>
                   <a href="#">ABOUT </a>
                   <a href="#">LOOKBOOK </a>
                   <a href="#">CONTACT  </a>
                </div>

                <div className="right  flex  items-center gap-3  opacity-70">
                     <h5>FOLLOW US </h5>
                     <i class="ri-instagram-line"></i>
                     <i class="ri-twitter-line"></i>
                     <i class="ri-tiktok-line"></i>
                </div>
         </div>
    </div>
  )
}

export default Footer