import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/state/authSlice.jsx"
import themReducer from "../shared/state/themeSlice.jsx"

export const store = configureStore({
    reducer:{
        auth:authReducer,
        theme:themReducer,
    }
})