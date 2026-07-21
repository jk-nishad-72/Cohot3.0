
import axios from "axios";


export const axiosInstance = axios.create({
    baseURL:'https://fakestoreapi.com/'
})

// Interceptors 


//1) request Interceptors 

// axiosInstance.interceptors.request.use(
//     ()=>{},
//     ()=>{}
// )


//2) response Interceptors  

axiosInstance.interceptors.response.use(
    // 2 callback Function 

    // 1) for response
    (response)=>{
        console.log("response Interceptor ->",response);
        
        // return is important 
    return response  
    },
    (error)=>{
        console.log(error);
        
    }
)
