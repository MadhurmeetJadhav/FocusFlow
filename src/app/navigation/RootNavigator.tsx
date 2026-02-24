
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { AppStack } from "./stacks/AppStack";
import { AuthStack } from "./stacks/AuthStack";
import { useAuthBootstrap } from "../../hooks/useAuthBootstrap";
import { Text, View } from "react-native";

export const RootNavigator = () => {
    useAuthBootstrap()

    let status = useAppSelector((state) => state.auth.status)

    if (status === 'checking') {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Loading...</Text>
            </View>
        )
    }
    const isLoggedIn = status === 'authenticated'

    return isLoggedIn ? <AppStack /> : <AuthStack />

}