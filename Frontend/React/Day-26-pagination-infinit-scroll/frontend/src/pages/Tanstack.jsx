import React, {useState} from 'react'
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {getAllProducts} from "../api/api.jsx";
import {motion} from "framer-motion";
import ProductCard from "../components/ProductCard.jsx";

const Tanstack = () => {


    let limit = 10;
    let totalPages = null;
    const [page , setPage] = useState(0)

    let {data ,isPending,isError , isPlaceholderData} = useQuery({
          queryKey:["products", page],
          queryFn:()=>getAllProducts(limit , page),
          isPlaceholderData:keepPreviousData,
      })

    totalPages  = Math.ceil((data?.total) /limit)
    console.log(totalPages)
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

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data?.products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

                <div  className={` flex items-center gap-5 `}>
                    <button
                        disabled={page === 0}
                        onClick={()=>setPage(page - 1)}  className={`  border border-gray-500 p-4  rounded-2xl hover:border-blue-500 cursor-pointer  `}> prev   </button>
                    <h2 className={` border border-gray-500 p-4  rounded-2xl hover:border-blue-500 cursor-pointer flex items-center gap-3 `}> {page + 1}  of  {totalPages} </h2>
                    <button
                        disabled={page >= totalPages - 1}
                        onClick={()=>setPage(page + 1)} className={`  border border-gray-500 p-4 rounded-2xl hover:border-blue-500 cursor-pointer  `}> next   </button>
                </div>
            </div>

            {/* Empty State */}
            {isPending && (
                <p className="text-center mt-10 text-gray-500">
                    Loading products...
                </p>
            )}
        </div>
    )
}
export default Tanstack
