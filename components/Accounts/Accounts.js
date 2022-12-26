import { View, Text, StyleSheet } from "react-native"
import GlobalColors from "../../constants/colors"
const Accounts = ({accounts}) => {
    return (
        <View style={styles.container}>
            <View style={styles.rootContainer}>
                { accounts.map((account) => {
                    console.log(account)
                    return (
                    <View style={styles.accountContainer} key={account.type}>
                        <View style={styles.account}>
                            <Text style={styles.text}>{account.type}</Text>
                            <Text style={styles.text}>Rs.{account.amount}</Text>
                        </View>
                        <View style={styles.subAccountContainer}>
                            {
                                account.subAccounts && account.subAccounts.length > 0 && account.subAccounts.map((subAccount) => {
                                    console.log(subAccount)
                                    return <View style={styles.subAccount} key={subAccount.name}>
                                        <Text style={styles.text}>{subAccount.name}</Text>
                                        <Text style={styles.text}>Rs.{subAccount.amount}</Text>
                                    </View>
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
        borderBottomWidth: 2,
        borderBottomColor: GlobalColors.light200
    },
    text: {
        color: GlobalColors.light500,
        fontFamily: 'Walkway-bk',
        margin: 6
    }
})

export default Accounts