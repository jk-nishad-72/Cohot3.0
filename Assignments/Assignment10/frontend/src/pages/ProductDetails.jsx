import axios from 'axios'
import React, { useContext, useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useParams, useNavigate } from 'react-router'
import { FiShoppingBag, FiArrowLeft, FiMinus, FiPlus, FiPlus as FiExpand } from 'react-icons/fi'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'
import { MyShopStoreContext } from '../context/MyContext'

const PALETTE = ['#F6D875', '#F2A15C', '#8FC7B8', '#F2A9C4', '#9BC4EA', '#C7B8ED'] 

const initials = (name) => name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase()

const RatingStars = ({ rating, size = 12 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} size={size} className={i < Math.round(rating) ? 'text-[#141414]' : 'text-[#E5E3DD]'} />
    ))}
  </div>
)

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

const AccordionRow = ({ label, content, open, onToggle }) => (
  <div className="border-b border-[#E5E3DD] py-4">
    <button onClick={onToggle} className="w-full flex items-center justify-between text-left">
      <span className="text-[15px] font-medium text-[#141414]">{label}</span>
      <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
        <FiExpand size={16} className="text-[#141414]" />
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <p className="text-[13px] text-[#8A8A85] leading-relaxed pt-2 pr-6">{content}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

const DetailSkeleton = () => (
  <div className="bg-[#FAFAF9] min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="h-8 w-8 bg-[#F0EFEA] rounded-full mb-8 animate-pulse" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="aspect-square rounded-3xl bg-[#F0EFEA] animate-pulse" />
        <div className="space-y-4">
          <div className="h-3 w-28 bg-[#F0EFEA] rounded-full animate-pulse" />
          <div className="h-10 w-3/4 bg-[#F0EFEA] rounded-lg animate-pulse" />
          <div className="h-4 w-36 bg-[#F0EFEA] rounded-full animate-pulse" />
          <div className="h-24 w-full bg-[#F0EFEA] rounded-lg animate-pulse" />
          <div className="h-12 w-full bg-[#F0EFEA] rounded-full animate-pulse" />
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
  const [qty, setQty] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')

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

  useEffect(() => { getSingleProduct() }, [id])

  const avgFromReviews = useMemo(() => {
    if (!singleProduct) return 0
    return singleProduct.reviews?.length
      ? singleProduct.reviews.reduce((s, r) => s + r.rating, 0) / singleProduct.reviews.length
      : singleProduct.rating
  }, [singleProduct])

  if (loading) return <DetailSkeleton />

  if (error || !singleProduct) {
    return (
      <div className="min-h-[60vh] bg-[#FAFAF9] flex flex-col items-center justify-center text-center px-4">
        <p className="text-xl font-semibold text-[#141414] mb-2">We couldn't load this product</p>
        <p className="text-sm text-[#8A8A85] mb-5">Something went wrong fetching it — try again.</p>
        <div className="flex gap-3">
          <button onClick={getSingleProduct} className="text-sm font-medium bg-[#141414] text-white px-5 py-2.5 rounded-full">
            Retry
          </button>
          <button onClick={() => navigate('/shop')} className="text-sm font-medium text-[#141414] underline underline-offset-4">
            Back to shop
          </button>
        </div>
      </div>
    )
  }

  const images = singleProduct.images?.length ? singleProduct.images : [singleProduct.thumbnail]
  const discounted = singleProduct.price * (1 - singleProduct.discountPercentage / 100)
  const outOfStock = singleProduct.stock === 0
  const min = singleProduct.minimumOrderQuantity || 1
  const bg = PALETTE[singleProduct.id % PALETTE.length]

  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => navigate('/shop')}
          className="w-9 h-9 rounded-full border border-[#E5E3DD] flex items-center justify-center mb-8 sm:mb-10 hover:bg-[#141414] hover:text-white hover:border-[#141414] transition-colors"
        >
          <FiArrowLeft size={15} />
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* gallery */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="relative aspect-square rounded-3xl overflow-hidden" style={{ backgroundColor: bg }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={images[activeImg]}
                  alt={singleProduct.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full object-contain p-12"
                />
              </AnimatePresence>

              <motion.button
                onClick={() => setWishlisted((w) => !w)}
                whileTap={{ scale: 0.8 }}
                className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/85 backdrop-blur flex items-center justify-center"
              >
                {wishlisted ? <FaHeart size={14} className="text-[#141414]" /> : <FaRegHeart size={14} className="text-[#141414]" />}
              </motion.button>

              {singleProduct.discountPercentage > 0 && (
                <span className="absolute top-4 right-4 rounded-full bg-[#141414] text-white text-[11px] font-medium px-3 py-1.5">
                  -{Math.round(singleProduct.discountPercentage)}%
                </span>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-3 mt-4">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-16 h-16 rounded-2xl overflow-hidden border-2 transition-colors ${
                      activeImg === i ? 'border-[#141414]' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: bg }}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain p-2" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* details */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <span className="inline-block text-[12px] font-medium bg-[#F0EFEA] text-[#141414] rounded-full px-3 py-1 mb-4 capitalize">
              {singleProduct.brand} · {singleProduct.category}
            </span>

            <h1 className="text-3xl sm:text-[40px] font-semibold text-[#141414] tracking-tight leading-tight mb-3">
              {singleProduct.title}
            </h1>

            <div className="flex items-center gap-2 mb-5">
              <RatingStars rating={avgFromReviews} />
              <span className="text-[13px] text-[#8A8A85]">
                {avgFromReviews.toFixed(1)} ({singleProduct.reviews?.length || 0} reviews)
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-semibold text-[#141414]">${discounted.toFixed(2)}</span>
              {singleProduct.discountPercentage > 0 && (
                <span className="text-base text-[#B5B2AA] line-through">${singleProduct.price.toFixed(2)}</span>
              )}
            </div>

            <div className="mb-6">
              <span className={`inline-flex items-center gap-1.5 text-[13px] font-medium ${outOfStock ? 'text-[#8A8A85]' : 'text-[#141414]'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${outOfStock ? 'bg-[#8A8A85]' : 'bg-[#3EA56C]'}`} />
                {outOfStock ? 'Out of stock' : `In stock — ${singleProduct.stock} available`}
              </span>
            </div>

            {!outOfStock && (
              <div className="flex items-stretch gap-3 mb-8">
                <div className="flex items-center border border-[#E5E3DD] rounded-full overflow-hidden">
                  <button onClick={() => setQty((q) => Math.max(min, q - 1))} className="w-11 h-11 flex items-center justify-center text-[#141414] hover:bg-[#F0EFEA]">
                    <FiMinus size={14} />
                  </button>
                  <span className="w-10 text-center text-sm text-[#141414]">{qty}</span>
                  <button onClick={() => setQty((q) => Math.min(singleProduct.stock, q + 1))} className="w-11 h-11 flex items-center justify-center text-[#141414] hover:bg-[#F0EFEA]">
                    <FiPlus size={14} />
                  </button>
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => addToCartFun({ ...singleProduct, quantity: qty })}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#141414] hover:bg-[#2B2B2B] text-white font-medium text-sm rounded-full transition-colors"
                >
                  <FiShoppingBag size={16} /> Add to Bag
                </motion.button>
              </div>
            )}

            {/* accordion, mirrors the "Why Choose Us" +/- pattern */}
            <div>
              <AccordionRow
                label="Description"
                content={singleProduct.description}
                open={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              />
              <AccordionRow
                label="Shipping"
                content={singleProduct.shippingInformation}
                open={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              />
              <AccordionRow
                label="Returns & Warranty"
                content={`${singleProduct.returnPolicy}. ${singleProduct.warrantyInformation}.`}
                open={openAccordion === 'returns'}
                onToggle={() => setOpenAccordion(openAccordion === 'returns' ? null : 'returns')}
              />
            </div>
          </motion.div>
        </div>

        {/* reviews, styled like the "Our happy clients" testimonial cards */}
        {singleProduct.reviews?.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <h2 className="text-2xl font-semibold text-[#141414] tracking-tight mb-6">What people are saying</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {singleProduct.reviews.map((review, i) => (
                <div key={i} className="bg-white rounded-3xl p-5 border border-[#EFEDE7]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-semibold text-[#141414]"
                        style={{ backgroundColor: PALETTE[i % PALETTE.length] }}
                      >
                        {initials(review.reviewerName)}
                      </div>
                      <div>
                        <p className="text-[13px] font-medium text-[#141414]">{review.reviewerName}</p>
                        <p className="text-[11px] text-[#8A8A85]">{formatDate(review.date)}</p>
                      </div>
                    </div>
                    <RatingStars rating={review.rating} size={10} />
                  </div>
                  <p className="text-[13px] text-[#6B6B66] leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetails