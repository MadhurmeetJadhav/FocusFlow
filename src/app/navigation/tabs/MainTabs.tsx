import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TasksStack from "../stacks/TasksStack";
import HabitsStack from "../stacks/HabitsStack";
import FocusStack from "../stacks/FocusStack";

const Bottom = createBottomTabNavigator()

export default function MainTabs() {
    return <Bottom.Navigator screenOptions={{ headerShown: false }}>
        <Bottom.Screen name="Tasks" component={TasksStack} />
        <Bottom.Screen name="Habits" component={HabitsStack} />
        <Bottom.Screen name="Focus" component={FocusStack} />
    </Bottom.Navigator>
}