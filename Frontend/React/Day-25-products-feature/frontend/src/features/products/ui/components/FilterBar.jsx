// components/FilterBar.jsx
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { getAllCotegories } from "../../api/productApi";
import { useCategoriesHook, useProductsByCategory } from "../../hooks/useProductHook";

const FilterBar = ({
  search,
  setSearch,
  category,
  setCategory,
}) => { 


 let {data , isPending , error} =  useCategoriesHook()  



  if(isPending) return <div> Loading ...  </div> 
   
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6"
    >
      {/* 🔍 Search */}
      <div className="relative w-full md:w-1/2">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-xl border border-green-500 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* 📂 Category Select */}
      <div className="w-full md:w-1/4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-green-500 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">All Categories</option>

          {data.map((cat, index) => (
            <option key={index} value={cat.slug}>
              {cat.name} 
            </option>
          ))}
        </select>
      </div>
    </motion.div>
  );
};

export default FilterBar;