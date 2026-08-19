
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from "react-toastify";
import { ClientContextProvider } from './context/ClientContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <ClientContextProvider>
      <App />
      <ToastContainer />
     </ClientContextProvider>
  </BrowserRouter>,
)
