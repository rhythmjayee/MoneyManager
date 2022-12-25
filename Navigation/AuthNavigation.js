import Stack from "./StackNavigation";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

import GlobalColors from "../constants/colors";

const AuthNavigation = () => {
    return (
    <Stack.Navigator
    initialRouteName={LoginScreen}
    screenOptions={{
        contentStyle:{
            backgroundColor: GlobalColors.wine500,
        },
        headerShown: false,
        animation: 'slide_from_right'
    }}
    >
            <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            />
            <Stack.Screen 
            name="Signup" 
            component={SignupScreen} />
    </Stack.Navigator>
    )
}

export default AuthNavigation