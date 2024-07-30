import { AppShell, Title, Container, Group, Button } from "@mantine/core"
import { ReactNode, useEffect, useState } from "react"
import { useAppContext } from "../providers/AppProvider"

interface IMainLayout {
    children: ReactNode
}

const MainLayout = ({ children }: IMainLayout) => {
    const { address, connectWallet } = useAppContext()
    const [address_, setAddress] = useState<any>(address)
    // console.log(connectWallet)

    useEffect(() => {
        setAddress(address)
    }, [address])

    return (
        <AppShell
            header={{ height: 60 }}
            padding="md"
        >
            <AppShell.Header>
                <Container fluid h={'100%'}>
                    <Group h={'100%'} align="center" justify="space-between">
                        <Title fw={'500'}>Tokne</Title>
                        <Button variant="light" radius={"md"} fw={400} onClick={connectWallet}>
                            {address_ ? address_?.substring(0, 10) : "Connect Wallet"}
                        </Button>
                    </Group>
                </Container>
            </AppShell.Header>
            <AppShell.Main>
                <Container fluid>
                    {children}
                </Container>
            </AppShell.Main>
        </AppShell>
    )
}

export default MainLayout