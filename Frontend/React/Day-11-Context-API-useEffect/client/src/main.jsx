import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'  


import TestComp from './testComponents/TestComp.jsx'

import {ContexProvider2} from './context/MyShopContext2.jsx'

createRoot(document.getElementById('root')).render(
  
   
  
   
   <ContexProvider2>
    
       <App />

   </ContexProvider2>
            
    
        // <ContextProvider> 
        //    <TestComp />
        // </ContextProvider>

)
