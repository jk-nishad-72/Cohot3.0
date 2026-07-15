import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";



export const MyShopPracticeContext = createContext()


export const MyShopPracticeContextProvideer = ({children})=>{



       const [toggle , setToggle] = useState(true)
       const [carts , setCarts] = useState(()=>{
         
         return JSON.parse(localStorage.getItem('carts')) || []
       }) 


       
  const hanclAddTocart = (product)=>{
 
      let arr = [...carts , {...product , qty:1} ]
   
        setCarts(arr) 

         localStorage.setItem('carts' , JSON.stringify(arr))

        toast.success('Product Added To Cart')
     
  }

       const increment = (id)=>{

        let incrementedArr = carts.map((val)=>{
            return id === val.id ? {...val , qty:val.qty+1}:val
        })

        setCarts(incrementedArr)
        localStorage.setItem('carts' , JSON.stringify(incrementedArr))


        //   setCarts(prev =>{

        //     return prev
        //     .map((val)=>{
        //         return id === val.id ? {...val , qty:val.qty+1} : val
        //     })
        //   })

          toast.success('Incremented')

       }
       const decrement = (id)=>{

        
        let decrementedArr = carts
        .map((val)=>{
            return id === val.id ? {...val , qty:val.qty-1}:val
        })
        .filter(val => val.qty > 0) 

        setCarts(decrementedArr)
        localStorage.setItem('carts' , JSON.stringify(decrementedArr))
        


        //  setCarts(prev =>{
        //      return prev
        //      .map((val)=>{return val.id === id ? {...val , qty:val.qty-1} : val})
        //      .filter((val)=>val.qty > 0) 
        //  })

         toast.error('⚔️ Decremented')
          
       }


    return (<MyShopPracticeContext 
                   value={{toggle , setToggle ,carts , setCarts , increment , decrement  ,hanclAddTocart}}
                    >
                {children}
            </MyShopPracticeContext>
)
}