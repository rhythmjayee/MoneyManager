import { View, Text } from "react-native"
import { useLayoutEffect, useContext } from "react";

import IconButton from "../components/UI/IconButton";

import { AuthContext } from "../store/auth-context";
import { AccountContext } from "../store/accounts-context";
import GlobalColors from "../constants/colors";
import { removeAuthInfo } from "../utils/store";
import { removeAccountsInfo } from "../utils/store";

const HomeScreen = ({navigation}) => {
    const authContext = useContext(AuthContext);
    const accountContext = useContext(AccountContext);
    const logoutHandler = () => {
        let userId = authContext.user.userId
        authContext.removeUser()
        accountContext.deleteAccounts()
        removeAccountsInfo(userId)
        removeAuthInfo()
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
            <IconButton 
            icon='log-out-outline' 
            color={GlobalColors.light500} 
            size={30}
            onPress={logoutHandler}/>
            ),
            headerRight : () => (
                <IconButton 
                icon='bar-chart-outline' 
                color={GlobalColors.light500} 
                size={30}
                onPress={() => navigation.navigate('ExpenseStats')}/>
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