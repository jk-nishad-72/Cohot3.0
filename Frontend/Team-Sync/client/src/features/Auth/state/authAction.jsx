import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstace } from "../../../config/axiosInstance"



export const loginEmployee = createAsyncThunk(
    "auth/login",
    async(credentials , thunkAPI)=>{
        try{

             console.log('login form data',credentials);
             
             let response = await axiosInstace.post("/auth/login" , credentials)
            
             console.log( 'Response -> ', response.data);

             return response.data
             
        }catch(err){ 
            console.log('login error',err);
            return thunkAPI.rejectWithValue(err)
        }
     }
    ) 