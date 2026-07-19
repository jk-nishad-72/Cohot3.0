import axios from "axios";
import { useState } from "react";
import { createContext, useEffect } from "react";



export const MyShopStoreContext = createContext();


export const ContextProvider = ({children})=>{

     const [products , setProducts] = useState([])
     const [allUsers , setAllUser ] = useState(()=>{
      return JSON.parse(localStorage.getItem('allUsers')) || [] 
     })
     const [currentUser , setCurrentUser ] = useState(()=>{
      return JSON.parse(localStorage.getItem('currentUser')) || {} 
     })

   

const getProducts = async () => {
     
              
           try {
            
            let result = await axios.get(`https://dummyjson.com/products/`)
            setProducts(result.data.products) 
            
           } catch (error) {

             console.log(error);
            
           }
          }


useEffect(()=>{
    getProducts()
},[])



     return (
         
         <MyShopStoreContext
               value={{products , setProducts , allUsers , setAllUser , currentUser , setCurrentUser }}
         >
            {children}
         </MyShopStoreContext>
     )
}