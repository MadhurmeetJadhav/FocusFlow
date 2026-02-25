import { Task } from "../types/Task"

export const fetchTasks=(id: string | undefined): Promise<Task[]>=>{

    return new Promise(resolve=>{
        setTimeout(()=>{
if(id==='1'){
    resolve([
        { id: '1', title: 'Deep Work', completed: false },
        { id: '2', title: 'Workout', completed: true },
    ])
}else{
    resolve([
        { id: '1', title: 'Sleep Work', completed: false },
        { id: '2', title: 'No Workout', completed: true },
    ])
}
        },1000)
    })

}