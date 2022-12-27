import AsyncStorage from '@react-native-async-storage/async-storage';

const storeInfo = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
        // console.log(key, value)
    } catch (e) {
        console.log(e)
    }
}

const getInfo = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        // console.log(key, jsonValue)
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

export const storeAccountsInfo = async (userId, value) => {
    let key = userId + '_accountInfo';
    return await storeInfo(key, value)
}

export const getStoredAccountsInfo = async (userId) => {
    let key = userId + '_accountInfo';
    return await getInfo(key)
}

export const removeAccountsInfo = async (userId) => {
    let key = userId + '_accountInfo';
    return await removeInfo(key)
}