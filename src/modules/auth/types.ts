export type User={
    id:string,
    name:string,
    email:string,
}

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading'|'checking'

export type AuthState={
    status:AuthStatus,
    user?:User
    token:string | null
}

export type LoginResponse={
    user:User,
    token:string,
    expiresAt:number|undefined
}