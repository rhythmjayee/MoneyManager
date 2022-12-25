import { View, StyleSheet, Text } from "react-native"

import AuthForm from "../components/Auth/AuthForm"
const SignupScreen = ({navigation}) => {
    const onPressTitle = () => {
        navigation.replace("Login")
    }
    return (
        <AuthForm isLogin={false} onPressTitle={onPressTitle}/>
    )
}

const styles = StyleSheet.create({
    
})
export default SignupScreen