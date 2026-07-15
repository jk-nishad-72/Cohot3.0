import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartScreen from "./pages/CartScreen";
  import { ToastContainer, toast } from 'react-toastify';
import { useContext } from "react";
import { MyStoreContext } from "./context/MyContext";
import { MyShopPracticeContext } from "./context/MyPracticeContext";

const App = () => {


  let {toggle ,carts , setCarts} = useContext(MyShopPracticeContext)

   const [products  , setProducts] = useState([] )
  


   
   const getProductData = async () => {

     try {

        let result = await axios.get('https://fakestoreapi.com/products')

    
        setProducts(result.data)
        
      
     } catch (error) {
      
            console.log('Product Error ' , error);
            
     }
    
   }

 useEffect(()=>{
  getProductData()
 },[])


  return (
    <div className="bg-gray-100 min-h-screen relative ">

      <ToastContainer className="z-50 top-0 left-50" autoClose={1000} theme="light"  />
      

      {/* Navbar */}
      <Navbar  />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">

        {toggle ? (
          <>
            {/* Heading */}
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              🛍️ Explore Products
            </h1>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 

              {
                 products.map((product) =>{

                  let isProductExistInCart = carts.find((item)=> item.id === product.id)

                   return <  ProductCard key={product.id}  product = {product} isProductExistInCart = {isProductExistInCart}  />
                 })

              }
              
            </div>
          </>
        ) : (
    
          <CartScreen  />
        )}

      </div>
    </div>
  );
};

export default App;