import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMessage = createAsyncThunk(
    'lab/fetchMessage',
    async(_, thunkAPI)=>{
        return new Promise<string>((resolve,reject)=>{
            setTimeout(()=>{
                const success = Math.random()> 0.5
                if(success){
                    resolve("Message Fetched Successfully")
                }else{
                    reject(new Error('Something went wrong!'))
                }
            },2000)
        })
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
            state.error = action.error.message
            console.log('❌ REJECTED', action.error.message);
        })
    }
})

export default labSlice.reducer