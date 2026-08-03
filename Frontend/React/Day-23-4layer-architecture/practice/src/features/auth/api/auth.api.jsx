
import { api } from "../../../config/api";



export const loginApi = async (credentials) => {

     
    try {

         let res = await api.post("/auth/login",credentials)
        //  console.log('Login api response' , res.data);
         localStorage.setItem('token',res.data.accessToken)
         return res.data 
    } catch (error) {

        console.log('Login Api error', error);
        
        
    }
    
}

export const hydrationApi = async () => {

    let token =   localStorage.getItem('token')
       
     
    try {

         let res = await api.get("/auth/me",{
            headers: {
                Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
              }, 
         })
         console.log('hydation api response' , res.data);
         return res.data 
    } catch (error) {

        console.log('hydation Api error', error);
        
        
    }
    
}