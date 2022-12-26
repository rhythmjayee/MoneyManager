import { useContext, useState } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import GlobalColors from '../constants/colors';

import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import Title from '../components/UI/Title';

import { AccountContext } from '../store/accounts-context';

const EditAccountScreen = ({navigation, route}) => {
    const accountContext = useContext(AccountContext)
    const {AccountType} = route.params
    const [value, setValue] = useState(AccountType);
    
    const onPressHandler = () => {
        accountContext.editAccount({oldType: AccountType, type: value})
        setValue('')
        navigation.goBack()
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
    }
})

export default EditAccountScreen