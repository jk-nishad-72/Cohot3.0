import { useState } from "react";
import { createContext } from "react";



// Consumer -> createContext();

 export const MyStore = createContext();

// for consumer we need to make ->provider 

export const MyStoreContextProvider = ({children})=>{

     const [count , setCount] =  useState(0) 

     return (
     
     <MyStore.Provider 
      value={{count , setCount}}   > 
        {children}
     </MyStore.Provider>)
}



