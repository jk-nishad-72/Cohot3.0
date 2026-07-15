
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyStoreProvider } from './context/MyContext.jsx'
import { MyShopPracticeContextProvideer } from './context/MyPracticeContext.jsx'
//  
createRoot(document.getElementById('root')).render(

   <MyShopPracticeContextProvideer>
     <App />
   </MyShopPracticeContextProvideer>
 
)
