import { useState, useEffect, useLayoutEffect, useContext } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import GlobalColors from "../constants/colors"
import IconButton from "../components/UI/IconButton"

import { AccountContext } from "../store/accounts-context"
import { AuthContext } from "../store/auth-context"
import Accounts from "../components/Accounts/Accounts"
import { storeAccountsInfo } from "../utils/store"
import { convertNumberToCurrency } from "../utils/helper"
import ModalAddAccount from "../components/Accounts/ModalAddAccount"

const AccountsScreen = ({navigation}) => {
    const accountContext = useContext(AccountContext)
    const {user : {userId}} = useContext(AuthContext)
    const [modal, setModal] = useState(false);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
            <IconButton 
            icon='analytics-outline' 
            color={GlobalColors.light500} 
            size={30}
            onPress={() => {}}/>
            ),
            headerLeft: () => (
                <IconButton 
                icon='pie-chart-outline' 
                color={GlobalColors.light500} 
                size={30}
                onPress={() => {
                    navigation.navigate('AccountsChart')}
                }/>
                ),
        })
    }, [navigation])

        const toggleModal = () => {
            setModal((preModal) => !preModal)
        }

        const addNewAccount = async ({AccountType, isUsedForExpenses}) => {
            try {
                const accounts = await accountContext.addAccount({type: AccountType, isUsedForExpenses: isUsedForExpenses})
                await storeAccountsInfo(userId, accounts)
            }catch(e) {
                console.log(e)
            }
        }

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.cardTitleContainer}>
                    <IconButton icon={'cash-outline'} size={30} color={GlobalColors.light500}/>
                    <Text style={[styles.text1, {textDecorationLine: 'underline', marginLeft: 5}]}>
                        Net Worth
                    </Text>
                </View>
                <View>
                    <Text style={styles.text1}>
                        {convertNumberToCurrency('INR', accountContext.accounts.amount)}
                    </Text>
                </View>
            </View>
            <View style={styles.accountContainer}>
                <View style={styles.accountHead}>
                    <IconButton size={20} color={GlobalColors.light500} icon={'wallet-outline'}/>
                    <Text style={styles.Title}>Accounts</Text>
                    <IconButton size={20} color={GlobalColors.light500} icon={'add-circle-outline'} onPress={toggleModal}/>
                </View>
                <ScrollView style={styles.accountsList}>
                    <Accounts accounts={accountContext.accounts.all}/>
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
    cardTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    accountContainer: {
        height: '70%',
        width: '90%',
    },
    accountHead: {
        flexDirection: 'row',
        justifyContent: 'center',
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
        fontSize: 20,
        marginLeft: 5,
        marginRight: 5,
    },
    text1: {
        fontFamily: 'Walkway-bk',
        fontSize: 30,
        color: GlobalColors.light500
    }
})

export default AccountsScreen