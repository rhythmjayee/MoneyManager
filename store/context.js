import AuthContextProvider from "./auth-context";

const ContextProvider = ({children}) => {
    return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    )
}

export default ContextProvider