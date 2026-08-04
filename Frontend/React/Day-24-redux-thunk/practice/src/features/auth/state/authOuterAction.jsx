
import { createAsyncThunk  } from "@reduxjs/toolkit";
import {  toast} from "react-toastify";
import { api } from "../../../config/api"; 

export const loginUserAction = createAsyncThunk("/auth/login",
    async (credentials , thunkApi) => {

        try {            
            console.log(`Login action trigger: ${credentials}`)

            let res = await api.get("/auth/login",credentials)
            
            console.log("action response", res.data);
            
            // localStorage.setItem('token',res.data)
            return res.data
        } catch (error) {

            toast.error('login api failed')
            return thunkApi.fulfillWithValue("Login api failed")
            
        }
        
    }
)