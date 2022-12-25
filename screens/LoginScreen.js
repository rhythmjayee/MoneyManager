import { View, StyleSheet, Text } from "react-native"

import AuthForm from "../components/Auth/AuthForm"
const LoginScreen = ({navigation}) => {
    const onPressTitle = () => {
        navigation.replace("Signup")
    }
    return (
        <AuthForm isLogin={true} onPressTitle={onPressTitle}/>
    )
}

const styles = StyleSheet.create({
    
})
export default LoginScreen