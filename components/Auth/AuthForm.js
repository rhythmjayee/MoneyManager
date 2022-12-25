import { View, StyleSheet } from "react-native"
import Input from "../../components/UI/Input"
import LogoImage from "../../components/UI/LogoImage"
import Button from "../../components/UI/Button"
import Title from "../../components/UI/Title"
import GlobalColors from "../../constants/colors"
import TextButton from "../../components/UI/TextButton"

const AuthForm = ({isLogin}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <LogoImage/>
            </View>
            <View style={styles.inputContainer}>
                <View>
                    <Title
                    text={isLogin ? "Login" : "SignUp"}
                    />
                </View>
                <View>
                    <Input
                    placeholder={'Enter Email...'}
                    />
                    <Input
                    placeholder={'Enter Password...'}
                    secureTextEntry={true}
                    />
                </View>
                <View>
                    <TextButton 
                    text={isLogin? "New User?  SignUp" : "Already a User? LogIn"}
                    />
                </View>
                <View style={styles.ButtomContainer}>
                    <Button text={isLogin ? "Login" : "SignUp"}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginVertical: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        height: '20%'
    },
    inputContainer: {
        height: '70%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: GlobalColors.wine900,
        borderRadius: 35
    },
    ButtomContainer: {
    },
})

export default AuthForm