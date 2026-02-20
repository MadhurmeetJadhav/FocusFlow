
import { AppStack } from "./stacks/AppStack";
import { AuthStack } from "./stacks/AuthStack";

export const RootNavigator = () => {
    let isLoggedIn = true;
    return isLoggedIn ? <AppStack /> : <AuthStack />

}