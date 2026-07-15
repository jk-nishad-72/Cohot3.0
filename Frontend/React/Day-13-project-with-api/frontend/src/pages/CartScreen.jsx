import React, { useState } from "react";
import { useContext } from "react";
import { MyStoreContext } from "../context/MyContext";
import { MyShopPracticeContext } from "../context/MyPracticeContext";

const CartScreen = () => {


   let{ carts , increment , decrement } = useContext(MyShopPracticeContext)

  
  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md">

      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

      {carts.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          No items in cart
        </p>
      ) : (
        <div className="space-y-6">

          {carts.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 border-b pb-4"
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />

              {/* Info */}
              <div className="flex-1">
                <h2 className="font-semibold line-clamp-2">
                  {item.title}
                </h2>

                <p className="text-blue-600 font-bold mt-2">
                  ₹ {item.price}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">

                <button
                
               onClick={()=>decrement(item.id)}

                   
                  className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                >
                  −
                </button>

                <span className="font-semibold text-lg">
                  {item.qty}
                </span>

                <button
               
               onClick={()=>increment(item.id)}
                  className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                >
                  +
                </button>

              </div>

            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between pt-6 border-t text-xl font-bold">
            <span>Total:</span>
            <span className="text-green-600">
              ₹{" "}
              {carts
                .reduce((acc, item) => acc + item.price * item.qty, 0)
                .toFixed(2)}
            </span>
          </div>

        </div>
      )}
    </div>
  );
};

export default CartScreen;