
import React, { createContext } from 'react'
import { useState } from 'react';



 export const ThemeStoreContext = createContext();


export const ThemeStoreProvider = ({children})=>{

     const [theme, setTheme] = useState('dark')
     const [count , setCount ] = useState(0)

      const toggleTheme = ()=>{

        setTheme(preve => {
            return preve === 'dark'? 'light' : 'dark'
        })
      }

    const increment = ()=>{
       setCount(prev => prev+1)
    }

     const decrement = ()=>{
       setCount(prev => prev-1)
    }

    
     const reset = ()=>{
       setCount(0)
    }


    return (

 
             <ThemeStoreContext.Provider 

             value={{theme , toggleTheme  , count ,increment , decrement , reset }}
             >
                 {children}
             </ThemeStoreContext.Provider>
       
    )

}