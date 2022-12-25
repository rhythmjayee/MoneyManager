import { View, StyleSheet, Text } from "react-native"
import { useContext } from "react"

import AuthForm from "../components/Auth/AuthForm"

import { userSignUp } from "../utils/auth"
import { AuthContext } from "../store/auth-context"

const SignupScreen = ({navigation}) => {
    const authContext = useContext(AuthContext);
    const onPressTitle = () => {
        navigation.replace("Login")
    }
    const onPressSubmit = async (user) => {
        const {localId, idToken, expiresIn} = await userSignUp(user)
        authContext.saveUser({
            authToken: idToken,
            userId: localId,
            tokenExpire: Date.now() + expiresIn
        })
    }
    return (
        <AuthForm 
        onPressSubmit={onPressSubmit}
        isLogin={false} 
        onPressTitle={onPressTitle}/>
    )
}

const styles = StyleSheet.create({
    
})
export default SignupScreen