
import React, { useContext } from 'react'
import { MyShopStoreContext } from '../context/MyContext.jsx'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'


const Shop = () => {

 let {products , setProducts ,}   =  useContext(MyShopStoreContext)

   const navigate = useNavigate();

   console.log(products[0]); 
   

  
  return (
    <div>Shop 

    {
        products.map((val , index)=>{
            return (

                <div onClick={()=> navigate(`/product/${val.id}`)} key={index} className= ' cursor-pointer border p-4 border-green-500'> 
                 {val?.title} <br />

                {val.images.map((img ,idx)=> <img src={img} key={idx} alt={val?.title} /> )   }

                 
              
                </div>
            )
        })
    }
    </div>
  )
}

export default Shop