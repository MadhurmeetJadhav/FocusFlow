import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TasksStack from "./TasksStack";
import HabitsStack from "./HabitsStack";
import FocusStack from "./FocusStack";

const Bottom = createBottomTabNavigator()

export default function MainTabs() {
    return <Bottom.Navigator screenOptions={{ headerShown: false }}>
        <Bottom.Screen name="Tasks" component={TasksStack} />
        <Bottom.Screen name="Habits" component={HabitsStack} />
        <Bottom.Screen name="Focus" component={FocusStack} />
    </Bottom.Navigator>
}