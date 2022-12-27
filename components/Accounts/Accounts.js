import { useNavigation } from "@react-navigation/native"
import { View, Text, StyleSheet, Pressable } from "react-native"
import GlobalColors from "../../constants/colors"
import Title from "../UI/Title"

const Accounts = ({accounts}) => {
    const accountArr = accounts ? Object.entries(accounts) : []
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.rootContainer}>
                { accountArr.length == 0 ? 
                    <Title 
                    text={'No Accounts Added'}
                    style={{fontSize: 20, textDecorationLine: 'none', color: GlobalColors.light200}}
                    /> :
                    accountArr.map(([type, {amount, subAccounts}]) => {
                    return (
                    <View style={styles.accountContainer} key={type}>
                        <Pressable 
                        style={({pressed}) => pressed && styles.pressed}
                        onPress={() => navigation.navigate('AddSubAccount', {AccountType: type})}
                        >
                            <View style={styles.account}>
                                <Text style={styles.text}>{type}</Text>
                                <Text style={styles.text}>Rs.{amount}</Text>
                            </View>
                        </Pressable>
                        <View style={styles.subAccountContainer}>
                            {   
                                subAccounts && Object.entries(subAccounts).map(([name, {amount}]) => {
                                    return (
                                        <View style={styles.subAccount} key={name}>
                                                <Pressable 
                                                style={({pressed}) => pressed ? [styles.subAccount, styles.pressed]: styles.subAccount}
                                                onPress={() => {navigation.navigate('EditSubAccount', {AccountType:type, amount: amount, subAccount:name })}}
                                                >
                                                    <Text style={styles.text}>{name}</Text>
                                                    <Text style={styles.text}>Rs.{amount}</Text>
                                                </Pressable>
                                        </View>
                                    )
                                })
                            }
                        </View>
                </View>
                )})}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    rootContainer: {
        flex: 1,
        padding: 8,
    },
    accountContainer: {
        flex: 1,
    },
    account: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
        borderRadius: 20,
        backgroundColor: GlobalColors.dark200
    },
    subAccountContainer: {
        alignItems: 'center',
        padding: 8
    },
    subAccount: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: GlobalColors.light200
    },
    text: {
        color: GlobalColors.light500,
        fontFamily: 'Walkway-bk',
        margin: 6
    }, 
    pressed: {
        opacity: 0.8
    }
})

export default Accounts