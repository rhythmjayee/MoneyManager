import { useLayoutEffect, useContext } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import GlobalColors from "../constants/colors"
import IconButton from "../components/UI/IconButton"

import { AccountContext } from "../store/accounts-context"
import Accounts from "../components/Accounts/Accounts"

const AccountsScreen = ({navigation}) => {
    const accountConetxt = useContext(AccountContext)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
            <IconButton 
            icon='add-circle-outline' 
            color={GlobalColors.light500} 
            size={30}
            onPress={()=>{}}/>
            ),
        })
        }, [navigation])
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
                        Rs.{accountConetxt.accounts.amount.toLocaleString('en-IN')}
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
        flex: 1
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