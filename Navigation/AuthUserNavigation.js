import Stack from "./StackNavigation";
import ExpenseStatsScreen from "../screens/ExpenseStatsScreen";
import UserNavigation from "./UserNavigation";
import GlobalColors from "../constants/colors";

const AuthUserNavigation = () => {
    return (
    <Stack.Navigator
    initialRouteName={UserNavigation}
    screenOptions={{
        contentStyle:{
            backgroundColor: GlobalColors.charcoal200,
        },
        headerShown: false,
        animation: 'slide_from_right'
    }}
    >
        <Stack.Screen 
        name="UserNavigation" 
        component={UserNavigation} 
        />
        <Stack.Screen 
        name="ExpenseStats" 
        component={ExpenseStatsScreen} 
        options={{
            headerTitle: 'Expense Stats',
            headerTitleAlign: 'center',
            headerShown: true,
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: GlobalColors.wine900,
            },
            headerTintColor: GlobalColors.light
        }}
        />
    </Stack.Navigator>
    )
}

export default AuthUserNavigation