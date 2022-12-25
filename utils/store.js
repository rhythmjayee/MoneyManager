import AsyncStorage from '@react-native-async-storage/async-storage';

const storeInfo = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.log(e)
    }
}

const getInfo = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e)
    }
}

const removeInfo = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        console.log(e)
    }
}


export const storeAuthInfo = async (value) => {
    return await storeInfo('authInfo', value)
}

export const getStoredAuthInfo = async () => {
    const data = await getInfo('authInfo')
    const timeNow = Date.now();
    if(data !== null && timeNow >= data.tokenExpire) return null;
    return data
}

export const removeAuthInfo = async () => {
    return await removeInfo('authInfo')
}