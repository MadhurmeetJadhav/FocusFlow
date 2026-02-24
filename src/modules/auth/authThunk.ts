import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/authService";
import { clearToken, getToken, saveToken } from "../../utils/secureStorage";

export const loginThunk = createAsyncThunk(
    'auth/login',
    async({email,password}:{email:string,password:string},thunkAPI)=>{
        try {
            
            const loginResponse = await login(email,password)
            await saveToken(loginResponse.token)
            return loginResponse

        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!')
        }
    }
)

export const logOutThunk = createAsyncThunk(
    'auth/logOut',
    async(_,thunkAPI)=>{
        try {
            await clearToken()
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!')
        }
    }
)

export const checkAuthTHunk = createAsyncThunk(
    'auth/checkAuth',
    async(_,thunkAPI)=>{
        try {
            const token = await getToken()
            if(token){
                const user = { id: '1', name: 'Test User', email: 'test@test.com' }
                return { user, token }
            }
            return null
            
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!')
        }
    }
)