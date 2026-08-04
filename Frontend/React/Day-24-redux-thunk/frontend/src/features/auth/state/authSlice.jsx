import { createSlice } from "@reduxjs/toolkit";
import { hydrationAction, loginUserAction } from "./authOuterAction";


const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:null,
        isAuthenticated:false,
        isLoading:true,

    },
    // reducers:{
    //     addUser:(state , action)=>{
    //         state.user = action.payload
    //         state.isAuthenticated = true
    //         state.isLoading = false

    //     },
    //     removeUser:(state)=>{
    //         state.user = null
    //         state.isAuthenticated = false;
    //         state.isLoading = false
    //     }
    // },

    extraReducers:(builder)=>{


        // handle 3 case of api pending fullfiled ,rejected 
        builder
        .addCase(loginUserAction.pending, (state , action )=>{

             state.isLoading = true


        })
        .addCase(loginUserAction.fulfilled, (state , action )=>{

            state.user = action.payload
            state.isAuthenticated = true
            state.isLoading = false

        })
        .addCase(loginUserAction.rejected, (state , action )=>{

            state.isLoading = false

        })
        .addCase(hydrationAction.pending, (state , action )=>{

            state.isLoading = true


       })
       .addCase(hydrationAction.fulfilled, (state , action )=>{

           state.user = action.payload
           state.isAuthenticated = true
           state.isLoading = false

       })
       .addCase(hydrationAction.rejected, (state , action )=>{

           state.isLoading = false

       })

    }
})

export const {addUser , removeUser} = authSlice.actions;

export default authSlice.reducer