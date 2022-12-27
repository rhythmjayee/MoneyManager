import { View, Text, StyleSheet } from "react-native"
import { useState, useContext, useLayoutEffect } from "react"
import Title from "../components/UI/Title"
import Input from "../components/UI/Input"
import Button from "../components/UI/Button"

import GlobalColors from "../constants/colors"
import { AccountContext } from "../store/accounts-context"
import { AuthContext } from "../store/auth-context"
import IconButton from "../components/UI/IconButton"
import { storeAccountsInfo } from "../utils/store"

const EditSubAccountScreen = ({route, navigation}) => {
    const accountContext = useContext(AccountContext)
    const {user: {userId}} = useContext(AuthContext)
    const {AccountType, amount, subAccount} = route.params
    const [input, setInput] = useState({
        name: subAccount,
        amount: amount.toString()
    });
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: subAccount,
            headerRight: () => (
            <IconButton 
            color={GlobalColors.light500} 
            icon={"trash-outline"} size={20} 
            onPress={async () => {
                try{
                    const accounts = await accountContext.deleteSubAccount({type: AccountType, name:subAccount})
                    storeAccountsInfo(userId, accounts)
                    navigation.goBack()
                }catch(e) {
                    console.log(e)
                }
            }} />
            )
        })
    }, [navigation])

    const onPressHandler = async () => {
        try{
            const accounts = await accountContext.editSubAccount({type: AccountType, oldName:subAccount, name: input.name, amount: input.amount})
            await storeAccountsInfo(userId, accounts)
            navigation.goBack()
        }catch(e) {
            console.log(e)
        }
    }
    const onChangeInputHandler = (inputType, value) => {
        setInput((prevInput) => {
            return {
                ...prevInput,
                [inputType] : value
            }
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View>
                    <Title
                    text={"Edit Sub Account"}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Account Name:</Text>
                    <Input
                    value={input.name}
                    onChangeText={onChangeInputHandler.bind(this, 'name')}
                    placeholder={"Enter Account Name..."}
                    />
                    <Text style={styles.text}>Balance:</Text>
                    <Input
                    value={input.amount}
                    keyboardType={'number-pad'}
                    onChangeText={onChangeInputHandler.bind(this, 'amount')}
                    placeholder={"Enter Balance..."}
                    />
                </View>
                <View>
                    <Button
                    onPress={onPressHandler}
                    text={"Edit"}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        margin: 8
    },
    text: {
        fontFamily: 'Walkway-bk',
        fontSize: 15,
        textAlign: 'center',
        color: GlobalColors.light500
    }
})

export default EditSubAccountScreen