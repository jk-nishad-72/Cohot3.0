import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-md rounded-xl p-8 max-w-2xl w-full"
      >
        <h1 className="text-2xl font-bold text-blue-500 mb-6">
          Our Services
        </h1>

        <ul className="space-y-4 text-gray-600">
          <li className="border-b pb-2">
            🚀 Fast and reliable product delivery
          </li>
          <li className="border-b pb-2">
            💳 Secure and seamless payment system
          </li>
          <li className="border-b pb-2">
            📦 Easy returns and customer support
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Service;