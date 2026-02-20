import { useSelector } from "react-redux";
import { RootState } from "../app/store/store";

export const useAppSelector =<T> (selector : (state: RootState)=>T):T=>{
    return useSelector(selector)
}