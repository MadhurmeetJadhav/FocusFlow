import { useState } from "react"
import { ActivityIndicator, Button, Pressable, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useAppDispatch } from "../../../hooks/useAppDispatch"
import { loginThunk } from "../authThunk"
import { useAppSelector } from "../../../hooks/useAppSelector"

export const LoginScreen = () => {

    const dispatch = useAppDispatch()
    const status = useAppSelector((state) => state.auth.status)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    return (
        <SafeAreaView style={{ paddingHorizontal: 12 }}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={{ borderColor: '#AEDEFC', borderWidth: 1, height: 50, borderRadius: 25, padding: 10, marginVertical: 40 }}

            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={{ borderColor: '#AEDEFC', borderWidth: 1, height: 50, borderRadius: 25, padding: 10, marginBottom: 40 }}

            />

            <View style={{ alignItems: 'center', justifyContent: 'center', height: 50, backgroundColor: '#AEDEFC', borderRadius: 25 }}>
                <Pressable onPress={() => dispatch(loginThunk({ email, password }))}>
                    {
                        status === 'loading' ? <ActivityIndicator size={'large'} color={'#016B61'} /> : <Text style={{ color: '#016B61', fontSize: 18 }}>Login</Text>
                    }
                </Pressable>
            </View>

        </SafeAreaView>
    )
}