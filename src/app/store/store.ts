import { configureStore } from "@reduxjs/toolkit";
import labSlice from "../../modules/lab/labSlice";

export const store = configureStore({
    reducer:{
        lab: labSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch