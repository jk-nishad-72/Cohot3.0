import { useEffect } from "react";
import { createContext, useState } from "react";
import { getClients } from "../api/clientData";



export const myClientContext = createContext();


export const ClientContextProvider = ({children})=>{

    const [clients , setClients] = useState([]) 
    const [updateClient , setUpdateClient] = useState(null)

    //Fetch the data from the  backend 
    const fetchData = async()=>{
        try {
         let res = await getClients()
          console.log('clients page response', res);
          setClients(res)    
                
        } catch (error) {
         console.log('clients error' , error);
        }
      }
    useEffect(()=>{
     fetchData()
    },[]) 

    return <myClientContext.Provider value={{
        clients , 
        setClients,
        updateClient,
        setUpdateClient,
        fetchData
        }}> 
        
        {children}
    </myClientContext.Provider>
}