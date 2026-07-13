
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyStoreContextProvider } from './context/MyContext.jsx'

createRoot(document.getElementById('root')).render(
 
  
        <MyStoreContextProvider> 
            <App />
       </MyStoreContextProvider> 
 
)
