import { motion } from "motion/react";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const ProductCard = ({ product }) => {
  const { title, price, image, category, rating } = product;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-200/60"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {category && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium capitalize text-slate-600 backdrop-blur">
            {category}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-2 text-sm font-medium text-slate-800">
          {title}
        </h3>

        {rating && (
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <FaStar className="text-amber-400" />
            <span>{rating.rate ?? rating}</span>
            {rating.count && (
              <span className="text-slate-400">({rating.count})</span>
            )}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-lg font-semibold text-slate-900">
            ${price}
          </span>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-3.5 py-1.5 text-xs font-medium text-white shadow-sm shadow-sky-500/30"
          >
            <FaShoppingCart />
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;