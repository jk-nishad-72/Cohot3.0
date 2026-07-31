
import { axiosInstance } from "../config/axiosInstance";


export const getProductsAPI = async () => {

    try {

         const result = await axiosInstance.get('/products')

          return result.data 
          
    } catch (error) {

        console.log('error' , error);
        
        
    }finally{

         console.log('hello') 
    }
    
}