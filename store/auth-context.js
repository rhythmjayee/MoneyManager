import { useState, createContext } from "react";

export const AuthContext = createContext({
    user: {
        authToken: null,
        userId: null,
        tokenExpire: null
    },
    saveUser: (userObj) => {},
    removeUser: () => {},
})

const AuthContextProvider = ({children}) => {
    const initialState = {
        authToken: null,
        userId: null,
        tokenExpire: null
    }
    const [authState, setAuthState] = useState(initialState);
    const saveUser = (userObj) => {
        setAuthState({...userObj})
    }
    const removeUser = () => {
        setAuthState(initialState)
    }
    const value = {
        user: authState,
        saveUser: saveUser,
        removeUser: removeUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider