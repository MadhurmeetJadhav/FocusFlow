import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MainTabs from "./MainTabs"


const Stack = createNativeStackNavigator()
export const AppStack = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Main" component={MainTabs} />
        </Stack.Navigator>
    )

}