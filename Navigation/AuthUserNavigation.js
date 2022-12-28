import Stack from "./StackNavigation";
import ExpenseStatsScreen from "../screens/ExpenseStatsScreen";
import UserNavigation from "./UserNavigation";
import GlobalColors from "../constants/colors";
import SubAccountScreen from "../screens/SubAccountScreen";
import EditSubAccountScreen from "../screens/EditSubAccountScreen";
import EditAccountScreen from "../screens/EditAccountScreen";
import AccountsChartScreen from "../screens/AccountsChartScreen";

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
        <Stack.Screen 
        name="AddSubAccount" 
        component={SubAccountScreen} 
        options={{
            headerTitle: 'Add Sub Account',
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
        <Stack.Screen 
        name="EditSubAccount" 
        component={EditSubAccountScreen} 
        options={{
            headerTitle: 'Edit Sub Account',
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
        <Stack.Screen 
        name="EditAccount" 
        component={EditAccountScreen} 
        options={{
            headerTitle: 'Edit Account Category',
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
        <Stack.Screen 
        name="AccountsChart" 
        component={AccountsChartScreen} 
        options={{
            headerTitle: 'Portfolio Distribution',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontFamily: 'Walkway-bk'
            },
            headerShown: true,
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: GlobalColors.wine900,
            },
            contentStyle:{
                backgroundColor: GlobalColors.charcoal200,
            },
            headerTintColor: GlobalColors.light500,
            animation: 'slide_from_bottom'
        }}
        />
    </Stack.Navigator>
    )
}

export default AuthUserNavigation