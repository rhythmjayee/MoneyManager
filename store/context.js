import AuthContextProvider from "./auth-context";
import AccountContextProvider from "./accounts-context";

const ContextProvider = ({children}) => {
    return (
        <AuthContextProvider>
            <AccountContextProvider>
                {children}
            </AccountContextProvider>
        </AuthContextProvider>
    )
}

export default ContextProvider