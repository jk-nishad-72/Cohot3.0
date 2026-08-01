
import { api } from "../../../config/api";

// because it is  async function it return a promises 

export const loginAPi = async (credentials) => {

    try {
         
         console.log('userdata' ,credentials);
         
         const  res = await api.post("/auth/login" , credentials) 

        //  console.log('loging response from dummy json' ,res.data.accessToken); 

        localStorage.setItem('token',res.data.accessToken)

         return res.data
          
    } catch (error) {
        
        console.log('login error from api' , error);
        
    }
    
}

// In refresing the web calling api server  to get logged in user  using accessToken [hydration]

export const hydrateUser = async () => { 

    // get the token 

    let token = localStorage.getItem('token') 

    if(!token) return 


    // console.log(token);
    
    try {
        
        const res = await api.get("/auth/me",{ 
            headers: {
                Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
              },
         })

        //  console.log(' logged IN UserData ' , res.data);

         return res.data
    } catch (error) {
        console.log('hydration error',error);
        
        
    }
    
}

