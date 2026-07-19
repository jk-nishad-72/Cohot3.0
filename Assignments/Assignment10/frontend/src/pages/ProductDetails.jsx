import axios from 'axios'
import React, { useContext, useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useParams, useNavigate } from 'react-router'
import {
  FiShoppingBag,
  FiChevronLeft,
  FiChevronRight,
  FiTruck,
  FiShield,
  FiRotateCcw,
  FiMinus,
  FiPlus,
} from 'react-icons/fi'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'
import { MyShopStoreContext } from '../context/MyContext'

const RatingStars = ({ rating, size = 12 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar
        key={i}
        size={size}
        className={i < Math.round(rating) ? 'text-[#B76E79]' : 'text-[#E8DED9]'}
      />
    ))}
  </div>
)

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

// simple skeleton, mirrors the real layout so nothing jumps on load
const DetailSkeleton = () => (
  <div className="bg-[#FAF6F1] min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="h-4 w-28 bg-[#EFE6E0] rounded-full mb-8 animate-pulse" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="aspect-[4/5] rounded-2xl bg-[#EFE6E0] animate-pulse" />
        <div className="space-y-4">
          <div className="h-3 w-32 bg-[#EFE6E0] rounded-full animate-pulse" />
          <div className="h-9 w-3/4 bg-[#EFE6E0] rounded-lg animate-pulse" />
          <div className="h-4 w-40 bg-[#EFE6E0] rounded-full animate-pulse" />
          <div className="h-8 w-24 bg-[#EFE6E0] rounded-lg animate-pulse" />
          <div className="h-24 w-full bg-[#EFE6E0] rounded-lg animate-pulse" />
          <div className="h-11 w-full bg-[#EFE6E0] rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  </div>
)

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCartFun } = useContext(MyShopStoreContext)

  const [singleProduct, setSingleProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [activeImg, setActiveImg] = useState(0)
  const [wishlisted, setWishlisted] = useState(false)
  const [tab, setTab] = useState('description')
  const [qty, setQty] = useState(1)

  const getSingleProduct = async () => {
    setLoading(true)
    setError(false)
    try {
      const result = await axios.get(`https://dummyjson.com/products/${id}`)
      setSingleProduct(result.data)
      setQty(result.data.minimumOrderQuantity || 1)
      setActiveImg(0)
    } catch (err) {
      console.log(err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getSingleProduct()
  }, [id])

  const avgFromReviews = useMemo(() => {
    if (!singleProduct) return 0
    return singleProduct.reviews?.length
      ? singleProduct.reviews.reduce((s, r) => s + r.rating, 0) / singleProduct.reviews.length
      : singleProduct.rating
  }, [singleProduct])

  if (loading) return <DetailSkeleton />

  if (error || !singleProduct) {
    return (
      <div className="min-h-[60vh] bg-[#FAF6F1] flex flex-col items-center justify-center text-center px-4">
        <p className="font-['Playfair_Display'] italic text-xl text-[#3B2A2E] mb-2">
          We couldn't load this product
        </p>
        <p className="font-['Inter'] text-sm text-[#8B7D80] mb-4">
          Something went wrong fetching it — try again.
        </p>
        <div className="flex gap-3">
          <button
            onClick={getSingleProduct}
            className="text-sm font-['Inter'] font-medium bg-[#3B2A2E] text-white px-5 py-2.5 rounded-full hover:bg-[#B76E79] transition-colors"
          >
            Retry
          </button>
          <button
            onClick={() => navigate('/shop')}
            className="text-sm font-['Inter'] text-[#B76E79] underline underline-offset-4"
          >
            Back to shop
          </button>
        </div>
      </div>
    )
  }

  const images = singleProduct.images?.length ? singleProduct.images : [singleProduct.thumbnail]
  const discounted = singleProduct.price * (1 - singleProduct.discountPercentage / 100)
  const outOfStock = singleProduct.stock === 0
  const lowStock = singleProduct.stock > 0 && singleProduct.stock <= 10
  const min = singleProduct.minimumOrderQuantity || 1

  const nextImg = () => setActiveImg((i) => (i + 1) % images.length)
  const prevImg = () => setActiveImg((i) => (i - 1 + images.length) % images.length)

  return (
    <div className="bg-[#FAF6F1] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.button
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/shop')}
          className="flex items-center gap-1.5 text-[13px] font-['Inter'] text-[#8B7D80] hover:text-[#3B2A2E] transition-colors mb-6 sm:mb-8"
        >
          <FiChevronLeft size={14} />
          Back to collection
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* ── gallery ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-[#EFE6E0]">
              <div className="absolute top-0 left-0 right-0 h-[3px] z-10 bg-gradient-to-r from-transparent via-[#D4AF8C] to-transparent" />

              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={images[activeImg]}
                  alt={singleProduct.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {singleProduct.discountPercentage > 0 && (
                <span className="absolute top-4 left-4 rounded-full bg-[#3B2A2E] text-white text-[11px] font-medium tracking-wide px-2.5 py-1 z-10">
                  -{Math.round(singleProduct.discountPercentage)}%
                </span>
              )}

              <motion.button
                onClick={() => setWishlisted((w) => !w)}
                whileTap={{ scale: 0.8 }}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm"
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
                      <FaHeart size={15} className="text-[#B76E79]" />
                    ) : (
                      <FaRegHeart size={15} className="text-[#3B2A2E]" />
                    )}
                  </motion.span>
                </AnimatePresence>
              </motion.button>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm hover:bg-white"
                  >
                    <FiChevronLeft size={15} className="text-[#3B2A2E]" />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm hover:bg-white"
                  >
                    <FiChevronRight size={15} className="text-[#3B2A2E]" />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-3 mt-4">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImg === i ? 'border-[#B76E79]' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* ── details ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#B76E79] font-['Inter'] font-medium mb-2">
              {singleProduct.brand} · {singleProduct.category}
            </p>

            <h1 className="font-['Playfair_Display'] italic text-3xl sm:text-[40px] leading-tight text-[#3B2A2E] mb-3">
              {singleProduct.title}
            </h1>

            <div className="flex items-center gap-2.5 mb-5">
              <RatingStars rating={avgFromReviews} size={13} />
              <span className="text-[13px] font-['Inter'] text-[#8B7D80]">
                {avgFromReviews.toFixed(1)} ({singleProduct.reviews?.length || 0} reviews)
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-['Inter'] text-3xl font-semibold text-[#3B2A2E]">
                ${discounted.toFixed(2)}
              </span>
              {singleProduct.discountPercentage > 0 && (
                <span className="font-['Inter'] text-base text-[#8B7D80] line-through">
                  ${singleProduct.price.toFixed(2)}
                </span>
              )}
            </div>

            <p className="font-['Inter'] text-[15px] leading-relaxed text-[#6B5B5F] mb-6">
              {singleProduct.description}
            </p>

            <div className="mb-6">
              {outOfStock ? (
                <span className="inline-flex items-center gap-1.5 text-[13px] font-['Inter'] text-[#8B7D80]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7D80]" />
                  Out of stock
                </span>
              ) : lowStock ? (
                <span className="inline-flex items-center gap-1.5 text-[13px] font-['Inter'] text-[#B76E79]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B76E79]" />
                  Only {singleProduct.stock} left in stock
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-[13px] font-['Inter'] text-[#6B9080]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6B9080]" />
                  In stock
                </span>
              )}
            </div>

            {!outOfStock && (
              <div className="flex items-stretch gap-3 mb-6">
                <div className="flex items-center border border-[#EFE6E0] rounded-full overflow-hidden">
                  <button
                    onClick={() => setQty((q) => Math.max(min, q - 1))}
                    className="w-11 h-11 flex items-center justify-center text-[#3B2A2E] hover:bg-[#FAF6F1] transition-colors"
                  >
                    <FiMinus size={14} />
                  </button>
                  <span className="w-10 text-center font-['Inter'] text-sm text-[#3B2A2E]">{qty}</span>
                  <button
                    onClick={() => setQty((q) => Math.min(singleProduct.stock, q + 1))}
                    className="w-11 h-11 flex items-center justify-center text-[#3B2A2E] hover:bg-[#FAF6F1] transition-colors"
                  >
                    <FiPlus size={14} />
                  </button>
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => addToCartFun({ ...singleProduct, quantity: qty })}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#3B2A2E] hover:bg-[#B76E79] text-white font-['Inter'] font-medium text-sm rounded-full transition-colors"
                >
                  <FiShoppingBag size={16} />
                  Add to Bag
                </motion.button>
              </div>
            )}

            {singleProduct.minimumOrderQuantity > 1 && (
              <p className="text-[12px] font-['Inter'] text-[#8B7D80] mb-6 -mt-3">
                Minimum order quantity: {singleProduct.minimumOrderQuantity}
              </p>
            )}

            <div className="grid grid-cols-3 gap-3 py-5 border-y border-[#EFE6E0] mb-6">
              <div className="flex flex-col items-center text-center gap-1.5">
                <FiTruck size={17} className="text-[#B76E79]" />
                <span className="text-[11px] font-['Inter'] text-[#6B5B5F] leading-tight">
                  {singleProduct.shippingInformation}
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5 border-x border-[#EFE6E0] px-2">
                <FiShield size={17} className="text-[#B76E79]" />
                <span className="text-[11px] font-['Inter'] text-[#6B5B5F] leading-tight">
                  {singleProduct.warrantyInformation}
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <FiRotateCcw size={17} className="text-[#B76E79]" />
                <span className="text-[11px] font-['Inter'] text-[#6B5B5F] leading-tight">
                  {singleProduct.returnPolicy}
                </span>
              </div>
            </div>

            <div>
              <div className="flex gap-6 border-b border-[#EFE6E0] mb-5">
                {['description', 'reviews'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`relative pb-3 text-sm font-['Inter'] font-medium capitalize transition-colors ${
                      tab === t ? 'text-[#3B2A2E]' : 'text-[#8B7D80]'
                    }`}
                  >
                    {t === 'reviews' ? `Reviews (${singleProduct.reviews?.length || 0})` : t}
                    {tab === t && (
                      <motion.div
                        layoutId="tab-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B76E79]"
                      />
                    )}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {tab === 'description' ? (
                  <motion.div
                    key="description"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="font-['Inter'] text-sm text-[#6B5B5F] leading-relaxed space-y-2"
                  >
                    <p>{singleProduct.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {singleProduct.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] uppercase tracking-wide bg-[#F6EFEA] text-[#B76E79] px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="reviews"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {singleProduct.reviews?.length ? (
                      singleProduct.reviews.map((review, i) => (
                        <div key={i} className="pb-4 border-b border-[#EFE6E0] last:border-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-['Inter'] text-sm font-medium text-[#3B2A2E]">
                              {review.reviewerName}
                            </span>
                            <span className="text-[11px] font-['Inter'] text-[#8B7D80]">
                              {formatDate(review.date)}
                            </span>
                          </div>
                          <RatingStars rating={review.rating} size={11} />
                          <p className="font-['Inter'] text-sm text-[#6B5B5F] mt-1.5">
                            {review.comment}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="font-['Inter'] text-sm text-[#8B7D80]">No reviews yet.</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails