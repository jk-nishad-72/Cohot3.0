import React, { useContext, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FiShoppingBag } from 'react-icons/fi'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'
import { MyShopStoreContext } from '../context/MyContext.jsx'
import { useNavigate } from 'react-router'

const RatingStars = ({ rating }) => (

  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar
        key={i}
        size={11}
        className={i < Math.round(rating) ? 'text-[#B76E79]' : 'text-[#E8DED9]'}
      />
    ))}
  </div>
)


const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const ProductCard = ({ product, onAddToCart, onNavigate , uCart }) => {

  
 const [isExistInCart, setIsExistInCart] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [wishlisted, setWishlisted] = useState(false)
  const discounted = product.price * (1 - product.discountPercentage / 100)
  const lowStock = product.stock > 0 && product.stock <= 10
  const outOfStock = product.stock === 0

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onNavigate}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-[#EFE6E0] shadow-[0_1px_3px_rgba(59,42,46,0.06)]"
      style={{ boxShadow: hovered ? '0 16px 32px rgba(59,42,46,0.12)' : '0 1px 3px rgba(59,42,46,0.06)' }}
    >
      {/* signature gold sheen */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] z-10 bg-gradient-to-r from-transparent via-[#D4AF8C] to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: hovered ? '100%' : '-100%' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      />

      {/* wishlist */}
      <motion.button
        onClick={(e) => {
          e.stopPropagation()
          setWishlisted((w) => !w)
        }}
        whileTap={{ scale: 0.8 }}
        className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={wishlisted ? 'filled' : 'empty'}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {wishlisted ? (
              <FaHeart size={14} className="text-[#B76E79]" />
            ) : (
              <FaRegHeart size={14} className="text-[#3B2A2E]" />
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F6EFEA]">
        <motion.img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          loading="lazy"
        />

        {product.discountPercentage > 0 && (
          <span className="absolute top-3 left-3 rounded-full bg-[#3B2A2E] text-white text-[11px] font-medium tracking-wide px-2.5 py-1">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}

        {outOfStock && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
            <span className="text-[#3B2A2E] text-xs font-medium tracking-[0.15em] uppercase">
              Out of stock
            </span>
          </div>
        )}

        {/* quick add */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            if (!outOfStock) onAddToCart(product)
          }}
          disabled={outOfStock}
          initial={{ y: '100%' }}
          animate={{ y: hovered && !outOfStock ? 0 : '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 bg-[#3B2A2E] text-white text-sm font-medium tracking-wide py-3 hover:bg-[#B76E79] disabled:bg-[#8B7D80] disabled:cursor-not-allowed"
        >

       <FiShoppingBag size={15} />
       {
         uCart.find(item => item.id === product.id) ? (
           <span className="text-white text-sm font-medium tracking-wide">In Cart</span>
         ) : (
           <span className="text-white text-sm font-medium tracking-wide">Add to Bag</span>
         )
       }
        </motion.button>


      </div>

      {/* details */}
      <div className="p-4 space-y-1.5">
        <p className="text-[11px] uppercase tracking-[0.12em] text-[#B76E79] font-medium font-['Inter']">
          {product.brand}
        </p>

        <h3 className="font-['Playfair_Display'] text-[17px] leading-snug text-[#3B2A2E] italic truncate">
          {product.title}
        </h3>

        <RatingStars rating={product.rating} />

        <div className="flex items-baseline gap-2 pt-1">
          <span className="font-['Inter'] font-semibold text-[#3B2A2E]">
            ${discounted.toFixed(2)}
          </span>
          {product.discountPercentage > 0 && (
            <span className="font-['Inter'] text-xs text-[#8B7D80] line-through">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>

        {lowStock && (
          <p className="text-[11px] text-[#B76E79] font-['Inter'] pt-0.5">
            Only {product.stock} left
          </p>
        )}
      </div>
    </motion.div>
  )
}


const Shop = () => {
  const { products, addToCartFun , uCart } = useContext(MyShopStoreContext)

 
  
  const navigate = useNavigate()

  if (!products || products.length === 0) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
        <p className="font-['Playfair_Display'] italic text-xl text-[#3B2A2E] mb-1">
          Nothing here yet
        </p>
        <p className="font-['Inter'] text-sm text-[#8B7D80]">
          Check back soon for new arrivals.
        </p>
      </div>
    )
  }


  return (
    <div className="bg-[#FAF6F1] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#B76E79] font-['Inter'] font-medium mb-1">
            Curated Beauty
          </p>
          <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#3B2A2E]">
            Shop the Collection
          </h1>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}e
              onAddToCart={addToCartFun}
              uCart={uCart}
              onNavigate={() => navigate(`/product/${product.id}`)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Shop