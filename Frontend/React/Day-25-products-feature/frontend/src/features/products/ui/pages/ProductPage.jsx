// pages/ProductPage.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import {useAllProductHook, useProductsByCategory} from "../../hooks/useProductHook.jsx";
import { motion } from "framer-motion";
import FilterBar from "../components/FilterBar.jsx";


const ProductPage = () => {



let { data, isPending, error, search, setSearch} = useAllProductHook()  
let {data:getProductsByCategory , category , setCategory}  =    useProductsByCategory() 

    console.log('product page->',getProductsByCategory?.products.length);


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        🛍️ Explore Products
      </motion.h1>  

        <div className="mb-6">
            <FilterBar
              
               category={category}
               setCategory={setCategory}
               search={search}
               setSearch={setSearch}
              
              />
        </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
        getProductsByCategory?.products.length ? 

         getProductsByCategory?.products.map((product)=>{
         return   <ProductCard key={product.id}  product={product}/>
         })
          : 
          data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
        }
      </div>

      {/* Empty State */}
      {isPending && (
        <p className="text-center mt-10 text-gray-500">
          Loading products...
        </p>
      )} 
    </div>

    
  );
};

export default ProductPage;