
import React from 'react'
import { useContext } from 'react'
import { MyShopStore2 } from '../context/MyShopContext2'


const Navabar = () => { 


   let {setToggle , cart}     = useContext(MyShopStore2)



  return (


    <div>
       <nav className=" shadow-md  border border-b-gray-300 border-gray-300  rounded-lg p-2  ">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold text-green-600">MyStore</span>
      </div>

      <div className="flex items-center space-x-6"> 
        <a 
        
         onClick={()=>setToggle(true)}
        href="#"
        className="text-gray-300 hover:text-green-600 transition">Products</a>
        <a 
         
        href="#" className="text-gray-300 hover:text-green-600 transition">Product Details </a> 
      </div>

       <div className="relative">
          <button 
         onClick={()=>setToggle(false)}
          className="text-gray-300 hover:text-green-600 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5"> {cart.length} </span>
          </button>
        </div>
    </div>
  </nav>

    </div>
  )
}

export default Navabar