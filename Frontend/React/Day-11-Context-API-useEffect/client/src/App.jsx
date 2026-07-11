import React from 'react'
import Navabar from './components/Navbar'
import Cart from './components/Cart'
import ProductCard from './components/ProductCard'
import { useState } from 'react'
import { useContext } from 'react'
import { MyShopStore2 } from './context/MyShopContext2'

import { ToastContainer } from 'react-toastify'

const App = () => {



  // using useContext for getting all the values from the context file  

  let { products , toggle } = useContext(MyShopStore2)



  
   


  return ( 

    <div className=' bg-black text-white  w-full h-[fit-content] p-2'> 

          <ToastContainer position="top-center" autoClose={1000}  />

              < Navabar />
               
               {

                 toggle  ? 

                    <div className=' h-[fit-content] bg-black w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6'>

                    { products.map((val , i)=>{

                    return < ProductCard 

                    
                     key={val.id} 
                     product={val}
                     />
                   })}

                   </div>
                  :
              < Cart />

               }

               

    </div>
  )
}

export default App