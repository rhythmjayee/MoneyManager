import { View, StyleSheet, Text } from "react-native"
import { useContext } from "react"

import AuthForm from "../components/Auth/AuthForm"
import { AuthContext } from "../store/auth-context"
import { userLogin } from "../utils/auth"
import { storeAuthInfo } from "../utils/store"

const LoginScreen = ({navigation}) => {
    const authContext = useContext(AuthContext);
    const onPressSubmit = async (user) => {
        try {
            const {localId, idToken, expiresIn} = await userLogin(user)
            const obj = {
                authToken: idToken,
                userId: localId,
                tokenExpire: Date.now() + expiresIn
            }
            authContext.saveUser(obj)
            storeAuthInfo(obj)
        }catch(err) {
            console.log(err)
        }
        
    }
    const onPressTitle = () => {
        navigation.replace("Signup")
    }
    return (
        <AuthForm isLogin={true} onPressTitle={onPressTitle} onPressSubmit={onPressSubmit}/>
    )
}

const styles = StyleSheet.create({
    
})
export default LoginScreen