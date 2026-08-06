import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthApi } from "../api/authApi";
import { api } from "../../../config/api";



export const loginUserAction = createAsyncThunk("/auth/login",
    async (credentials , thunkApi) => {

        try {

             let result = await api.post("/auth/login",credentials) 

             console.log('login action result' , result);
             
            return result
        } catch (error) {

            return thunkApi.fulfillWithValue('login failed')
        }
})