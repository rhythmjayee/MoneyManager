import Tab from "./BottomTabNavigation";
import HomeScreen from "../screens/HomeScreen";

import GlobalColors from "../constants/colors";
import Ionicons from '@expo/vector-icons/Ionicons';

const UserNavigation = () => {
    return (
        <Tab.Navigator
        sceneContainerStyle={{backgroundColor: GlobalColors.charcoal}}
        initialRouteName={HomeScreen}
        screenOptions={{
            tabBarActiveTintColor: GlobalColors.light,
            tabBarInactiveTintColor: GlobalColors.charcoal,
            tabBarStyle: {
                backgroundColor: GlobalColors.wine500
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
            component={HomeScreen}
            options={{
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
            component={HomeScreen}
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