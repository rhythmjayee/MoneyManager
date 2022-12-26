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
            backgroundColor: GlobalColors.light500,
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
            headerTitleStyle: {
                fontFamily: 'Walkway-bk'
            },
            headerShown: true,
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: GlobalColors.wine900,
            },
            headerTintColor: GlobalColors.light500,
        }}
        />
    </Stack.Navigator>
    )
}

export default AuthUserNavigation