import { configureStore } from "@reduxjs/toolkit";
import labSlice from "../../modules/lab/labSlice";
import taskSlice from "../../modules/tasks/store/taskSlice";

export const store = configureStore({
    reducer:{
        lab: labSlice,
        tasks: taskSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch