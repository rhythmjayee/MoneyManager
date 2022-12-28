import { useState, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native"
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import GlobalColors from "../constants/colors";
import { shades } from "../constants/colors";
import { AccountContext } from "../store/accounts-context";

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};


const AccountsChartScreen = () => {
    const {accounts : {all}} = useContext(AccountContext)
    const [data, setData] = useState([]);
    
    useEffect(() => {
        let data = Object.entries(all).map(([account, val], index) => {
            let i = ((shades.length - index) + shades.length - 1) % shades.length
            console.log(i)
            let color = shades[i]
            return {
                name: account,
                amount: val.amount,
                color: color,
                legendFontColor: GlobalColors.light500,
                legendFontSize: 15
            }
        })
        setData(data)
    }, [all]);
    return (
        <View style={styles.container}>
            <View style={styles.chart}>
                <PieChart
                data={data}
                width={screenWidth}
                height={250}
                chartConfig={chartConfig}
                accessor={"amount"}
                backgroundColor={'#ffffff00'}
                paddingLeft={"15"}
                center={[0, 0]}
                absolute
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 10,
        alignItems: 'center'
    },
    chart: {
        margin: 10,
        borderRadius: 20
    }
})

export default AccountsChartScreen