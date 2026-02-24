import * as Keychain from 'react-native-keychain'

export const saveToken = async(token:string)=>{
    await Keychain.setGenericPassword('token',token, {service:'token'} );
}

export const getToken = async()=>{
    return await Keychain.getGenericPassword({service:'token'});
}

export const clearToken = async()=>{
    await Keychain.resetGenericPassword({service:'token'});
    
}