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
        all: {
            'Cash':{
                amount: 0,
                subAccounts: {
                    'Cash1':{
                        amount: 0
                    },
                }
            },
            'Bank':{
                amount: 0,
                subAccounts: {
                    'Kotak':{
                        amount: 0
                    },
                }
            }
        },
        amount: 43545345
    }
    const [accounts, setAccounts] = useState(initialState);
    
    const addAccount = ({type}) => {
        if(accounts.all[type] !== undefined) return
        setAccounts((prevAccounts) => {
            let newAccount = {
                amount: prevAccounts.amount,
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
                amount: prevAccounts.amount + amount,
                all: {
                    ...prevAccounts.all,
                    [type]: {
                        ...prevAccounts.all[type],
                        subAccounts: {
                            ...prevAccounts.all[type].subAccounts,
                            [name]: {
                                amount: amount
                            }
                        },
                    amount: prevAccounts.all[type].amount + amount,
                }}
            }
            return newAccount
        })
    }

    const deleteAccount = ({type}) => {
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