import React from 'react'
import Router from './routes/Router'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {



  return (

       <> 
       <ToastContainer
         position="top-right"
         autoClose={500}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
          pauseOnHover
          theme="light"
       />
       <Navbar/>
       <Router/>

       </>
     
    
  )
}

export default App