import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer, toast } from 'react-toastify';
import { MyShopStoreContext } from "./context/MyContext";
import { useNavigate } from "react-router";

const App = () => {

   let {currentUser  , } = useContext(MyShopStoreContext)
   let navigate = useNavigate()


     useEffect(()=>{
       if(!currentUser.email){  
         navigate('/login') 
       }
     },[])


  
  return (
    <div className="relative min-h-screen bg-[#f5f5f7]">
      
      {/* Navbar always on top */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-16">
        <AppRoutes />

        <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      </div>

    </div>
  );
};

export default App;