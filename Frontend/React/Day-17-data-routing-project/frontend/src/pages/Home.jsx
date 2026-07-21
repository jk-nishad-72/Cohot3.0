import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-md rounded-xl p-8 text-center max-w-xl w-full"
      >
        <h1 className="text-3xl font-bold text-blue-500 mb-4">
          Welcome to Buyzaar 🚀
        </h1>
        <p className="text-gray-600 mb-6">
          Your one-stop platform to explore amazing products and services.
        </p>

        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
          Explore Now
        </button>
      </motion.div>
    </div>
  );
};

export default Home;