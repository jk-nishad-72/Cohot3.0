import React, { useContext } from "react";
import { MyShopStore } from "../context/MyShopContext";

const Cart = () => {


  let {cart} = useContext(MyShopStore)
  // calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {/* Empty Cart */}
      { cart.length === 0 ? (
        <div className="text-center text-gray-400 mt-20">
          <p className="text-xl">Your cart is empty 😢</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">

          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-gray-800 rounded-lg p-4 shadow"
              >
                {/* Image */}
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 ml-4">
                  <h2 className="font-semibold line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-gray-400 text-sm">
                    ₹ {item.price}
                  </p>

                  {/* Quantity (static for now) */}
                  <div className="flex items-center gap-2 mt-2">
                    <button className="px-2 bg-gray-700 rounded">-</button>
                    <span>1</span>
                    <button className="px-2 bg-gray-700 rounded">+</button>
                  </div>
                </div>

                {/* Remove */}
                <button className="text-red-400 hover:text-red-600 ml-4">
                  Remove
                </button>
              </div>
            ))}

          </div>

          {/* Summary */}
          <div className="bg-gray-800 p-6 rounded-lg shadow h-fit">

            <h2 className="text-xl font-semibold mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between mb-2">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-bold text-green-400">
                ₹ {totalPrice.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg">
              Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;