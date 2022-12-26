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
        console.log(type, name, accounts.all[type], accounts.all[type].subAccounts[name])
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
    const editAccount = ({type}) => {
        if(accounts.types.includes(type)) return
        setAccounts((prevAccounts) => {
            let newAccount = {
                amount: prevAccounts.amount,
                all: [...prevAccounts.all, {
                    type: type,
                    subAccounts: []
                }]
            }
            return newAccount
        })
    }

    const editSubAccount = ({type}) => {
        if(accounts.types.includes(type)) return
        setAccounts((prevAccounts) => {
            let newAccount = {
                amount: prevAccounts.amount,
                all: [...prevAccounts.all, {
                    type: type,
                    subAccounts: []
                }]
            }
            return newAccount
        })
    }

    const deleteSubAccount = ({type}) => {
        if(accounts.types.includes(type)) return
        setAccounts((prevAccounts) => {
            let newAccount = {
                amount: prevAccounts.amount,
                all: [...prevAccounts.all, {
                    type: type,
                    subAccounts: []
                }]
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