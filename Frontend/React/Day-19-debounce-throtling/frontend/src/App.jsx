import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

   const [products , setProducts] = useState([])
   const [searchDAta , setSearchDAta] = useState(null)


   const getData = async () => {

    try {
      
      const result = await axios.get('https://fakestoreapi.com/products') 
      setProducts(result.data)

    } catch (error) {
      
      console.log(error);
      
    }
    
   }


    const filterData = ()=>{

       console.log('filter is render...');
       
      const arr = products.filter((val)=>{
        return val.title.toLowerCase().includes(searchDAta)
      })
      console.log(arr);
      setProducts(arr)
      
    }

  //  // debouncing...

  //  useEffect(()=>{

  //   if(!searchDAta) return
     
  //    const Id = setTimeout(()=>{
  //    filterData()
  //    },1000)
  //   return ()=>{clearTimeout(Id)}

  //  } , [searchDAta]) 
   

  // throtling...
  useEffect(()=>{
    
    if(!searchDAta) return 


    const Id = setTimeout(() => {
      filterData()
    }, 3000) 
    
     return ()=>{
      clearTimeout(Id)
     }

  },[searchDAta])

   
   useEffect(()=>{
    getData()
   } , []) 
  return (
    <div>

       <h1>Products List</h1>

        <input

        onChange={(e)=>{setSearchDAta(e.target.value)}}
         type="text" 
         placeholder='search'
         className='p-4  border '
          />

       {products.map((product) => {
        return (
          <div key={product.id}>
            {/* <img src={product.image} alt="" /> */}
            <p>{product.title}</p>
           
          </div>
        )
       })}

    </div>
  )
}

export default App