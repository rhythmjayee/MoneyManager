import axios from 'axios'
import { FIREBASE_AUTH_SINGUP_URI, FIREBASE_AUTH_SINGIN_URI, API_KEY } from '../config'

import { saveUserToDB } from './user';

const authenticate = async (url, email, password) => {
    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
    });
    return response.data;
}
export const userSignUp = async ({email, password}) => {
    const url = `${FIREBASE_AUTH_SINGUP_URI}${API_KEY}`
    const res  = await authenticate(url, email, password)
    const { localId } = res
    saveUserToDB(localId)
    return res
}

export const userLogin = async ({email, password}) => {
    const url = `${FIREBASE_AUTH_SINGIN_URI}${API_KEY}`
    return await authenticate(url, email, password)
}