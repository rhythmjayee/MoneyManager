import { useState, useLayoutEffect, useContext } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import GlobalColors from "../constants/colors"
import IconButton from "../components/UI/IconButton"

import { AccountContext } from "../store/accounts-context"
import Accounts from "../components/Accounts/Accounts"

import "intl";
import "intl/locale-data/jsonp/en";
import ModalAddAccount from "../components/Accounts/ModalAddAccount"

const AccountsScreen = ({navigation}) => {
    const accountConetxt = useContext(AccountContext)
    const [modal, setModal] = useState(false);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
            <IconButton 
            icon='add-circle-outline' 
            color={GlobalColors.light500} 
            size={30}
            onPress={toggleModal}/>
            ),
        })
        }, [navigation])

        const toggleModal = () => {
            setModal((preModal) => !preModal)
        }

        const addNewAccount = (accountType) => {

        }

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View>
                    <Text style={[styles.text1, {textDecorationLine: 'underline'}]}>
                        Net Worth
                    </Text>
                </View>
                <View>
                    <Text style={styles.text1}>
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'INR' }).format(accountConetxt.accounts.amount)}
                    </Text>
                </View>
            </View>
            <View style={styles.accountContainer}>
                <View style={styles.accountHead}>
                    <Text style={styles.Title}>Accounts</Text>
                </View>
                <ScrollView style={styles.accountsList}>
                    <Accounts accounts={accountConetxt.accounts.all}/>
                </ScrollView>
            </View>
            <ModalAddAccount modal={modal} onPress={addNewAccount} toggleModal={toggleModal}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    cardContainer: {
        margin: 10,
        padding: 10,
        height: '25%',
        width: '90%',
        backgroundColor: GlobalColors.wine900,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    accountContainer: {
        height: '70%',
        width: '90%',
    },
    accountHead: {
        backgroundColor: GlobalColors.wine900,
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 30,
        
    },
    accountsList: {
        flex: 1,
    },
    Title: {
        color: GlobalColors.light500,
        fontFamily: 'Walkway-bk',
        fontSize: 20
    },
    text1: {
        fontFamily: 'Walkway-bk',
        fontSize: 30,
        color: GlobalColors.light500
    }
})

export default AccountsScreen