import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: "https://team-sync-backend-n78w.onrender.com/api", //ye sara ke sara base url hain
  withCredentials: true, //Browser ko allow karo ke cross-origin request ke saath cookies bhi send kare.
})
 


// axiosInstace.interceptors.response.use((response)=>{
//     return response
// })