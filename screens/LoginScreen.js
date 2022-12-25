import { View, StyleSheet, Text } from "react-native"

import AuthForm from "../components/Auth/AuthForm"
const LoginScreen = () => {
    return (
        <AuthForm isLogin={true} />
    )
}

const styles = StyleSheet.create({
    
})
export default LoginScreen