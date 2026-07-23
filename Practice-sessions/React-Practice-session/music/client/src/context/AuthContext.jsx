
import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{

    

       const [role, setRole] = useState("listener");
       const [users, setUsers] = useState(()=>{
        return JSON.parse(localStorage.getItem('users')) || []
       })

       const [loggedUser, setLoggedUser] = useState(()=>{
        return JSON.parse(localStorage.getItem('loggedUser')) || null
       })






    return (
    <AuthContext.Provider
     value={{ role  , setRole , users , setUsers  , loggedUser , setLoggedUser }}>
     {children}
    </AuthContext.Provider>)
}