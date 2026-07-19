
import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';
import { MyShopStoreContext } from '../context/MyContext';

const ProductDetails = () => {

    const [singleProduct , setSingleProduct] = useState({})

    let {id} = useParams()
    
const getSingleProduct  = async () => {

     
        try {
    
            let result = await axios.get(`https://dummyjson.com/products/${id}`) // for dynamic data routing 
            // console.log(result.data);
            setSingleProduct(result.data)

        } catch (error) {

            console.log(error);
           
        }
        
    }
     
      

useEffect(()=>{
    getSingleProduct()
},[])

  return (
    <div> 
        {singleProduct.title}

        {
        singleProduct.images?.map((img ,idx)=> <img src={img} key={idx} alt={singleProduct?.title} /> )   
        }
    </div>
  )
}

export default ProductDetails