import { View, Image, StyleSheet } from "react-native"

const LogoImage = () => {
    return (
        <View style={styles.container}>
            <Image
            style={styles.image}
            resizeMode='cover'
            source={require('../../assets/piggy-bank.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 150,
        height: 150
    }
})

export default LogoImage