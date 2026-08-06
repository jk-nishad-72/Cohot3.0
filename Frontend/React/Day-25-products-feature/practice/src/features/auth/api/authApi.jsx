import { api } from "../../../config/api";


export const AuthApi = async (credentials) => {

    try {

         let res = await api.post("/auth/login",credentials)

         console.log('Login api res', res.data);

         return res.data
    } catch (error) {
        console.log('login api error' , error);        
    }
}
