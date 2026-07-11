import { useState } from "react";
import { createContext } from "react";


export const Mystore = createContext();


export const ContextProvider = ({children})=>{

     const [name, setName] = useState("Jay kishan Nishad ")


     return ( 

     <Mystore.Provider value={{name , setName}}>
            {children}
     </Mystore.Provider>

     )


}




