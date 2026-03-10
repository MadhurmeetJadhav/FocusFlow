import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Task } from "../../../types/Task"
import { addTaskService, deleteTaskService, fetchTasks, toggleTaskService } from "../../../services/taskService"
import { logOutThunk } from "../../auth/authThunk"
import { RootState } from "../../../app/store/store"



export const fetchTaskThunk = createAsyncThunk(
    'tasks/fetchTasks',
    async(_,thunkAPI)=>{
        try {
            const state = thunkAPI.getState() as RootState
            const userId = state.auth.user?.id
            if(!userId) return thunkAPI.rejectWithValue('User not found!')
            const tasks = await fetchTasks(userId)
            return tasks
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!')
        }
    }
)

export const addTaskThunk= createAsyncThunk(
    'tasks/addTask',
    async({title, tempId}:{title:string, tempId?:string},thunkAPI)=>{

        const status = thunkAPI.getState() as RootState
        const userId = status.auth.user?.id
        if(!userId) return thunkAPI.rejectWithValue("User not found!")


        const newTask={
            id:tempId,
            title,
            completed:false
        }
        try {
            const task = await addTaskService(userId,newTask)
            return {task, tempId}
        } catch (error) {
            return thunkAPI.rejectWithValue(tempId)
        }

    }
)

export const toggleTaskThunk = createAsyncThunk(
    'tasks/toggleTask',
    async({taskId,completed,previousCompleted}:{taskId:string,completed:boolean,previousCompleted:boolean},thunkAPI)=>{
        const status = thunkAPI.getState() as RootState
        const userId=status.auth.user?.id
        
        if(!userId) return thunkAPI.rejectWithValue('user not found')

        try {
            
            const task = await toggleTaskService(userId, taskId, completed)
            return task
        } catch (error) {
            return thunkAPI.rejectWithValue({taskId,previousCompleted})
        }


    }
)

export const deleteTaskThunk = createAsyncThunk(
    'tasks/deleteTask',
    async({task}:{task :Task},thunkApi)=>{
        const state = thunkApi.getState() as RootState
        const userId = state.auth.user?.id
        if(!userId) return thunkApi.rejectWithValue('user not found')
        try {
            await deleteTaskService(userId,task?.id)
        } catch (error) {
            return thunkApi.rejectWithValue(task)
        }

    }
)



const taskSlice = createSlice({
    name:'task',
    initialState:{
        tasks: [] as Task[],
        status : 'idle' as 'idle' | 'loading' | 'success' | 'error',
        error: null as string | null,
        addingTask: false as boolean
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
        .addCase(logOutThunk.fulfilled,(state)=>{
            state.tasks = []
            state.status = 'idle'
            state.error = null
        })
        .addCase(addTaskThunk.pending,(state,action)=>{
           const {title,tempId} = action.meta.arg
           const tempTask = {
            id:tempId,
            title,
            completed:false
           }
           state.tasks.push(tempTask)

           state.addingTask=true
        })
        .addCase(addTaskThunk.fulfilled,(state, action)=>{

            const {task, tempId} = action.payload
            state.tasks = state.tasks.map((t)=>{
               return t.id === tempId? task : t
            })

            state.addingTask = false
        })
        .addCase(addTaskThunk.rejected,(state,action)=>{
            const tempId = action.payload as string
            state.tasks = state.tasks.filter((task)=> task.id !== tempId)
            state.addingTask = false
        })
        .addCase(toggleTaskThunk.pending,(state,action)=>{
            const {taskId,completed} = action.meta.arg

            const task = state.tasks.find((t)=>t.id === taskId)
            if(task){
                task.completed = completed
            }

        })
        .addCase(toggleTaskThunk.rejected,(state, action)=>{
            const {taskId,previousCompleted} = action.meta.arg
            const task = state.tasks.find((t)=>t.id === taskId)
            if(task){
                task.completed = previousCompleted
            }

        })
        .addCase(deleteTaskThunk.pending,(state,action)=>{

            const {task} =action.meta.arg
            state.tasks = state.tasks.filter((t)=>t.id !==task.id)

        })
        .addCase(deleteTaskThunk.rejected,(state,action)=>{
            const {task} = action.meta.arg
            state.tasks.push(task)
        })
    }
})

export default taskSlice.reducer