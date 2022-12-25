import { View, TextInput, StyleSheet } from "react-native"

import GlobalColors from "../../constants/colors"

const Input = ({placeholder, onChangeText, keyboardType, text, style, autoCorrect, secureTextEntry}) => {
    return (
        <View>
            <TextInput
            style={[styles.input, style]}
            onChangeText={onChangeText}
            value={text}
            placeholder={placeholder || 'Enter Text here..'}
            keyboardType={keyboardType}
            placeholderTextColor={GlobalColors.charcoal}
            autoCorrect={autoCorrect || false}
            secureTextEntry={secureTextEntry || false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '100%',
        minWidth: 250,
        maxWidth: 600,
        margin: 8,
        borderWidth: 3,
        borderRadius: 8,
        borderColor: GlobalColors.charcoal,
        backgroundColor: GlobalColors.light,
        color: GlobalColors.charcoal,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Input