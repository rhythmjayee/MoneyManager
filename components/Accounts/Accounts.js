import { View, Text, StyleSheet } from "react-native"
import GlobalColors from "../../constants/colors"
const Accounts = ({accounts}) => {
    console.log(accounts)
    return (
        <View style={styles.container}>
            { accounts.map((account) => {
                return (
                <View style={styles.accountContainer} key={account.type}>
                    <View style={styles.account}>
                        <Text style={styles.text}>{account.type}</Text>
                    </View>
                    <View style={styles.subAccountContainer}>
                        {
                            account.subAccounts && account.subAccounts.length > 0 && account.subAccounts.map((subAccount) => {
                                return <View style={styles.subAccount} key={subAccount.name}>
                                    <Text style={styles.text}>{subAccount.name}</Text>
                                    <Text style={styles.text}>{subAccount.amount}</Text>
                                </View>
                            })
                        }
                    </View>
            </View>
            )})}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center'
        // alignItems: 'center'
    },
    accountContainer: {
        justifyContent: 'center',
    },
    account: {
        width: '95%',
        padding: 10,
        borderRadius: 20,
        backgroundColor: GlobalColors.dark200
    },
    subAccountContainer: {
        alignItems: 'stretch',
    },
    subAccount: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: GlobalColors.light500,
        fontFamily: 'Walkway-bk'
    }
})

export default Accounts