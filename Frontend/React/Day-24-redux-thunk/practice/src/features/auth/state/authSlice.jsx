
import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction } from "./authOuterAction";
const authSlice = createSlice({

     name:'authSlice',
     initialState:{
        user:null,
        isAuth:false,
        isLoading:true,
     },

     extraReducers:(builder)=>{

         builder
         .addCase(loginUserAction.pending,(state , action)=>{
            state.isLoading=false

         }) 
         .addCase(loginUserAction.fulfilled,(state , action)=>{

           state.user = action.payload
            state.isAuth=true
            state.isLoading=false
            
         }) 
         .addCase(loginUserAction.rejected,(state , action)=>{
            state.isLoading=false
            
         }) 
     }

})

export default authSlice.reducer