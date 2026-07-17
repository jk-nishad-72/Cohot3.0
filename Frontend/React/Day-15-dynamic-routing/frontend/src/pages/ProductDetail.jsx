
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetail = () => {

     const {id} = useParams();
     const [singleProduct , setSingleProduct] = useState({})
         

     const getSingleProduct = async () => {

       try {
        
        let result = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(result.data);
        
       } catch (error) {

        console.log(error);
    
       }
     }

useEffect(()=>{
    getSingleProduct()
},[])



  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail