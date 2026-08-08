import axios from "axios";


export  const getAllProducts = async  (limit  , pageParam)=>{
      try {
           let res = await  axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`)
           // console.log(res.data)

          return res.data
      }
      catch (error){
          console.log('products error',error)
      }

}