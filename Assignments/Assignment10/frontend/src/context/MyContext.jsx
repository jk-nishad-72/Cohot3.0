import axios from "axios";
import { useState } from "react";
import { createContext, useEffect } from "react";
import { toast } from "react-toastify";



export const MyShopStoreContext = createContext();


export const ContextProvider = ({children})=>{

     const [products , setProducts] = useState([])
     const [allUsers , setAllUser ] = useState(()=>{
      return JSON.parse(localStorage.getItem('allUsers')) || [] 
     })

     const [currentUser , setCurrentUser ] = useState(()=>{
      return JSON.parse(localStorage.getItem('currentUser')) || {} 
     })

     const [uCart , setUCart]  = useState(()=>{

      const user = JSON.parse(localStorage.getItem('currentUser'))
      return user?.cart || [] 
     })


     const addToCartFun = (product)=>{

      console.log(product);
      

       let updatedCart = [...uCart , product]
       setUCart(updatedCart)
      const user = JSON.parse(localStorage.getItem('currentUser'))
      user.cart = updatedCart
      localStorage.setItem('currentUser' , JSON.stringify(user))
       toast.success("Product Added Successfully") 
     
     }

    
     

   

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
               value={{products , setProducts , allUsers , setAllUser , currentUser , setCurrentUser , addToCartFun , uCart }}
         >
            {children}
         </MyShopStoreContext>
     )
}