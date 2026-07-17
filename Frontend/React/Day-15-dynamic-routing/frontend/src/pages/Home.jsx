
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { MyStore } from '../context/MyContext'
import axios from 'axios'
import ProductCard from '../context/ProductCard'


const Home = () => {
 
    let {products , setProducts}  = useContext(MyStore)

    const getData = async () => {

      try {
        
        let result =  await axios.get('https://fakestoreapi.com/products')

        // console.log(result.data);
        setProducts(result.data)
        
      } catch (error) {
         console.log(error);
        
      }
        
    }

useEffect(()=>{
    getData()
},[])

  return (
    <div>
         <ProductCard />
    </div>
  )
}

export default Home