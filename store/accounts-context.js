import { useState, createContext } from "react";

export const AccountContext = createContext({
    accounts: {
        all: [],
        types: [],
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
        all: [
            {
                type: 'Cash',
                amount: 0,
                subAccounts: [
                    {
                        name: 'Cash1',
                        amount: 0
                    },
                    {
                        name: 'Cash2',
                        amount: 0
                    }
                ]
            },
            {
                type: 'Bank',
                amount: 0,
                subAccounts: [{
                    name: 'Kotak',
                    amount: 0
                }]
            }
        ],
        types: ['Cash', 'Bank'],
        amount: 43545345
    }
    const [accounts, setAccounts] = useState(initialState);
    
    const addAccount = ({type}) => {
        if(accounts.types.includes(type)) return
        setAccounts((prevAccounts) => {
            let newAccount = {
                amount: prevAccounts.amount,
                types: [...prevAccounts.types, type],
                all: [...prevAccounts.all, {
                    type: type,
                    subAccounts: []
                }]
            }
            return newAccount
        })
    }
    const deleteAccount = ({type}) => {
        if(accounts.types.includes(type)) return
        setAccounts((prevAccounts) => {
            let newAccount = {
                amount: prevAccounts.amount,
                types: [...prevAccounts.types, type],
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
                types: [...prevAccounts.types, type],
                all: [...prevAccounts.all, {
                    type: type,
                    subAccounts: []
                }]
            }
            return newAccount
        })
    }
    const addSubAccount = ({type}) => {
        if(accounts.types.includes(type)) return
        setAccounts((prevAccounts) => {
            let newAccount = {
                amount: prevAccounts.amount,
                types: [...prevAccounts.types, type],
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
                types: [...prevAccounts.types, type],
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
                types: [...prevAccounts.types, type],
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