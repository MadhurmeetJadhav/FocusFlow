import { LoginResponse } from "../modules/auth/types";

export const login=(email : string , password : string): Promise<LoginResponse>=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(email === 'test@test.com' && password === '123456'){
                resolve({
                  user:{
                    id:'1',
                    name:'Test User',
                    email:'test@test.com'
                  },
                  token:'mock-token-123',
                  expiresAt:Date.now() + 5 * 60 * 1000
                })
            }else{
                reject(new Error('Invalid Credentials'))
            }
        },1000)
    })

}