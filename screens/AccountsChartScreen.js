import { useState, useEffect, useContext } from "react";
import { ScrollView, StyleSheet, Text, Dimensions, View } from "react-native"
import GlobalColors from "../constants/colors";
import { shades } from "../constants/colors";
import { AccountContext } from "../store/accounts-context";
import AccountChart from "../components/Accounts/AccountChart";

const screenHeight = Dimensions.get("window").height;
const AccountsChartScreen = () => {
    const {accounts : {all, amount}} = useContext(AccountContext)
    const [data, setData] = useState({
        "Accounts" : [[],0]
    });
    
    useEffect(() => {
        let newData = {}
        newData["Accounts"] = []
        let arr = Object.entries(all).map(([account, val], index) => {
            let i = ((shades.length - index) + shades.length - 1) % shades.length
            let color = shades[i]
            return {
                name: account,
                amount: val.amount,
                color: color,
                legendFontColor: GlobalColors.light500,
                legendFontSize: 12
            }
        })
        newData["Accounts"].push(arr)
        newData["Accounts"].push(amount)

        Object.entries(all).map(([account, val]) => {
            newData[account] = []
            arr = Object.entries(val.subAccounts).map(([subAccount, subVal], subIndex) => {
                let i = ((shades.length - subIndex) + shades.length - 1) % shades.length
                let color = shades[i]
                return {
                    name: subAccount,
                    amount: subVal.amount,
                    color: color,
                    legendFontColor: GlobalColors.light500,
                    legendFontSize: 12
                }
            })
            newData[account].push(arr)
            newData[account].push(val.amount)
        })
        setData(newData)
    }, [all]);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
            {Object.entries(data).map(([key, val], index) => {
                return <AccountChart key={index} Title={key} data={val[0]} amount={val[1]}/>
            })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 10,
        height: '80%'
    },
    scroll: {
        alignItems: 'center',
    }
})

export default AccountsChartScreen