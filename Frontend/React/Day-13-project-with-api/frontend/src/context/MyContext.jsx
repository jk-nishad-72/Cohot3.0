import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";


export const MyStoreContext = createContext();


export const MyStoreProvider = ({children})=>{

  const [carts, setCarts] = useState([]);
  const [toggle, setToggle] = useState(true);

  const increment = (id)=>{

       setCarts(prev =>{
         return prev.map((val)=> {
             return  val.id === id ? {...val , qty: val.qty + 1} : val
         })
       })

   toast.success('Qauntity Incremented')

  }

    const decrement = (id)=>{

     setCarts(prev =>{
         return prev
         .map((val)=> {
             return  val.id === id ? {...val , qty: val.qty - 1 }: val
         })
         .filter((val)=>  val.qty > 0 )
       })

   toast.error('Qauntity Decremented')
  }



     return (
         <MyStoreContext.Provider value={{carts , setCarts ,toggle ,setToggle , increment , decrement}} > {children}  </MyStoreContext.Provider>
     )
}