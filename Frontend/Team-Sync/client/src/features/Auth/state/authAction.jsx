import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstance } from "../../../config/axiosInstance.jsx"


// @Login Thunk Action 
export const loginEmployee = createAsyncThunk(

    "auth/login",
    async(credentials , thunkAPI)=>{
        try{

             console.log('login form data',credentials);
             
             let response = await axiosInstance.post("/auth/login" , credentials)
            
             console.log( 'Response -> ', response.data);

             return response.data
             
        }catch(err){ 

            console.log('login error',err);
            return thunkAPI.rejectWithValue(err)
        }
     }
    ) 

//  Get LoggedEmploye details

export const currentLoggedEmployee = createAsyncThunk(
    "auth/me",
    async (_,thunkAPI) => {

        try {
            let res = await axiosInstance.get("/auth/me") 
            return res.data
        } catch (error) {
            console.log("CurrentLoggedEmployee Function Error",error)
            return thunkAPI.rejectWithValue(error)            
        }
        
    }
)