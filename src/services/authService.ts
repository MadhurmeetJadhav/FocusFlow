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
            }else   if(email === 'test2@test.com' && password === '1234567'){
                resolve({
                    user:{
                      id:'2',
                      name:'Test User 2',
                      email:'test2@test2.com'
                    },
                    token:'mock-token-1233',
                    expiresAt:Date.now() + 5 * 60 * 1000
                  })
            }else{
                reject(new Error('Invalid Credentials'))
            }
        },1000)
    })

}