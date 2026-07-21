import { createContext, useState } from "react";



export const MyContext = createContext();


export const ContextProvider = ({children})=>{

     const [users , setUsers] = useState(()=>{

        return JSON.parse(localStorage.getItem('users')) || []
     }

     )
     const [loggedUser , setLoggedUser ] = useState(()=>{
        return JSON.parse(localStorage.getItem('loggedUser')) || null  
     })


     return <MyContext.Provider 

      value={{
           
        users,
        loggedUser,
        setUsers,
        setLoggedUser, 
      }}
     >

        {children}
     </MyContext.Provider>
}