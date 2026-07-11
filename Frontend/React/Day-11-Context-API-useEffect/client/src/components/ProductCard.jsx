import React from "react";
import { useContext } from "react";
import { MyShopStore2 } from "../context/MyShopContext2";
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({  product }) => {

  let {setCart}  = useContext(MyShopStore2)


  

  const addedToCart = ()=> toast.success(`Item Added to Cart!`)


 const handleAddCart = ( )=>{


  setCart(prev => {
     
        let existingCart  = prev.find(element =>  element.id == product.id);

    
        // not existing cart 
        if(!existingCart){
          return [...prev , {...product , count:1}]
        }
        
      // if  existing cart 

      return prev.map(item => {

        return item.id === product.id ? {...item , count: item.count+1} : item

        /* or 
        if(item.id === product.id){
          return {...item , count:item.count+1}
        }

        return item  */ 
      })

      
          
  })
  addedToCart()
}

     return (
    <div className="bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      {/* Image */}
      <div className="h-52 bg-white flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">

        {/* Title */}
        <h2 className="text-lg font-semibold line-clamp-2">
          {product.title}
        </h2>

        {/* Category */}
        <p className="text-sm text-gray-400 capitalize">
          {product.category}
        </p>

        {/* Price */}
        <p className="text-xl font-bold text-green-400">
          ₹ {product.price}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-400">⭐ {product.rating.rate}</span>
          <span className="text-gray-400 text-sm">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Button */}
        <button 

        onClick={handleAddCart}
        className="w-full mt-3 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium cursor-pointer">
          Add to Cart
        </button>

        

        </div> 


    </div>
  );
};

export default ProductCard;