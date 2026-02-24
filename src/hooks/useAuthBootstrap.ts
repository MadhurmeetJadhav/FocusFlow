import { useEffect } from "react"
import { checkAuthTHunk } from "../modules/auth/authThunk"
import { useAppDispatch } from "./useAppDispatch"

export const useAuthBootstrap=()=>{
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(checkAuthTHunk())
    },[])
}