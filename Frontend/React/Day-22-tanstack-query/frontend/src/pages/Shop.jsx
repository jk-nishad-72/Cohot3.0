import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { getProductsAPI } from "../api/getProductAPI";
import ProductCard from "../components/ProductCard.jsx";
import ShopSkeleton from "../components/ShopSkeleton.jsx";
import { useQuery } from "@tanstack/react-query";

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const Shop = () => { 

  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const getProduct = async () => {
  //   try {
  //     setError(null);
  //     const result = await getProductsAPI();
  //     setProducts(result);
  //   } catch (error) {
  //     console.log("error", error);
  //     setError("Couldn't load products. Try again in a moment.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

    let {isPending , data , error}  = useQuery({
      queryKey:[''],
      queryFn:getProductsAPI,
      staleTime:5000,
    })



  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Shop
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          {isPending ? "Loading products…" : `${data.length} products`}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {isPending ? (
          <motion.div
            key="skeleton"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ShopSkeleton />
          </motion.div>
        ) : error ? (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 py-16 text-center"
          >
            <p className="text-sm text-slate-500">{error}</p>
            <button
              onClick={() => {
                setIsLoading(true);
                getProduct();
              }}
              className="rounded-full bg-slate-900 px-4 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Retry
            </button>
          </motion.div>
        ) : data.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 py-16 text-center text-sm text-slate-500"
          >
            No products found.
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            variants={gridVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"
          >
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;