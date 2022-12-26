import { Pressable, View, StyleSheet, Text } from "react-native"
import GlobalColors from "../../constants/colors"
const Button = ({text, style, onPress}) => {
    return (
        <View style={[styles.container, style]}>
            <Pressable 
            onPress={onPress}
            android_ripple={{color: GlobalColors.wine100}}
            style={({pressed}) => (pressed ? [styles.innerContainer, styles.pressed] : styles.innerContainer)}
            >
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        minWidth: 150,
        maxWidth: 400,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: GlobalColors.charcoal500,
        backgroundColor: GlobalColors.wine500,
        overflow: 'hidden'
    },
    innerContainer: {
        padding: 10,
        borderRadius: 15,
        backgroundColor: GlobalColors.wine500,
    },
    pressed: {
        opacity: 0.8,
        backgroundColor: GlobalColors.wine100
    },
    text: {
        fontFamily: 'Walkway-bk',
        textAlign: 'center',
        color: GlobalColors.light500,
    }
})

export default Button