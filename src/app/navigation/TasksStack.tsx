import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TasksScreen } from "../../modules/tasks/screens/TasksScreen";

const Stack = createNativeStackNavigator();

export default function TasksStack() {
    return <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Tasks" component={TasksScreen} />
    </Stack.Navigator>;
}
