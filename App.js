import 'react-native-gesture-handler'; //Need to be on top as mentioned in docs -> https://reactnavigation.org/docs/stack-navigator
import { StatusBar } from 'expo-status-bar';
import { useEffect, useCallback, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, NativeModules, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';


import GlobalColors from './constants/colors';
import AuthNavigation from './Navigation/AuthNavigation';
import UserNavigation from './Navigation/UserNavigation';
import AuthUserNavigation from './Navigation/AuthUserNavigation';


import ContextProvider from './store/context';
import { AuthContext } from './store/auth-context';
import { AccountContext } from './store/accounts-context';
import { getStoredAuthInfo } from './utils/store';
import { getStoredAccountsInfo } from './utils/store';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

SplashScreen.preventAutoHideAsync();

const Root = () => {
    const {user: {userId, authToken}, saveUser} = useContext(AuthContext)
    const {addInitialAccounts} = useContext(AccountContext)
    let isUserLoggedIn = !!authToken
    useEffect(() => {
        const getAuth = async () => {
            const auth = await getStoredAuthInfo()
            if(auth !== null) {
                saveUser(auth)
                const accounts = await getStoredAccountsInfo(auth.userId)
                addInitialAccounts(accounts)
                isUserLoggedIn = true
            }else {
                isUserLoggedIn = false
            }
        }
        if(!isUserLoggedIn) {
            getAuth()
        }
    }, [authToken]);
    return (
        <NavigationContainer>
            {isUserLoggedIn ? <AuthUserNavigation/> : <AuthNavigation/>}
        </NavigationContainer>
    )
}

export default function App() {
    const [fontsLoaded] = useFonts({
        'Walkway-b': require('./assets/fonts/Walkway/Walkway_Bold.ttf'),
        'Walkway-bk': require('./assets/fonts/Walkway/Walkway_Black.ttf'),
        'Walkway-o-bk' : require('./assets/fonts/Walkway/Walkway_Oblique_Black.ttf'),
        'Dancing': require('./assets/fonts/dancing/ds.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
    <View 
    onLayout={onLayoutRootView}
    style={styles.container}>
        <SafeAreaView style={styles.safe}>
            <ContextProvider>
                <Root/>
            </ContextProvider>
        </SafeAreaView>
        <StatusBar style="light" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalColors.wine500
    },
    safe:{
        flex: 1,
        marginTop: STATUSBAR_HEIGHT,
    }
});
