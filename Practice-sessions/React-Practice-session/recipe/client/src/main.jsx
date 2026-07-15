
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  BrowserRouter} from "react-router-dom";
import { MyRecipeStoreProvider } from './context/MyRecipeContext.jsx';

createRoot(document.getElementById('root')).render(

       
<MyRecipeStoreProvider>
   <BrowserRouter>
    < App />
   </BrowserRouter> 
</MyRecipeStoreProvider>

)
