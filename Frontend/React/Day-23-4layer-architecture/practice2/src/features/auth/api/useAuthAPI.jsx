import { api } from "../../../config/api";


export const loginAPI = async (credentials)=>{

    try {
         const res = await api.post("/auth/login",credentials)
         console.log('login api response ',res.data.accessToken);
         localStorage.setItem('token',res.data.accessToken)
         return res.data
         
    } catch (error) {
        console.log('login api error',error);  
    }

}

export const hydrateAPI = async ()=>{
  
     let token = localStorage.getItem('token')
    //  console.log(token);
     
    try {

         let res = await api.get("/auth/me",{
            headers: {
                Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
              }, 
         })
        
        console.log('hydration api error' , res);

        return res.data

    } catch (error) {

        console.log('hydration api error' , error);
        
        
    }

}

