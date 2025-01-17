export const ERC20_ABI = [
    {
        "type": "function",
        "name": "constructor",
        "inputs": [
            {
                "name": "name_",
                "type": "core::felt252"
            },
            {
                "name": "symbol_",
                "type": "core::felt252"
            },
            {
                "name": "decimals_",
                "type": "core::integer::u8"
            },
            {
                "name": "initial_supply",
                "type": "core::integer::u256"
            },
            {
                "name": "recipient",
                "type": "core::starknet::contract_address::ContractAddress"
            }
        ],
        "outputs": [],
        "state_mutability": "external"
    },
    {
        "type": "function",
        "name": "get_name",
        "inputs": [],
        "outputs": [
            {
                "type": "core::felt252"
            }
        ],
        "state_mutability": "view"
    },
    {
        "type": "function",
        "name": "get_symbol",
        "inputs": [],
        "outputs": [
            {
                "type": "core::felt252"
            }
        ],
        "state_mutability": "view"
    },
    {
        "type": "function",
        "name": "get_decimals",
        "inputs": [],
        "outputs": [
            {
                "type": "core::integer::u8"
            }
        ],
        "state_mutability": "view"
    },
    {
        "type": "function",
        "name": "get_total_supply",
        "inputs": [],
        "outputs": [
            {
                "type": "core::integer::u256"
            }
        ],
        "state_mutability": "view"
    },
    {
        "type": "function",
        "name": "balance_of",
        "inputs": [
            {
                "name": "account",
                "type": "core::starknet::contract_address::ContractAddress"
            }
        ],
        "outputs": [
            {
                "type": "core::integer::u256"
            }
        ],
        "state_mutability": "view"
    },
    {
        "type": "function",
        "name": "allowance",
        "inputs": [
            {
                "name": "owner",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "name": "spender",
                "type": "core::starknet::contract_address::ContractAddress"
            }
        ],
        "outputs": [
            {
                "type": "core::integer::u256"
            }
        ],
        "state_mutability": "view"
    },
    {
        "type": "function",
        "name": "transfer",
        "inputs": [
            {
                "name": "recipient",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "name": "amount",
                "type": "core::integer::u256"
            }
        ],
        "outputs": [],
        "state_mutability": "external"
    },
    {
        "type": "function",
        "name": "transfer_from",
        "inputs": [
            {
                "name": "sender",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "name": "recipient",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "name": "amount",
                "type": "core::integer::u256"
            }
        ],
        "outputs": [],
        "state_mutability": "external"
    },
    {
        "type": "function",
        "name": "approve",
        "inputs": [
            {
                "name": "spender",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "name": "amount",
                "type": "core::integer::u256"
            }
        ],
        "outputs": [],
        "state_mutability": "external"
    },
    {
        "type": "function",
        "name": "increase_allowance",
        "inputs": [
            {
                "name": "spender",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "name": "added_value",
                "type": "core::integer::u256"
            }
        ],
        "outputs": [],
        "state_mutability": "external"
    },
    {
        "type": "function",
        "name": "decrease_allowance",
        "inputs": [
            {
                "name": "spender",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "name": "subtracted_value",
                "type": "core::integer::u256"
            }
        ],
        "outputs": [],
        "state_mutability": "external"
    },
    {
        "type": "event",
        "name": "Transfer",
        "inputs": [
            {
                "name": "from",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "name": "to",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "name": "value",
                "type": "core::integer::u256"
            }
        ]
    },
    {
        "type": "event",
        "name": "Approval",
        "inputs": [
            {
                "name": "owner",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "name": "spender",
                "type": "core::starknet::contract_address::ContractAddress"
            },
            {
                "name": "value",
                "type": "core::integer::u256"
            }
        ]
    }
]