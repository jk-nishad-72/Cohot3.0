import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-md rounded-xl p-8 max-w-2xl w-full"
      >
        <h1 className="text-2xl font-bold text-blue-500 mb-4">
          About Us
        </h1>

        <p className="text-gray-600 leading-relaxed">
          Buyzaar is a modern e-commerce platform built to provide users with
          a smooth and enjoyable shopping experience. We focus on simplicity,
          speed, and clean design while delivering high-quality products and
          services.
        </p>
      </motion.div>
    </div>
  );
};

export default About;