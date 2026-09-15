import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: "https://team-sync-backend-n78w.onrender.com/api", //ye sara ke sara base url hain
  withCredentials: true, //Browser ko allow karo ke cross-origin request ke saath cookies bhi send kare.
})
 


//handling accesstoken 
axiosInstance.interceptors.response.use(

        (response) => response,
   async (error)=>{

     
     let originRequest = error.config;
     
     if(error.response.status === 401 && !originRequest._retry){

       originRequest._retry = true;

       try {

          await axiosInstance.get("/auth/get-accesstoken")
          return axiosInstance(originRequest); 
        
       } catch (error) {
         window.Location.href = "/";
         return Promise.reject(error);
       }
     }

   }
)