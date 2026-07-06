
import React from 'react'
import Card from './Card'


const Main = () => {



 let cardArray =   [
  {
    "id": 1,
    "brand": "AURORA SILVER",
    "name": "REFLECTIVE PUFFER JACKET",
    "image": "/Images/img1.png",
    "colors": ["WHITE", "BLUE"],
    "price": "$1,999.99"
  },
  {
    "id": 2,
    "brand": "NOVA EDGE",
    "name": "URBAN WINDBREAKER",
    "image": "/Images/img2.png",
    "colors": ["BLACK", "GRAY"],
    "price": "$1,499.99"
  },
  {
    "id": 3,
    "brand": "FROSTLINE",
    "name": "THERMAL HOODED JACKET",
    "image": "/Images/img3.png",
    "colors": ["WHITE", "NAVY"],
    "price": "$2,199.99"
  },
  {
    "id": 4,
    "brand": "VORTEX",
    "name": "SPORTS TRACK JACKET",
    "image": "/Images/img4.png",
    "colors": ["RED", "BLACK"],
    "price": "$999.99"
  },
  {
    "id": 5,
    "brand": "ARCTIC ZONE",
    "name": "HEAVY DUTY PARKA",
    "image": "/Images/img5.png",
    "colors": ["GREEN", "BROWN"],
    "price": "$2,599.99"
  },
  {
    "id": 6,
    "brand": "SKYLINE",
    "name": "LIGHTWEIGHT PUFFER",
    "image": "/Images/img6.png",
    "colors": ["BLUE", "WHITE"],
    "price": "$1,299.99"
  },
  {
    "id": 7,
    "brand": "URBAN FLEX",
    "name": "CASUAL DENIM JACKET",
    "image": "/Images/img7.png",
    "colors": ["DENIM BLUE", "BLACK"],
    "price": "$899.99"
  },
  {
    "id": 8,
    "brand": "NORTH CORE",
    "name": "ALL WEATHER JACKET",
    "image": "/Images/img8.png",
    "colors": ["GRAY", "OLIVE"],
    "price": "$1,799.99"
  },
//   {
//     "id": 9,
//     "brand": "BLAZE",
//     "name": "FIRE PROOF RIDER JACKET",
//     "image": "/Images/img9.png",
//     "colors": ["BLACK", "RED"],
//     "price": "$2,999.99"
//   },
//   {
//     "id": 10,
//     "brand": "OCEAN WAVE",
//     "name": "WATERPROOF SHELL JACKET",
//     "image": "/Images/img10.png",
//     "colors": ["BLUE", "CYAN"],
//     "price": "$1,599.99"
//   },
//   {
//     "id": 11,
//     "brand": "DESERT STORM",
//     "name": "TACTICAL UTILITY JACKET",
//     "image": "/Images/img11.png",
//     "colors": ["BEIGE", "KHAKI"],
//     "price": "$1,899.99"
//   },
//   {
//     "id": 12,
//     "brand": "NIGHTFALL",
//     "name": "STEALTH BOMBER JACKET",
//     "image": "/Images/img12.png",
//     "colors": ["BLACK", "DARK GRAY"],
//     "price": "$1,499.99"
//   },
//   {
//     "id": 13,
//     "brand": "EVEREST PEAK",
//     "name": "EXTREME WINTER COAT",
//     "image": "/Images/img13.png",
//     "colors": ["WHITE", "SILVER"],
//     "price": "$3,199.99"
//   },
//   {
//     "id": 14,
//     "brand": "STREET MODE",
//     "name": "OVERSIZED HOODIE JACKET",
//     "image": "/Images/img14.png",
//     "colors": ["PURPLE", "BLACK"],
//     "price": "$1,099.99"
//   },
//   {
//     "id": 15,
//     "brand": "AERO TECH",
//     "name": "SMART HEATED JACKET",
//     "image": "/Images/img15.png",
//     "colors": ["GRAY", "BLUE"],
//     "price": "$2,499.99"
//   }
]
  return (

    <> 
    <div className=' w-full  h-[140vh] bg-[#0A131E] px-6  flex overflow-x-auto flex-wrap gap-[2rem]  justify-start  ' >

           <div className=' w-[34rem] h-[32rem]   rounded-2xl overflow-hidden relative border-[#747c82] border-[1px] '>

            <img className=' absolute w-full h-full z-1 object-cover '  src="/Images/hero.png" alt="" /> 


            <div className=' absolute z-10 right-[3%] top-[50%] flex  flex-col gap-[2rem] '>
                <h2 className='text-4xl text-white uppercase font-bold  '>aurora <sup><span className='text-sm'>TM</span></sup> </h2>

                <div className='flex gap-[1rem] '> 
                     <i className="ri-arrow-right-s-line text-4xl text-white px-2 py-2 rounded-full  bg-[#242C35]  h-[fit-content]  text-4xl rounded-2xl border-[#bcc8d7] border-1  "></i>  
                     <h3 className='text-[#83b5f2] font-semibold '> ADD TO CARD <br />
                      <span className='text-white  text-2xl '> $1,999</span>
                    </h3>

                </div>
            </div>
             

           </div>

         
           {
             cardArray.map((obj)=>{

                 return    < Card  brand = {obj.brand} name = {obj.name} image = {obj.image} colors = {obj.colors} price = {obj.price}  />

                

             })

           }
           
           
          
    </div> 
    </>
  )
}

export default Main