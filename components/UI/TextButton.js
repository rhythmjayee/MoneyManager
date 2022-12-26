import { Pressable, View, StyleSheet } from "react-native"
import Title from "./Title"

const TextButton = ({text, onPress, style}) => {
    return (
        <View style={style}>
            <Pressable
            style={({pressed}) => pressed && styles.pressed}
            onPress={onPress}
            >
            <Title
                text={text}
                style={styles.text}
            />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15 ,
        fontFamily: 'Walkway-bk',
        textDecorationLine: 'none'
    },
    pressed: {
        opacity: 0.5
    }
})

export default TextButton