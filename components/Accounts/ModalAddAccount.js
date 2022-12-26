import { useState } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import GlobalColors from '../../constants/colors';
import Button from '../UI/Button';
import IconButton from '../UI/IconButton';
import Input from '../UI/Input';
import Title from '../UI/Title';

const ModalAddAccount = ({modal, onPress, toggleModal}) => {
    const [value, setValue] = useState('');
    const onPressHandler = () => {
        onPress(value)
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
    }
})

export default ModalAddAccount