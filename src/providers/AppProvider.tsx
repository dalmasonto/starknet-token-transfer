import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"
import { connect, disconnect } from "starknetkit"

const AppContext = createContext({
    account: null as any,
    address: null as any,
    connectWallet: null as any
})

export const useAppContext = () => useContext(AppContext)


interface IAppProvider {
    children: ReactNode
}

const AppProvider = ({ children }: IAppProvider) => {
    const [walletAccount, setWalletAccount] = useState<any>(null)
    const [address, setAddress] = useState<any>(null)

    const connectWallet = async () => {
        if (address) {
            disconnect()
            setWalletAccount(null)
            setAddress(null)
            return;
        }
        const connection = await connect({
            dappName: "Tokne",
            // provider: 
        })
        if (connection) {
            setWalletAccount(connection.wallet?.account)
            setAddress(connection.wallet?.selectedAddress)
        }
    }

    const providerValue = useMemo(() => ({
        account: walletAccount,
        connectWallet,
        address
    }), [walletAccount, address])

    useEffect(() => {
        connectWallet()
    }, [])

    return (
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider