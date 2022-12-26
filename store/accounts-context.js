import { useState, createContext } from "react";

export const AccountContext = createContext({
    accounts: {
        all: {},
        amount: 0
    },
    addAccount : ({type}) => {},
    deleteAccount: ({id}) => {},
    editAccount: ({id}) => {},
    addSubAccount: ({type, name, amount}) => {},
    editSubAccount: ({type, name, amount}) => {},
    deleteSubAccount: ({type, id}) => {},
})

const AccountContextProvider = ({children}) => {
    const initialState = {
        amount: 0,
        all: {}
    }
    const [accounts, setAccounts] = useState(initialState);
    
    const addAccount = ({type}) => {
        if(accounts.all[type] !== undefined) return
        setAccounts((prevAccounts) => {
            let newAccount = {
                amount: Number(prevAccounts.amount),
                all: {
                    ...prevAccounts.all,
                    [type]: {
                    subAccounts: {},
                    amount: 0,
                }}
            }
            return newAccount
        })
    }

    const addSubAccount = ({type, name, amount}) => {
        if(accounts.all[type] === undefined) return
        else if(accounts.all[type].subAccounts[name] !== undefined) return
        setAccounts((prevAccounts) => {
            let newAccount = {
                amount: Number(prevAccounts.amount) + Number(amount),
                all: {
                    ...prevAccounts.all,
                    [type]: {
                        ...prevAccounts.all[type],
                        subAccounts: {
                            ...prevAccounts.all[type].subAccounts,
                            [name]: {
                                amount: Number(amount)
                            }
                        },
                    amount: Number(prevAccounts.all[type].amount) + Number(amount),
                }}
            }
            return newAccount
        })
    }

    const deleteAccount = ({type}) => {
        setAccounts((prevAccounts) => {
            let prevState = {...prevAccounts}
            let typeAmount = prevState.all[type].amount
            delete prevState.all[type]; 
            let newAccount = {
                ...prevState,
                amount: Number(prevState.amount) - Number(typeAmount)
            }
            return newAccount
        })
    }
    const editAccount = ({oldType, type}) => {
        setAccounts((prevAccounts) => {
            let prevState = {...prevAccounts}
            let oldTypeObj = prevState.all[oldType]
            delete prevState.all[oldType]; 
            let newAccount = {
                ...prevState,
                all: {
                    ...prevState.all,
                    [type]: {
                        ...oldTypeObj
                    }
                }
            }
            return newAccount
        })
    }

    const editSubAccount = ({type, oldName, name, amount}) => {
        setAccounts((prevAccounts) => {
            let prevState = {...prevAccounts}
            let typeAmount = prevState.all[type].subAccounts[oldName].amount
            delete prevState.all[type].subAccounts[oldName]
            let newAccount = {
                ...prevState,
                amount: Number(prevState.amount) - Number(typeAmount) + Number(amount),
                all: {
                    ...prevState.all,
                    [type]: {
                        ...prevState.all[type],
                        subAccounts: {
                            ...prevState.all[type].subAccounts,
                            [name]: {
                                amount: Number(amount)
                            }
                        },
                    amount: Number(prevAccounts.all[type].amount) + Number(amount) - Number(typeAmount),
                }}
            }
            return newAccount
        })
    }

    const deleteSubAccount = ({type, name}) => {
        setAccounts((prevAccounts) => {
            let prevState = {...prevAccounts}
            let typeAmount = prevState.all[type].subAccounts[name].amount
            delete prevState.all[type].subAccounts[name]
            let newAccount = {
                ...prevState,
                amount: Number(prevState.amount) - Number(typeAmount),
                all: {
                    ...prevState.all,
                    [type]: {
                        ...prevState.all[type],
                        subAccounts: {
                            ...prevState.all[type].subAccounts,
                        },
                    amount: Number(prevAccounts.all[type].amount) - Number(typeAmount),
                }}
            }
            return newAccount
        })
    }

    const value = {
        accounts: accounts,
        addAccount: addAccount,
        deleteAccount: deleteAccount,
        editAccount: editAccount,
        addSubAccount: addSubAccount,
        editSubAccount: editSubAccount,
        deleteSubAccount: deleteSubAccount,
    }
    return (
        <AccountContext.Provider value={value}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountContextProvider