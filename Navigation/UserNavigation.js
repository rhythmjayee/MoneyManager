import Tab from "./BottomTabNavigation";
import HomeScreen from "../screens/HomeScreen";
import MoreScreen from "../screens/MoreScreen";
import AccountsScreen from "../screens/AccountsScreen";
import GlobalColors from "../constants/colors";
import Ionicons from '@expo/vector-icons/Ionicons';

const UserNavigation = () => {
    return (
        <Tab.Navigator
        sceneContainerStyle={{backgroundColor: GlobalColors.charcoal200}}
        initialRouteName={HomeScreen}
        screenOptions={{
            tabBarActiveTintColor: GlobalColors.light500,
            tabBarInactiveTintColor: GlobalColors.charcoal500,
            tabBarStyle: {
                backgroundColor: GlobalColors.wine500
            },
            tabBarIconStyle:{
                marginTop: 0
            },
            tabBarLabelStyle: {
                padding: 5
            },
            title: '',
            tabBarLabelStyle: {
                fontFamily: 'Walkway-bk',
                fontSize: 12,
            },
            headerStyle: {backgroundColor: GlobalColors.wine500}
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                tabBarLabel: 'Expenses',
                headerLeftContainerStyle: {
                    padding: 8
                },
                headerRightContainerStyle: {
                    padding: 8
                },
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                    name='book-outline' 
                    color={color}
                    size={size} />
                ),
                }}
            />
            <Tab.Screen 
            name="Accounts" 
            component={AccountsScreen}
            options={{
                headerRightContainerStyle: {
                    padding: 8
                },
                headerLeftContainerStyle: {
                    padding: 8
                },
                tabBarLabel: 'Accounts',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                    name='calculator-outline'
                    color={color}
                    size={size} />
                ),
                }}
            />
            <Tab.Screen 
            name="More" 
            component={MoreScreen}
            options={{
                tabBarLabel: 'More',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                    name='add'
                    color={color}
                    size={size} />
                ),
                }}
            />
        </Tab.Navigator>
    )
}

export default UserNavigation