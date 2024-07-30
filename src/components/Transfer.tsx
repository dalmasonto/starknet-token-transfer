import { Avatar, Box, Button, Card, Group, NumberInput, Stack, Text, TextInput, Title, useMantineTheme } from "@mantine/core"
import { useAppContext } from "../providers/AppProvider"
import { useForm } from "@mantine/form"
import { useState } from "react"
import { cairo, Contract } from "starknet"
import BigNumber from "bignumber.js"
import { ERC20_ABI } from "../constants"
import { SelectTokenModal } from "starknet-tokenkit"

const Transfer = () => {
    const { account } = useAppContext()
    const [loading, setLoading] = useState(false)
    const theme = useMantineTheme()

    const form: any = useForm({
        initialValues: {
            token: null,
            receiver: "0x0715a574C1Af18e96daBF039D67eA6C3b06DD0a7a81069a7a70Cdb8aC775Af39",
            amount: 0
        },
        validate: {
            token: value => value === "" ? "Select token" : null,
            receiver: value => value === "" ? "Enter Receiver" : null,
            amount: value => value === 0 ? "Select token" : null,
        }
    })

    const handleTransfer = () => {
        setLoading(true)
        if (!account) return;
        const amtToTransfer = BigNumber(form.values.amount).multipliedBy(10 ** form.values?.token?.decimals).toNumber()

        const ERC20contract = new Contract(ERC20_ABI, form.values?.token?.address, account)
        const erc20Call = ERC20contract.populate('approve', [form.values.receiver, amtToTransfer])
        const erc20TransferCall = ERC20contract.populate('transfer', [form.values.receiver, cairo.uint256(amtToTransfer)])
        const multicall = [
            {
                contractAddress: form.values.token?.address,
                entrypoint: 'approve',
                calldata: erc20Call.calldata
                // calldata: [form.values.receiver, cairo.uint256(amtToTransfer)],
            },
            {
                contractAddress: form.values.token?.address,
                entrypoint: 'transfer',
                calldata: erc20TransferCall.calldata,
                // calldata: [form.values.receiver, cairo.uint256(amtToTransfer)],
            },
        ]

        account?.execute(multicall).then((res: any) => {
            console.log(res)
        }).catch((err: any) => {
            console.error(err)
        }).finally(() => {
            setLoading(false)
        })
    }

    const setToken = (token: any) => {
        form.setFieldValue("token", token)
    }

    return (
        <Stack>
            <Title fw={500} ta={'center'} order={2}>Transfer Tokens</Title>
            <Card radius={'lg'} p={'xl'}>
                <form onSubmit={form.onSubmit(() => handleTransfer())}>
                    <Stack>
                        <TextInput radius={'md'} label="Receiver" {...form.getInputProps('receiver')} />
                        <SelectTokenModal selectedToken={form.values.token} callBackFunc={setToken}
                            // Optional - Default 'fade', Options: 'bounce' | 'slide' | 'ease' | 'fade'
                            animation="bounce"
                        >
                            <Box p="xs" bg={theme.colors.dark[8]} style={{
                                borderRadius: theme.radius.md,
                                cursor: "pointer"
                            }}>
                                <Group>
                                    <Avatar src={form.values.token?.icon} >
                                        {form.values.token ? form.values.token?.symbol?.substring(0, 2) : "ST"}
                                    </Avatar>
                                    <Stack gap={0}>
                                        <Text fw={500} size="xs"> {form.values.token ? form.values.token?.symbol : "ST"}</Text>
                                        <Text fw={400} size="sm">{form.values.token ? form.values.token?.name : "Select Token"}</Text>
                                    </Stack>
                                </Group>
                            </Box>
                        </SelectTokenModal>
                        {/* <Select radius={'md'} label="Select Token" data={[
                            {
                                value: "0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
                                label: "Stark Token"
                            },
                            {
                                value: "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
                                label: "Eth"
                            }
                        ]} {...form.getInputProps('token')} /> */}
                        <NumberInput allowDecimal radius={'md'} label="Amount" {...form.getInputProps('amount')} />
                        <Group justify="center">
                            <Button color={'violet'} loading={loading} type="submit" radius={'md'}>Transfer</Button>
                        </Group>
                    </Stack>
                </form>
            </Card>
        </Stack>
    )
}

export default Transfer

