
import React, { createContext } from 'react'
import { useState } from 'react';



 export const ThemeStoreContext = createContext();


export const ThemeStoreProvider = ({children})=>{

     const [theme, setTheme] = useState('dark')

      const toggleTheme = ()=>{

        setTheme(preve => {
            return preve === 'dark'? 'light' : 'dark'
        })
      }

    return (

 
             <ThemeStoreContext.Provider 

             value={{theme , toggleTheme  }}
             >
                 {children}
             </ThemeStoreContext.Provider>
       
    )

}