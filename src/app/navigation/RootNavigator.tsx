
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { AppStack } from "./stacks/AppStack";
import { AuthStack } from "./stacks/AuthStack";
import { useAuthBootstrap } from "../../modules/auth/useAuthBootstrap";
import { Text, View } from "react-native";
import { SplashScreen } from "../../modules/auth/screens/SplashScreen";

export const RootNavigator = () => {
    useAuthBootstrap()

    let status = useAppSelector((state) => state.auth.status)

    if (status === 'checking') {
        return (
            <>
                <SplashScreen />
            </>
        )
    }
    const isLoggedIn = status === 'authenticated'

    return isLoggedIn ? <AppStack /> : <AuthStack />

}