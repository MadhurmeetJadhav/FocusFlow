import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HabitsScreen } from "../../../modules/habits/screens/HabitsScreen";

const Stack = createNativeStackNavigator();

export default function HabitsStack() {
    return <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Habits" component={HabitsScreen} />
    </Stack.Navigator>;
}
