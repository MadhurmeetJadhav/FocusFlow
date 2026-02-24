import { configureStore } from "@reduxjs/toolkit";
import labSlice from "../../modules/lab/labSlice";
import taskSlice from "../../modules/tasks/store/taskSlice";
import { authReducer } from "../../modules/auth/authSlice";

export const store = configureStore({
    reducer:{
        lab: labSlice,
        tasks: taskSlice,
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch