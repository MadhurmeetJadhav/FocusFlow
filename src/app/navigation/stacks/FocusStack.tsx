import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FocusScreen } from "../../../modules/timer/screens/FocusScreen";

const Stack = createNativeStackNavigator();

export default function FocusStack() {
    return <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Focus" component={FocusScreen} />
    </Stack.Navigator>;
}
