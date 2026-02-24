import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";
import { checkAuthTHunk, logOutThunk, loginThunk } from "./authThunk";

const initialState:AuthState={
    status:'checking',
    token: null,
    user: undefined
}


const authSlice =createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(loginThunk.pending,(state)=>{
            state.status='loading'
        })
        .addCase(loginThunk.fulfilled,(state,action)=>{
            state.status='authenticated'
            state.token =action.payload.token
            state.user = action.payload.user
        })
        .addCase(loginThunk.rejected,(state)=>{
            state.status='unauthenticated'
            state.token = null
            state.user = undefined
        })
        .addCase(logOutThunk.fulfilled,(state)=>{
            state.status='unauthenticated'
            state.token = null
            state.user = undefined
        })
        .addCase(checkAuthTHunk.fulfilled,(state,action)=>{
           if(action.payload){
            state.status='authenticated'
            state.token =action.payload?.token
            state.user = action.payload?.user
           }else{
            state.status='unauthenticated'
            state.token =null
            state.user = undefined
           }
        })
    }
})


export const authReducer = authSlice.reducer