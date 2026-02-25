import * as Keychain from 'react-native-keychain'

export const saveToken = async(token:string,expiresAt:number)=>{
    await Keychain.setGenericPassword('token',JSON.stringify({token,expiresAt}),{service:'token'} );
}

export const getToken = async () => {
    const result = await Keychain.getGenericPassword({ service: 'token' })
    if (result) {
      return JSON.parse(result.password) as { token: string; expiresAt: number }
    }
    return null
  }

export const clearToken = async()=>{
    await Keychain.resetGenericPassword({service:'token'});
    
}