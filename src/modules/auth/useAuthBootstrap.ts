import { useEffect } from "react"
import { checkAuthTHunk } from "./authThunk"
import { useAppDispatch } from "../../hooks/useAppDispatch"

export const useAuthBootstrap=()=>{
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(checkAuthTHunk())
    },[dispatch])
}