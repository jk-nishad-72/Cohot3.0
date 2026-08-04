import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { api } from "../../../config/api";



export const loginUserAction = createAsyncThunk(
    "/auth/login",
    async (credentials, thunkApi) => {

        try {

                      console.log(credentials , 'Outer Action triggerd ')
                      const res = await api.post("/auth/login",credentials)
                    //   console.log('login api response ',res.data.accessToken);
                      localStorage.setItem('token',res.data.accessToken)
                      return res.data  
            
        } catch (error) {

             
            toast.error('Login Failed')

            return thunkApi.rejectWithValue('Login Failed ')
            
        }
    
})


export const hydrationAction = createAsyncThunk("/auth/me",
    async (_, thunkApi ) => {
     let token = localStorage.getItem('token')

      console.log('hydation triggered ');
      

        try {

             let res = await api.get('/auth/me',{
                headers: {
                    Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
                  }, 
             })

             return res.data
            
        } catch (error) {

            toast.error('Unauthrized user')

            return thunkApi.rejectWithValue('hydration failed ')
            
        }
    
})