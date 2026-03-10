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

export const addTaskService=(id: string | undefined, task: Task): Promise<Task>=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const success = Math.random() > 0.2 
                if(success){
                    resolve(task)
                    
                }else{
                    reject(new Error('Failed to add Task!'))
                }

            },1000)
        })
}

export const toggleTaskService=(id:string, taskId:string , completed : boolean):Promise<{taskId:string,completed:boolean}>=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success = Math.random() > 0.2 
            if(success){
                resolve({taskId,completed})
            }else{
                reject(new Error('Failed to toggle Task!'))
            }
        },1000)
    })

}

export const deleteTaskService = (id:string,taskId:string):Promise<{taskId:string}>=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success = Math.random() > 0.2 
            if(success){
                resolve({taskId})
            }else{
                reject(new Error('Failed to delete Task!'))
            }
        },1000)
    })
}