import { FIREBASE_DB_URI } from "../config";
import axios from 'axios'

export const saveUserToDB = async (userId) => {
    let res = null
    try{
        res = await axios.post(`${FIREBASE_DB_URI}/users/${userId}.json`, {uid: userId})
        return res.data;
    }catch(e) {
        console.log(e)
    }
    return null
}