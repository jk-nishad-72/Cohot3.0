

import React from "react";
import { useContext } from "react";
  import { ToastContainer, toast } from 'react-toastify';
import { MyStoreContext } from "../context/MyContext";

const ProductCard = ({ product ,isProductExistInCart,  }) => {


    let {carts ,setCarts ,  increment , decrement} = useContext(MyStoreContext) 
     
const handleAddToCart = ()=>{
       
  setCarts(prev => [...prev , {...product , qty:1}])
     
  toast.success('Product Added To cart')
       
    }


  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition duration-300">

      {/* Image */}
      <div className="h-48 flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
        {product.title}
      </h2>

      {/* Price */}
      <p className="text-blue-600 font-bold text-xl mt-2">
        ₹ {product.price}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
        ⭐ {product.rating.rate}
        <span>({product.rating.count})</span>
      </div>

             {
                isProductExistInCart ?(
                    //   {/* Quantity Controls */}
              <div className="flex items-center justify-center gap-3 w-full mt-4  py-2 rounded-lg  cursor-pointer">

                <button
                
                       onClick={()=>decrement(product.id)}
                  className=" px-3 py-1 rounded  cursor-pointer hover:bg-blue-500 bg-gray-300"
                >
                  −
                </button>

                <span className="font-semibold text-lg">
                  {isProductExistInCart.qty}
                </span>

                <button
               
                  onClick={()=>increment(product.id)}

                  className=" px-3 py-1  rounded cursor-pointer hover:bg-blue-500 bg-gray-300"
                >
                  +
                </button>

              </div> 

                ):
                            
            //   {/* Button */}
                <button 

                onClick={handleAddToCart}
                className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer">
                    Add to Cart
                </button>
                            
             }

      

    </div>
  );
};

export default ProductCard;