export const getMessage=()=>{
    return new Promise<string>((resolve,reject)=>{
        setTimeout(()=>{
            const success = Math.random()> 0.5
            if(success){
                resolve("Message Fetched Successfully")
            }else{
                reject(new Error('Something went wrong!'))
            }
        },2000)
    })
}