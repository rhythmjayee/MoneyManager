import { View, Text, StyleSheet } from "react-native"
import GlobalColors from "../../constants/colors"
const Title = ({text, style}) => {
    return (
        <View>
            <Text style={[styles.text, style]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: GlobalColors.light,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
})

export default Title