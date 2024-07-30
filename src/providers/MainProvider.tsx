import { ReactNode } from 'react'
import { theme } from '../theme'
import { MantineProvider } from '@mantine/core'
import AppProvider from './AppProvider'
import TokenKitWrapper from 'starknet-tokenkit'
import 'starknet-tokenkit/dist/index.css'

interface IMainProvider {
    children: ReactNode
}

const stylingObject = {
    r: "20px", // This is for Radius of the modal/container
    textColor: "black",
    headerFooterBg: "rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffdfa8",
    fontFamily: "Space Grotesk, sans-serif",
    searchBackground: "rgba(0, 0, 0, 0.1)",
    searchColor: "black",
    searchBorderColor: "rgba(14, 6, 46, 0)",
    searchFocusBorderColor: "violet",
    primaryColor: "violet",
}

const MainProvider = ({ children }: IMainProvider) => {
    return (
        <TokenKitWrapper
            network="SN_MAIN" // Required - SN_MAIN | SN_SEPOLIA
            sepoliaNodeURL="https://starknet-sepolia.public.blastapi.io/rpc/v0_7" // Required
            mainnetNodeURL="https://starknet-mainnet.public.blastapi.io/rpc/v0_7" // Required
            themeObject={stylingObject}
        >
            <AppProvider>
                <MantineProvider theme={theme}>
                    {children}
                </MantineProvider>
            </AppProvider>
        </TokenKitWrapper>
    )
}

export default MainProvider