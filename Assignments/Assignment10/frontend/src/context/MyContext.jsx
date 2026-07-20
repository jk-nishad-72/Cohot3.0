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

      //  console.log(product.minimumOrderQuantity);
       
       let updatedCart = [...uCart , {...product , quantity:product.minimumOrderQuantity || 1}]  
       setUCart(updatedCart)
       const user = JSON.parse(localStorage.getItem('currentUser'))
       user.cart = updatedCart
       localStorage.setItem('currentUser' , JSON.stringify(user))
       toast.success("Product Added Successfully") 
     
}

const incrementProductQuantity = (productId)=>{

    const productObj = uCart.find((prdct)=> prdct.id === productId) 
    let { stock , quantity} = productObj
   
    if(quantity < stock){

       let updateCart = uCart.map((item)=>{ 
         return  item.id === productId ?   {...item , quantity: item.quantity + 1} : item 
        })

       setUCart(updateCart)  
       const user = JSON.parse(localStorage.getItem('currentUser'))
       user.cart = updateCart
       localStorage.setItem('currentUser' , JSON.stringify(user)) 

      
    }
    else {
       toast.error("Out of Stock")

    }   
}


const decrementProductQuantity = (productId)=>{
 

   const productObj = uCart.find((prdct)=> prdct.id === productId)
   let {minimumOrderQuantity  , quantity} = productObj

    if(quantity > minimumOrderQuantity){ 

      let updateCart = uCart.map((item)=>{ 
         return  item.id === productId ?   {...item , quantity: item.quantity - 1} : item 
        })

       setUCart(updateCart)  
       const user = JSON.parse(localStorage.getItem('currentUser'))
       user.cart = updateCart
       localStorage.setItem('currentUser' , JSON.stringify(user))

      } 
  
    else {
       toast.error("Minimum Order Quantity Required") 

    }  
  
}


  const handleRemoveCart = (id) => {

    console.log(id);

    const updatedCart = uCart.filter((item)=> item.id !== id) 
    setUCart(updatedCart)

    const user = JSON.parse(localStorage.getItem('currentUser'))
    user.cart = updatedCart
    localStorage.setItem('currentUser' , JSON.stringify(user))
    
    toast.info('Item removed')
  }

  const handleClearCart = () => { 

    if (uCart.length === 0) {
      toast.warning('Cart is already empty')
      return
    } else {

       const user = JSON.parse(localStorage.getItem('currentUser'))
       user.cart = [] 
       localStorage.setItem('currentUser' , JSON.stringify(user))
       setUCart([]) 
      toast.info('Cart cleared')
    }
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
               value={ 
                
                {
                products , 
                setProducts , 
                allUsers , 
                setAllUser , 
                currentUser , 
                setCurrentUser , 
                addToCartFun , 
                uCart  , 
                setUCart ,
                handleClearCart,
                incrementProductQuantity,
                decrementProductQuantity,
                handleRemoveCart
              }
              }
         >
            {children}
         </MyShopStoreContext>
     )
}