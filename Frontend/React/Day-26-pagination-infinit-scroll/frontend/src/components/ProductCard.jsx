
// components/ProductCard.jsx
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import {SiTarget} from "react-icons/si";
import {CgShoppingCart} from "react-icons/cg";
import {AiFillStar} from "react-icons/ai";

const ProductCard = ({ product }) => {


    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-3 hover:shadow-xl"
        >
            {/* Image */}
            <div className="h-48 flex items-center justify-center bg-gray-100 rounded-xl">
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="h-full object-contain"
                />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold line-clamp-2">
                {product.title}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500">
                <AiFillStar size={16} />
                <span className="text-sm text-gray-600">
          {product.rating?.rate || 4.5}
        </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between mt-auto">
        <span className="text-xl font-bold text-green-600">
          ₹{product.price}
        </span>

                <button className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition">
                    <CgShoppingCart size={16} />
                    Add
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;