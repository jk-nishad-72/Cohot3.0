import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'  


import TestComp from './testComponents/TestComp.jsx'
import { ContextProvider } from './context/MyContext.jsx'
import { MyShopProvider } from './context/MyShopContext.jsx'        

createRoot(document.getElementById('root')).render(
  
   
     <MyShopProvider>
       <App />
     </MyShopProvider>
    
        // <ContextProvider> 
        //    <TestComp />
        // </ContextProvider>

)
