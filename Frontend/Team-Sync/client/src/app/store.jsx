import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/state/authSlice.jsx"
export const store = configureStore({
    reducer:{
        auth:authReducer
    }
})