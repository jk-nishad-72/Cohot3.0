import { useContext, useState } from "react"
import RatingStars from "./RatingStars"
import { motion } from "framer-motion";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

import { BsCartCheck } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { MyShopStoreContext } from "../context/MyContext";




const ProductCard = ({ variants ,  product, bg, onNavigate }) => {

  let { uCart  , setUCart  , addToCartFun } = useContext(MyShopStoreContext)
    const [isInCart, setIsInCart] = useState(()=>{
    return uCart.some((item)=>item.id === product.id) 
  })



  const [wishlisted, setWishlisted] = useState(false)

  const discounted = product.price * (1 - product.discountPercentage / 100)
  const outOfStock = product.stock === 0 

  return (
    <motion.div 
     variants={variants}
     whileHover={{ y: -4 }} 
     className="group cursor-pointer" 
     onClick={onNavigate}>

      <div className="relative aspect-square rounded-3xl overflow-hidden" style={{ backgroundColor: bg }}>
           {/* 2. image wrapper */}
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />


         {/* Favorite button */}
        <motion.button 

          onClick={(e) => { e.stopPropagation(); setWishlisted((w) => !w) }}
          whileTap={{ scale: 0.8 }}
          className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/85 backdrop-blur flex items-center justify-center"
        >
          {wishlisted ? <FaHeart size={13} className="text-[#141414]" /> : <FaRegHeart size={13} className="text-[#141414]" />}
        </motion.button>

        {product.discountPercentage > 0 && !outOfStock && (
          <span className="absolute top-3 right-3 rounded-full bg-[#141414] text-white text-[11px] font-medium px-3 py-1.5">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}


        {/* Sold out badge */} 

        {outOfStock && (
          <span className="absolute top-3 right-3 rounded-full bg-white/90 text-[#141414] text-[11px] font-medium px-3 py-1.5">
            Sold out
          </span>
        )}

       

      </div>


      <div className="pt-3 px-1">

        <p className="text-[15px] font-medium text-[#141414] truncate">{product.title}</p> 

           <div className=' relative '>
             
          <div className="flex items-center gap-1.5 mt-1">
            <RatingStars rating={product.rating} />  
            <span className="text-[11px] text-[#8A8A85]">({product.rating.toFixed(1)})</span>
          </div>

          <div className="flex items-baseline gap-2 mt-1"> 
            <span className="text-[15px] font-semibold text-[#141414]">${discounted.toFixed(2)}</span>
            {product.discountPercentage > 0 && ( 
              <span className="text-[12px] text-[#B5B2AA] line-through">${product.price.toFixed(2)}</span>
            )}
          </div> 

              {
                isInCart ? 
                <button 
            className={` absolute text-sm  right-0 bottom-2 flex gap-2 items-center border border-[#E5E3DD] rounded-full px-3 py-2 cursor-pointer bg-[#141414] text-[#fff]  `}
          >
          <BsCartCheck size={13} /> Added 
        </button>
          : 
          <button 

                onClick={(event)=>{
                event.stopPropagation();
                setIsInCart(true) 
                addToCartFun(product) 
               }}
            className=' absolute text-sm  right-0 bottom-2 flex gap-2 items-center border border-[#E5E3DD] rounded-full px-3 py-2 cursor-pointer hover:bg-[#141414] hover:text-[#fff] '
          >

          <FiShoppingCart size={14} /> Add  
        </button>
        }

           </div>
      
      </div>
      
    </motion.div>
  )
}

export default ProductCard