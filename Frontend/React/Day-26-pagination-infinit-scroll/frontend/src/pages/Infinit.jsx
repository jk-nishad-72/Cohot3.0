import React, {useState} from 'react'
import {useInfiniteQuery} from "@tanstack/react-query";
import {getAllProducts} from "../api/api.jsx";
import {motion} from "framer-motion";
import ProductCard from "../components/ProductCard.jsx";

const Infinit = () => {

let limit = 10;



    let {data , isPending , fetchNextPage , hasNextPage  , isFetchingNextPage } =   useInfiniteQuery({
           queryKey:['products'],
           queryFn:({pageParam})=>getAllProducts(limit , pageParam ),
           initialPageParam:0,
           getNextPageParam:(lastPage , allPages)=>{

                let loadedPage = allPages.length * limit;
                return loadedPage < lastPage.total ? loadedPage : undefined;
           }
       })


  if(isPending) return  <h1> Loading.... </h1>

    console.log(data.pages[0].products)

    let allProducts = data?.pages?.flatMap((val) => val.products) ?? [];

    return (
        <div>
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


                        {allProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}


                    <div  className={` flex items-center gap-5 `}>

                        <button

                            onClick={()=>fetchNextPage()}
                            className={`  border border-gray-500 p-4  rounded-2xl hover:border-blue-500 cursor-pointer  `}>
                            load more..
                        </button>
                    </div>
                </div>

                {/* Empty State */}
                {isPending && (
                    <p className="text-center mt-10 text-gray-500">
                        Loading products...
                    </p>
                )}
            </div>

        </div>
    )
}
export default Infinit
