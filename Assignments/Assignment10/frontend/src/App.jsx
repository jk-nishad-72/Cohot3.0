import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  
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