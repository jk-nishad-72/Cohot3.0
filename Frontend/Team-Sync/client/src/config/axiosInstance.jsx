import axios from "axios";


export  const axiosInstace  = axios.create({
    baseURL:"https://api.team-sync.space/api",
    withCredentials:true,
})



// axiosInstace.interceptors.response.use((response)=>{
//     return response
// })