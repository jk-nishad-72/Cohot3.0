import React, { useContext, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useNavigate } from 'react-router'
import { FiShoppingBag, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'
import { MyShopStoreContext } from '../context/MyContext.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Footer from '../components/Footer.jsx'

// each card sits on a flat color block — the signature move of this system
const PALETTE = ['#F6D875', '#F2A15C', '#8FC7B8', '#F2A9C4', '#9BC4EA', '#C7B8ED']

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

const gridVariants = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } }

const Shop = () => { 
  
  const { products, addToCartFun } = useContext(MyShopStoreContext)
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(() => {
    if (!products) return []
    return ['All', ...new Set(products.map((p) => p.category))]
  }, [products])


  const filtered = useMemo(() => {
    if (!products) return []
    return activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory)
  }, [products, activeCategory])


  // console.log(categories , filtered);
  
  
  if (!products || products.length === 0) { 
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 bg-[#FAFAF9]">
        <p className="text-xl font-semibold text-[#141414] mb-1">Nothing here yet</p>
        <p className="text-sm text-[#8A8A85]">Check back soon for new arrivals.</p>
      </div>
    )
  }

  return (

     <>
    <div className="bg-[#FAFAF9] min-h-screen">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14"> 
        {/* header row, mirrors "Top-Selling Product" section framing */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="inline-block text-[12px] font-medium bg-[#F0EFEA] text-[#141414] rounded-full px-3 py-1 mb-3">
              {filtered.length} products
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#141414] tracking-tight leading-tight">
              Our All Products
            </h1>
          </div>
          <p className="text-sm text-[#8A8A85] max-w-xs">
            These products rotate weekly based on availability and demand.
          </p>
        </div>

        {/* category pills */}
        <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full text-[13px] font-medium px-4 py-2 capitalize transition-colors border ${
                activeCategory === cat
                  ? 'bg-[#141414] text-white border-[#141414]'
                  : 'bg-white text-[#141414] border-[#E5E3DD] hover:border-[#141414]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={gridVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-7"
          >
            {filtered.map((product, i) => (
              <ProductCard

                variants={cardVariants} 
                key={product.id}
                product={product}
                bg={PALETTE[i % PALETTE.length]}
              
                onNavigate={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div> 

    </div>

     <Footer />
     </>

  )
}

export default Shop