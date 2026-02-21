import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Task } from "../../../types/Task"
import { fetchTasks } from "../../../services/taskService"



export const fetchTaskThunk = createAsyncThunk(
    'tasks/fetchTasks',
    async(_,thunkAPI)=>{
        try {
            const tasks = await fetchTasks()
            return tasks
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!')
        }
    }
)



const taskSlice = createSlice({
    name:'task',
    initialState:{
        tasks: [] as Task[],
        status : 'idle' as 'idle' | 'loading' | 'success' | 'error',
        error: null as string | null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTaskThunk.pending,(state)=>{
            state.status = 'loading'
            state.tasks = []
            state.error = null
        })
        .addCase(fetchTaskThunk.fulfilled,(state,action)=>{
            state.status ='success'
            state.tasks = action.payload
            state.error = null
        })
        .addCase(fetchTaskThunk.rejected, (state,action)=>{
            state.status ='error'
            state.error= action.payload as string
        })
    }
})

export default taskSlice.reducer