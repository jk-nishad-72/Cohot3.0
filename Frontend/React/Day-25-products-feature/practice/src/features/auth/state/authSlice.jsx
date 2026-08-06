import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction } from "./authOuterAction";


const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:null,
        isAuth:false,
        isLoading:true,
    },

    reducers:{
        
    }, 
    extraReducers:(builder)=>{

        builder
        .addCase(loginUserAction.pending , (state , action)=>{
            
           state.isLoading = true 
           state.isAuth = false 
           state.user = null
        }) 
        .addCase(loginUserAction.fulfilled , (state , action)=>{
            
            state.isLoading = false 
            state.isAuth = true 
            state.user = action.payload.data
        }) 
        .addCase(loginUserAction.rejected , (state , action)=>{

            state.isLoading = false 
            state.isAuth = false 
            state.user = null
        }) 

    }

})


export default authSlice.reducer