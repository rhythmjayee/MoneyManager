import { useContext, useState } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import GlobalColors from '../constants/colors';

import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import Title from '../components/UI/Title';

import { AccountContext } from '../store/accounts-context';
import { AuthContext } from '../store/auth-context';
import { storeAccountsInfo } from '../utils/store';

const EditAccountScreen = ({navigation, route}) => {
    const accountContext = useContext(AccountContext)
    const {user: {userId}} = useContext(AuthContext)
    const {AccountType, isUsedForExpenses} = route.params
    const [value, setValue] = useState(AccountType);
    const [isEnabled, setIsEnabled] = useState(isUsedForExpenses);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const onPressHandler = async () => {
        try{
            const accounts = await accountContext.editAccount({
                oldType: AccountType,
                type: value,
                o_isUsedForExpenses: isUsedForExpenses, 
                isUsedForExpenses: isEnabled
            })
            await storeAccountsInfo(userId, accounts)
            setValue('')
            navigation.goBack()
        }catch(e) {
            console.log(e)
        }
    }
    const onChangeHandler = (text) => {
        setValue(text)
    }
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.title}>
                    <Title
                    style={{fontSize: 20, color: GlobalColors.light500, textDecorationLine: 'none'}}
                    text={"Edit Account Category Name"}
                    />
                </View>
                
                <Input
                value={value}
                onChangeText={onChangeHandler}
                style={{width: '80%'}}
                placeholder={"Edit Account Type..."}
                />
                <Text style={styles.t2}>Use Account : <Text style={styles.t1}>{AccountType}</Text> for Expenses</Text>
                <Switch
                trackColor={{ false: GlobalColors.charcoal500, true: GlobalColors.wine1200}}
                thumbColor={isEnabled ? GlobalColors.light500 : GlobalColors.light200}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <Button
                style={{margin: 5}}
                onPress={onPressHandler}
                text={"Done"}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GlobalColors.charcoal200,
    },
    innerContainer: {
        height: '40%',
        padding: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: GlobalColors.charcoal500,
    },
    title: {
        backgroundColor: GlobalColors.wine500,
        padding: 10,
        margin: 8,
        borderRadius: 5
    },
    t1: {
        color: GlobalColors.light500,
    },
    t2: {
        color: GlobalColors.dark,
        fontSize: 15,
        fontFamily: 'Walkway-bk',
    },
    toogleContainer: {
        flexDirection: 'column'
    }
})

export default EditAccountScreen