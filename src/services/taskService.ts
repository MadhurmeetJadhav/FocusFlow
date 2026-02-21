import { Task } from "../types/Task"

export const fetchTasks=(): Promise<Task[]>=>{

    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve([
                { id: '1', title: 'Deep Work', completed: false },
                { id: '2', title: 'Workout', completed: true },
            ])
        },1000)
    })

}