import 'react-native-gesture-handler'; //Need to be on top as mentioned in docs -> https://reactnavigation.org/docs/stack-navigator
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, NativeModules, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import GlobalColors from './constants/colors';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

SplashScreen.preventAutoHideAsync();

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
            <LoginScreen/>
            {/* <SignupScreen/> */}
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
