import 'react-native-gesture-handler'; //Need to be on top as mentioned in docs -> https://reactnavigation.org/docs/stack-navigator
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, NativeModules, Platform } from 'react-native';

import Input from './components/UI/Input';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import GlobalColors from './constants/colors';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

export default function App() {
    return (
    <View style={styles.container}>
        <SafeAreaView style={styles.safe}>
            {/* <LoginScreen/> */}
            <SignupScreen/>
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
