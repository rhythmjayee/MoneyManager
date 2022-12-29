import { useState } from 'react';
import { Modal, View, StyleSheet, Switch, Text } from 'react-native';
import GlobalColors from '../../constants/colors';
import Button from '../UI/Button';
import IconButton from '../UI/IconButton';
import Input from '../UI/Input';
import Title from '../UI/Title';

const ModalAddAccount = ({modal, onPress, toggleModal}) => {
    const [value, setValue] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const onPressHandler = () => {
        onPress({AccountType: value, isUsedForExpenses: isEnabled})
        setValue('')
        toggleModal()
    }
    const onChangeHandler = (text) => {
        setValue(text)
    }
    return (
        <Modal
        animationType="slide"
        visible={modal}
        transparent={true}
        style={styles.modal}
        >
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.title}>
                        <Title
                        style={{fontSize: 20, color: GlobalColors.light500, textDecorationLine: 'none'}}
                        text={"Add New Account Category"}
                        />
                    </View>
                    
                    <Input
                    value={value}
                    onChangeText={onChangeHandler}
                    style={{width: '80%'}}
                    placeholder={"Add Account Type..."}
                    />
                    <Text style={styles.t1}>Use Account for Expenses</Text>
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
                    text={"Submit"}
                    />
                </View>
                <IconButton
                onPress={toggleModal}
                icon={"close-circle-outline"}
                size={30}
                color={GlobalColors.light500}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
    },
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
        color: GlobalColors.dark,
        fontSize: 15,
        fontFamily: 'Walkway-bk',
    },
})

export default ModalAddAccount