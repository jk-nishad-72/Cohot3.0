import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag, FiArrowLeft } from 'react-icons/fi'
import { MyShopStoreContext } from '../context/MyContext'

const PALETTE = ['#F6D875', '#F2A15C', '#8FC7B8', '#F2A9C4', '#9BC4EA', '#C7B8ED']

const CartProducts = () => {
  const { uCart, setUCart ,handleClearCart  , incrementProductQuantity, decrementProductQuantity ,handleRemoveCart} = useContext(MyShopStoreContext)
  const navigate = useNavigate()

  const lineTotal = (p) => {
    const unit = p.price * (1 - (p.discountPercentage || 0) / 100)
    return unit * (p.quantity || 1)
  }

  // plain calculation — runs every render, no useMemo needed.
  // uCart is small (a handful of items) so this costs nothing noticeable.
  let subtotal = 0
  for (const p of uCart) {
    subtotal += lineTotal(p)
  }
  const shipping = uCart.length === 0 ? 0 : subtotal > 100 ? 0 : 8
  const total = subtotal + shipping




  // ── empty state ──────────────────────────────
  if (uCart.length === 0) {
    return (
      <div className="bg-[#FAFAF9] min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="w-16 h-16 rounded-full bg-[#F0EFEA] flex items-center justify-center mb-5">
          <FiShoppingBag size={22} className="text-[#141414]" />
        </div>
        <p className="text-xl font-semibold text-[#141414] mb-1">Your bag is empty</p>
        <p className="text-sm text-[#8A8A85] mb-6">Looks like you haven't added anything yet.</p>
        <button
          onClick={() => navigate('/shop')}
          className="bg-[#141414] hover:bg-[#2B2B2B] text-white text-sm font-medium rounded-full px-6 py-3 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    )
  }


  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/shop')}
              className="w-9 h-9 rounded-full border border-[#E5E3DD] flex items-center justify-center hover:bg-[#141414] hover:text-white hover:border-[#141414] transition-colors"
            >
              <FiArrowLeft size={15} /> 
            </button>

            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-[#141414] tracking-tight">Your Bag</h1>
              <p className="text-[13px] text-[#8A8A85]">{uCart.length} item{uCart.length > 1 ? 's' : ''}</p>
            </div>
          </div>

          <button
            onClick={handleClearCart} 
            className="text-[13px] font-medium text-[#8A8A85] hover:text-[#141414] transition-colors cursor-pointer border border-[#E5E3DD] rounded-full px-3 py-2 "
          >
            Clear cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* item list */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {uCart.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -24, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-4 bg-white rounded-3xl p-4 border border-[#EFEDE7]"
                >
                  <div
                    className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-2xl overflow-hidden flex items-center justify-center"
                    style={{ backgroundColor: PALETTE[i % PALETTE.length] }}
                  >
                    <img src={p.images?.[0] || p.thumbnail} alt={p.title} className="w-full h-full object-contain p-3" />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        {p.brand && (
                          <p className="text-[11px] uppercase tracking-wide text-[#8A8A85] mb-0.5">{p.brand}</p>
                        )}
                        <h2 className="text-[15px] font-medium text-[#141414] truncate">{p.title}</h2>
                      </div>
                      <button
                        onClick={() => handleRemoveCart(p.id)} 
                        className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-[#8A8A85] hover:bg-[#F0EFEA] hover:text-[#141414] transition-colors"
                      >
                        <FiTrash2 size={14} /> 
                      </button>
                    </div>

                    <div className="flex items-end justify-between mt-2">
                      <div className="flex items-center border border-[#E5E3DD] rounded-full overflow-hidden">
                        <button
                          onClick={() => decrementProductQuantity(p.id)}
                          className="w-8 h-8 flex items-center justify-center text-[#141414] hover:bg-[#F0EFEA]"
                        >
                          <FiMinus size={12} /> 
                        </button>
                        <span className="w-8 text-center text-[13px] text-[#141414]">{p.quantity}</span>
                        <button
                          onClick={() => incrementProductQuantity(p.id)} 
                          className="w-8 h-8 flex items-center justify-center text-[#141414] hover:bg-[#F0EFEA]"
                        >
                          <FiPlus size={12} />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-[15px] font-semibold text-[#141414]">${lineTotal(p).toFixed(2)}</p>
                        {p.discountPercentage > 0 && (
                          <p className="text-[11px] text-[#B5B2AA] line-through">
                            ${(p.price * (p.quantity || 1)).toFixed(2)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* order summary */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:sticky lg:top-8 h-fit bg-white rounded-3xl border border-[#EFEDE7] p-6"
          >
            <h3 className="text-[15px] font-semibold text-[#141414] mb-5">Order Summary</h3>

            <div className="space-y-3 mb-5">
              <div className="flex justify-between text-[13px]">
                <span className="text-[#8A8A85]">Subtotal</span>
                <span className="text-[#141414] font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-[#8A8A85]">Shipping</span>
                <span className="text-[#141414] font-medium">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-[11px] text-[#8A8A85]">
                  Add ${(100 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}
            </div>

            <div className="flex justify-between items-baseline pt-4 border-t border-[#EFEDE7] mb-6">
              <span className="text-[14px] font-medium text-[#141414]">Total</span>
              <span className="text-xl font-semibold text-[#141414]">${total.toFixed(2)}</span>
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => toast.success(' Product Succesfully Ordered ')}
              className="w-full flex items-center justify-center gap-2 bg-[#141414] hover:bg-[#2B2B2B] text-white font-medium text-sm rounded-full py-3.5 transition-colors"
            >
              Checkout
            </motion.button>

            <button
              onClick={() => navigate('/shop')}
              className="w-full text-center text-[13px] text-[#8A8A85] hover:text-[#141414] mt-4 transition-colors"
            >
              Continue Shopping
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CartProducts 