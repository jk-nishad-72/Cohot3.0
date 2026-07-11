
import React, { createContext, use } from 'react'
import { useState } from 'react'

export const MyShopStore = createContext() 


export const MyShopProvider = ({children})=>{


     const [view, setView] = useState(true) 
   
      const [cart, setCart] = useState([]) 

    
    return (

         <MyShopStore.Provider value ={{view , setView , cart , setCart}} >
         
         {children}
         </MyShopStore.Provider>
    )
}