import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice.jsx";
import userReducer from "../features/userSlice.jsx"; 

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        auth:userReducer,
    }
})
