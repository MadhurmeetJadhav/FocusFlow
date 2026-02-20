import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMessage } from "../../services/labServices";

export const fetchMessage = createAsyncThunk(
    'lab/fetchMessage',
    async(_, thunkAPI)=>{
        try {
            const message =await getMessage()
            return message
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!')
        }
    }
)

const labSlice = createSlice({
    name:'lab',
    initialState:{
        data: null as string | null,
        status: 'idle' as 'idle' | 'loading' | 'success' | 'error',
        error: null as string | null,
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchMessage.pending,(state)=>{
            state.status = 'loading'
            console.log('🔄 PENDING');
            state.data = null
            state.error = null

            
        })
        .addCase(fetchMessage.fulfilled,(state,action)=>{
            state.status = 'success'
            state.data = action.payload
            state.error = null
            console.log('✅ FULFILLED', action.payload);
        })
        .addCase(fetchMessage.rejected,(state,action)=>{
            state.status ='error'
            state.error = action.payload as string
            console.log('❌ REJECTED', action.payload);
        })
    }
})

export default labSlice.reducer