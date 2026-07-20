import { useState } from "react";
import { createContext } from "react";


export const MyContext = createContext();


export const MyContextProvider = ({children})=>{


     const [users , setUsers] = useState(()=>{
      return JSON.parse(localStorage.getItem('users')) || [] 
     })

     const [isLoggedIn , setIsLoggedIn] = useState(()=>{
      return JSON.parse(localStorage.getItem('isLoggedIn')) || null
     })


     

    return <MyContext.Provider value={
           {  
            users , 
            setUsers , 
            isLoggedIn , 
            setIsLoggedIn 

            }
            }>

          {children}

    </MyContext.Provider>

}

