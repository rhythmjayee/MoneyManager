import { View, Text } from "react-native"
import { useLayoutEffect, useContext } from "react";

import IconButton from "../components/UI/IconButton";

import { AuthContext } from "../store/auth-context";
import GlobalColors from "../constants/colors";

const HomeScreen = ({navigation}) => {
    const authContext = useContext(AuthContext);
    const logoutHandler = () => {
        authContext.removeUser()
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
            <IconButton 
            icon='log-out-outline' 
            color={GlobalColors.light} 
            size={30}
            onPress={logoutHandler}/>
            ),
        })
        }, [navigation])
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen