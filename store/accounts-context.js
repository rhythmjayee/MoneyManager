import { useState, createContext } from "react";

export const AccountContext = createContext({
    accounts: {
        all: {},
        amount: 0
    },
    addInitialAccounts: (accounts={amount: 0, all: {}}) => {},
    addAccount : ({type}) => { return new Promise((resolve, reject) => {})},
    deleteAccount: ({id}) => { return new Promise((resolve, reject) => {})},
    editAccount: ({oldType, type}) => {return new Promise((resolve, reject) => {})},
    addSubAccount: ({type, name, amount}) => { return new Promise((resolve, reject) => {})},
    editSubAccount: ({type, name, amount}) => { return new Promise((resolve, reject) => {})},
    deleteSubAccount: ({type, name}) => { return new Promise((resolve, reject) => {})},
    deleteAccounts: () => {}
})

const AccountContextProvider = ({children}) => {
    const initialState = {
        amount: 0,
        all: {}
    }
    const [accounts, setAccounts] = useState(initialState);

    const addInitialAccounts = (accounts=initialState) => {
        if(accounts == null || accounts.all == undefined || accounts.amount == undefined) accounts = initialState
        setAccounts(accounts)
    }
    const deleteAccounts = () => {
        setAccounts(initialState)
    }
    const addAccount = ({type}) => {
        return new Promise((resolve, reject) => {
            if(accounts.all[type] !== undefined) return reject(`Account with type ${type} Alredy Exist`)
            let newAccount = {}
            setAccounts((prevAccounts) => {
                newAccount = {
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
            resolve(newAccount)
        })
    }

    const addSubAccount = ({type, name, amount}) => {
        return new Promise((resolve, reject) => {
            if(accounts.all[type] === undefined) return reject(`Account with type ${type} does not Exist`)
            else if(accounts.all[type].subAccounts[name] !== undefined) reject(`Account with subtype ${name} Already Exist`)
            let newAccount = {}
            setAccounts((prevAccounts) => {
                newAccount = {
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
            resolve(newAccount)
        })
    }

    const deleteAccount = ({type}) => {
        return new Promise((resolve, reject) => {
            if(accounts.all[type] === undefined) return reject(`Account with type ${type} does not Exist`)
            let newAccount = {}
            setAccounts((prevAccounts) => {
                let prevState = {...prevAccounts}
                let typeAmount = prevState.all[type].amount
                delete prevState.all[type]; 
                newAccount = {
                    ...prevState,
                    amount: Number(prevState.amount) - Number(typeAmount)
                }
                return newAccount
            })
            resolve(newAccount)
        })
    }
    const editAccount = ({oldType, type}) => {
        return new Promise((resolve, reject) => {
            if(accounts.all[type] !== undefined) return reject(`Account with type ${type} Already Exist`)
            else if(accounts.all[oldType] === undefined) return reject(`Account with type ${oldType} does not Exist`)
            let newAccount = {}
            setAccounts((prevAccounts) => {
                let prevState = {...prevAccounts}
                let oldTypeObj = prevState.all[oldType]
                delete prevState.all[oldType]; 
                newAccount = {
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
            resolve(newAccount)
        })
    }

    const editSubAccount = ({type, oldName, name, amount}) => {
        return new Promise((resolve, reject) => {
            if(accounts.all[type] === undefined) return reject(`Account with type ${type} does not Exist`)
            else if(accounts.all[type].subAccounts[oldName] === undefined) return reject(`Account with subtype ${oldName} does not Exist`)
            else if(oldName !== name && accounts.all[type].subAccounts[name] !== undefined) return reject(`Account with subtype ${name} Already Exist`)
            let newAccount = {}
            setAccounts((prevAccounts) => {
                let prevState = {...prevAccounts}
                let typeAmount = prevState.all[type].subAccounts[oldName].amount
                delete prevState.all[type].subAccounts[oldName]
                newAccount = {
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
            resolve(newAccount)
        })
    }

    const deleteSubAccount = ({type, name}) => {
        return new Promise((resolve, reject) => {
            if(accounts.all[type] === undefined) return reject(`Account with type ${type} does not Exist`)
            else if(accounts.all[type].subAccounts[name] === undefined) return reject(`Account with subtype ${name} does not Exist`)
            let newAccount = {}
            setAccounts((prevAccounts) => {
                let prevState = {...prevAccounts}
                let typeAmount = prevState.all[type].subAccounts[name].amount
                delete prevState.all[type].subAccounts[name]
                newAccount = {
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
            resolve(newAccount)
        })
    }

    const value = {
        accounts: accounts,
        addInitialAccounts: addInitialAccounts,
        addAccount: addAccount,
        deleteAccount: deleteAccount,
        editAccount: editAccount,
        addSubAccount: addSubAccount,
        editSubAccount: editSubAccount,
        deleteSubAccount: deleteSubAccount,
        deleteAccounts: deleteAccounts
    }
    return (
        <AccountContext.Provider value={value}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountContextProvider