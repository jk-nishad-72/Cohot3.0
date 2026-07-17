
import React from 'react'
import { useContext } from 'react'
import { MyStore } from './MyContext'
import { useNavigate } from 'react-router'

const ProductCard = () => {

    let {products} = useContext(MyStore)

          const navigate = useNavigate()
      
     

  return (

    <div>
         {
            products.map((val , index)=>(

                 <div 
                  key={index}
                  onClick={()=>{
                  navigate(`/details/${val.id}`)
                     
                  }}
                 
                   >
                    <img src={val.image} alt="" />
                 </div>
            ))
         }
    </div>
  )
}

export default ProductCard