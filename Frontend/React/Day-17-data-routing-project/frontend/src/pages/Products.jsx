
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { axiosInstance } from '../config/axiosInstance';

const Products = () => { 

    let [products , setProducts] = useState([])
    let [isLoading , setIsLoading] = useState(true)

    const getProductsData = async () => { 

        try { 
            let result = await axiosInstance.get('/products')
            console.log(result.data);
            setProducts(result.data);
            setIsLoading(false);
        } catch (error) {
            console.log('Error' , error); 
        }
        
    }

useEffect(()=>{
     getProductsData()
},[])

if(isLoading) return <h1 className=' text-4xl text-red-500'> Loading Products... </h1>

  return (
    <div className=' grid grid-cols-4 gap-5'>
         {
            products.map((product)=> 

            <ProductCard 
             key={product.id }
             product={product}

            /> )

         }
    </div> 
  )
}

export default Products