import { View, StyleSheet, Text } from "react-native"
import { PieChart } from "react-native-chart-kit"
import { Dimensions } from "react-native";
import IconButton from "../UI/IconButton"
import GlobalColors from "../../constants/colors"
import { convertNumberToCurrency } from "../../utils/helper";

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: GlobalColors.wine100,
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: GlobalColors.wine1200,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const AccountChart = ({Title, data, amount}) => {
    return (
    <View style={styles.chart}>
        <View style={styles.accountHead}>
            <IconButton size={20} color={GlobalColors.light500} icon={'wallet-outline'}/>
            <Text style={styles.Title}>{Title}: {convertNumberToCurrency('INR', amount)}</Text>
        </View>
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
    )
}

const styles = StyleSheet.create({
    chart: {
        
    },
    Title: {
        color: GlobalColors.light500,
        fontFamily: 'Walkway-bk',
        fontSize: 18,
        marginLeft: 5,
        marginRight: 5,
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
})

export default AccountChart