import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const externalContracts = {
  8453: {
    UiPoolDataProviderV3: {
      address: "0x174446a6741300cD2E7C1b1A636Fee99c8F83502",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IChainlinkAggregator",
              name: "_networkBaseTokenPriceInUsdProxyAggregator",
              type: "address",
            },
            {
              internalType: "contract IChainlinkAggregator",
              name: "_marketReferenceCurrencyPriceInUsdProxyAggregator",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "ETH_CURRENCY_UNIT",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ILendingPoolAddressesProvider",
              name: "provider",
              type: "address",
            },
          ],
          name: "getReservesData",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "underlyingAsset",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "decimals",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "baseLTVasCollateral",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "reserveLiquidationThreshold",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "reserveLiquidationBonus",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "reserveFactor",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "usageAsCollateralEnabled",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "borrowingEnabled",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "stableBorrowRateEnabled",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isActive",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isFrozen",
                  type: "bool",
                },
                {
                  internalType: "uint128",
                  name: "liquidityIndex",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "variableBorrowIndex",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "liquidityRate",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "variableBorrowRate",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "stableBorrowRate",
                  type: "uint128",
                },
                {
                  internalType: "uint40",
                  name: "lastUpdateTimestamp",
                  type: "uint40",
                },
                {
                  internalType: "address",
                  name: "aTokenAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "stableDebtTokenAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "variableDebtTokenAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "interestRateStrategyAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "availableLiquidity",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "totalPrincipalStableDebt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "averageStableRate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "stableDebtLastUpdateTimestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "totalScaledVariableDebt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "priceInMarketReferenceCurrency",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "variableRateSlope1",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "variableRateSlope2",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "stableRateSlope1",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "stableRateSlope2",
                  type: "uint256",
                },
              ],
              internalType: "struct IUiPoolDataProvider.AggregatedReserveData[]",
              name: "",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "marketReferenceCurrencyUnit",
                  type: "uint256",
                },
                {
                  internalType: "int256",
                  name: "marketReferenceCurrencyPriceInUsd",
                  type: "int256",
                },
                {
                  internalType: "int256",
                  name: "networkBaseTokenPriceInUsd",
                  type: "int256",
                },
                {
                  internalType: "uint8",
                  name: "networkBaseTokenPriceDecimals",
                  type: "uint8",
                },
              ],
              internalType: "struct IUiPoolDataProvider.BaseCurrencyInfo",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ILendingPoolAddressesProvider",
              name: "provider",
              type: "address",
            },
          ],
          name: "getReservesList",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ILendingPoolAddressesProvider",
              name: "provider",
              type: "address",
            },
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "getUserReservesData",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "underlyingAsset",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "scaledATokenBalance",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "usageAsCollateralEnabledOnUser",
                  type: "bool",
                },
                {
                  internalType: "uint256",
                  name: "stableBorrowRate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "scaledVariableDebt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "principalStableDebt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "stableBorrowLastUpdateTimestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct IUiPoolDataProvider.UserReserveData[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "marketReferenceCurrencyPriceInUsdProxyAggregator",
          outputs: [
            {
              internalType: "contract IChainlinkAggregator",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "networkBaseTokenPriceInUsdProxyAggregator",
          outputs: [
            {
              internalType: "contract IChainlinkAggregator",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    // Xocolatl: {
    //   address: "0xa411c9Aa00E020e4f88Bc19996d29c5B7ADB4ACf",
    //   abi: [
    //     { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    //     {
    //       anonymous: false,
    //       inputs: [
    //         { indexed: false, internalType: "address", name: "previousAdmin", type: "address" },
    //         { indexed: false, internalType: "address", name: "newAdmin", type: "address" },
    //       ],
    //       name: "AdminChanged",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [
    //         { indexed: true, internalType: "address", name: "owner", type: "address" },
    //         { indexed: true, internalType: "address", name: "spender", type: "address" },
    //         { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
    //       ],
    //       name: "Approval",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [{ indexed: true, internalType: "address", name: "beacon", type: "address" }],
    //       name: "BeaconUpgraded",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [
    //         {
    //           components: [
    //             { internalType: "uint256", name: "numerator", type: "uint256" },
    //             { internalType: "uint256", name: "denominator", type: "uint256" },
    //           ],
    //           indexed: false,
    //           internalType: "struct Xocolatl.Factor",
    //           name: "newFlashFee",
    //           type: "tuple",
    //         },
    //       ],
    //       name: "FlashFeeChanged",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [{ indexed: false, internalType: "address", name: "newAddress", type: "address" }],
    //       name: "FlashFeeReceiverChanged",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [{ indexed: false, internalType: "uint8", name: "version", type: "uint8" }],
    //       name: "Initialized",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }],
    //       name: "Paused",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [
    //         { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
    //         { indexed: true, internalType: "bytes32", name: "previousAdminRole", type: "bytes32" },
    //         { indexed: true, internalType: "bytes32", name: "newAdminRole", type: "bytes32" },
    //       ],
    //       name: "RoleAdminChanged",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [
    //         { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
    //         { indexed: true, internalType: "address", name: "account", type: "address" },
    //         { indexed: true, internalType: "address", name: "sender", type: "address" },
    //       ],
    //       name: "RoleGranted",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [
    //         { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
    //         { indexed: true, internalType: "address", name: "account", type: "address" },
    //         { indexed: true, internalType: "address", name: "sender", type: "address" },
    //       ],
    //       name: "RoleRevoked",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [
    //         { indexed: true, internalType: "address", name: "from", type: "address" },
    //         { indexed: true, internalType: "address", name: "to", type: "address" },
    //         { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
    //       ],
    //       name: "Transfer",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }],
    //       name: "Unpaused",
    //       type: "event",
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [{ indexed: true, internalType: "address", name: "implementation", type: "address" }],
    //       name: "Upgraded",
    //       type: "event",
    //     },
    //     {
    //       inputs: [],
    //       name: "BURNER_ROLE",
    //       outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [],
    //       name: "DEFAULT_ADMIN_ROLE",
    //       outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [],
    //       name: "DOMAIN_SEPARATOR",
    //       outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [],
    //       name: "MINTER_ROLE",
    //       outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [],
    //       name: "PAUSER_ROLE",
    //       outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [],
    //       name: "UPGRADER_ROLE",
    //       outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "address", name: "owner", type: "address" },
    //         { internalType: "address", name: "spender", type: "address" },
    //       ],
    //       name: "allowance",
    //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "address", name: "spender", type: "address" },
    //         { internalType: "uint256", name: "amount", type: "uint256" },
    //       ],
    //       name: "approve",
    //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       inputs: [{ internalType: "address", name: "account", type: "address" }],
    //       name: "balanceOf",
    //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    //       name: "burn",
    //       outputs: [],
    //       stateMutability: "pure",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "address", name: "to", type: "address" },
    //         { internalType: "uint256", name: "amount", type: "uint256" },
    //       ],
    //       name: "burn",
    //       outputs: [],
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "address", name: "", type: "address" },
    //         { internalType: "uint256", name: "", type: "uint256" },
    //       ],
    //       name: "burnFrom",
    //       outputs: [],
    //       stateMutability: "pure",
    //       type: "function",
    //     },
    //     {
    //       inputs: [],
    //       name: "decimals",
    //       outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "address", name: "spender", type: "address" },
    //         { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    //       ],
    //       name: "decreaseAllowance",
    //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "address", name: "token", type: "address" },
    //         { internalType: "uint256", name: "amount", type: "uint256" },
    //       ],
    //       name: "flashFee",
    //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [],
    //       name: "flashFeeReceiver",
    //       outputs: [{ internalType: "address", name: "", type: "address" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "contract IERC3156FlashBorrowerUpgradeable", name: "receiver", type: "address" },
    //         { internalType: "address", name: "token", type: "address" },
    //         { internalType: "uint256", name: "amount", type: "uint256" },
    //         { internalType: "bytes", name: "data", type: "bytes" },
    //       ],
    //       name: "flashLoan",
    //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    //       name: "getRoleAdmin",
    //       outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "bytes32", name: "role", type: "bytes32" },
    //         { internalType: "address", name: "account", type: "address" },
    //       ],
    //       name: "grantRole",
    //       outputs: [],
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "bytes32", name: "role", type: "bytes32" },
    //         { internalType: "address", name: "account", type: "address" },
    //       ],
    //       name: "hasRole",
    //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "address", name: "spender", type: "address" },
    //         { internalType: "uint256", name: "addedValue", type: "uint256" },
    //       ],
    //       name: "increaseAllowance",
    //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     { inputs: [], name: "initialize", outputs: [], stateMutability: "nonpayable", type: "function" },
    //     {
    //       inputs: [{ internalType: "address", name: "token", type: "address" }],
    //       name: "maxFlashLoan",
    //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "address", name: "to", type: "address" },
    //         { internalType: "uint256", name: "amount", type: "uint256" },
    //       ],
    //       name: "mint",
    //       outputs: [],
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       inputs: [],
    //       name: "name",
    //       outputs: [{ internalType: "string", name: "", type: "string" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [{ internalType: "address", name: "owner", type: "address" }],
    //       name: "nonces",
    //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     { inputs: [], name: "pause", outputs: [], stateMutability: "nonpayable", type: "function" },
    //     {
    //       inputs: [],
    //       name: "paused",
    //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "address", name: "owner", type: "address" },
    //         { internalType: "address", name: "spender", type: "address" },
    //         { internalType: "uint256", name: "value", type: "uint256" },
    //         { internalType: "uint256", name: "deadline", type: "uint256" },
    //         { internalType: "uint8", name: "v", type: "uint8" },
    //         { internalType: "bytes32", name: "r", type: "bytes32" },
    //         { internalType: "bytes32", name: "s", type: "bytes32" },
    //       ],
    //       name: "permit",
    //       outputs: [],
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       inputs: [],
    //       name: "proxiableUUID",
    //       outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "bytes32", name: "role", type: "bytes32" },
    //         { internalType: "address", name: "account", type: "address" },
    //       ],
    //       name: "renounceRole",
    //       outputs: [],
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "bytes32", name: "role", type: "bytes32" },
    //         { internalType: "address", name: "account", type: "address" },
    //       ],
    //       name: "revokeRole",
    //       outputs: [],
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         {
    //           components: [
    //             { internalType: "uint256", name: "numerator", type: "uint256" },
    //             { internalType: "uint256", name: "denominator", type: "uint256" },
    //           ],
    //           internalType: "struct Xocolatl.Factor",
    //           name: "newFlashFee_",
    //           type: "tuple",
    //         },
    //       ],
    //       name: "setFlashFee",
    //       outputs: [],
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       inputs: [{ internalType: "address", name: "_flashFeeReceiverAddr", type: "address" }],
    //       name: "setFlashFeeReceiver",
    //       outputs: [],
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    //       name: "supportsInterface",
    //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [],
    //       name: "symbol",
    //       outputs: [{ internalType: "string", name: "", type: "string" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [],
    //       name: "totalSupply",
    //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    //       stateMutability: "view",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "address", name: "to", type: "address" },
    //         { internalType: "uint256", name: "amount", type: "uint256" },
    //       ],
    //       name: "transfer",
    //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "address", name: "from", type: "address" },
    //         { internalType: "address", name: "to", type: "address" },
    //         { internalType: "uint256", name: "amount", type: "uint256" },
    //       ],
    //       name: "transferFrom",
    //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     { inputs: [], name: "unpause", outputs: [], stateMutability: "nonpayable", type: "function" },
    //     {
    //       inputs: [{ internalType: "address", name: "newImplementation", type: "address" }],
    //       name: "upgradeTo",
    //       outputs: [],
    //       stateMutability: "nonpayable",
    //       type: "function",
    //     },
    //     {
    //       inputs: [
    //         { internalType: "address", name: "newImplementation", type: "address" },
    //         { internalType: "bytes", name: "data", type: "bytes" },
    //       ],
    //       name: "upgradeToAndCall",
    //       outputs: [],
    //       stateMutability: "payable",
    //       type: "function",
    //     },
    //   ],
    //   inheritedFunctions: {},
    // },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
