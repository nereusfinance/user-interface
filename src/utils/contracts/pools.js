import swapContractAbi from "./swapContractAbi";
import cauldronV2Abi from "./cauldronV2Abi";
import tokenAbi from "./tokenAbi";
import pairTokenAbi from "./pairTokenAbi";
import reverseSwapperContractAbiV1 from "./reverseSwapperContractAbiV1";

export default [
  {
    name: "AVAX",
    contractChain: "0xa869",
    id: 1,
    contract: {
      name: "CauldronV2",
      address: "0x0D093937007cF4e5c3F113f669025Fe1B08B504F",
      abi: cauldronV2Abi,
    },
    token: {
      name: "WAVAX",
      decimals: 18,
      address: "0x1D308089a2D1Ced3f1Ce36B1FcaF815b07217be3",
      oracleId: 1,
      oracleDatas: {
        multiply: "0x0000000000000000000000000000000000000000",
        divide: "0x5498bb86bc934c8d34fda08e81d444153d0d06ad",
        decimals: 8,
      },
      abi: tokenAbi,
    },
    pairToken: {
      name: "NXUSD",
      decimals: 18,
      address: "0x08Ccc70e9D460e8EbD9D384e261CDEDAe68F1E41",
      abi: pairTokenAbi,
    },
    stabilityFee: 12.5,
    interest: 0,
    ltv: 75,
    initialMax: 20,
    swapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: swapContractAbi,
    },
    reverseSwapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: reverseSwapperContractAbiV1,
    },
  },
  {
    name: "WETH",
    contractChain: "0xa869",
    id: 2,
    contract: {
      name: "CauldronV2",
      address: "0x6a0d8c798F74E29f365B3C8E95e0d8Fa9f05689E",
      abi: cauldronV2Abi,
    },
    token: {
      name: "WETH",
      decimals: 18,
      address: "0x1efae2c9Db545bE5875303462918be930a23C294",
      oracleId: 2,
      oracleDatas: {
        multiply: "0x0000000000000000000000000000000000000000",
        divide: "0xE9490791171630664Ea40db9Ca664e9F1b58A799",
        decimals: 8,
      },
      abi: tokenAbi,
    },
    pairToken: {
      name: "NXUSD",
      decimals: 18,
      address: "0x08Ccc70e9D460e8EbD9D384e261CDEDAe68F1E41",
      abi: pairTokenAbi,
    },
    stabilityFee: 7,
    interest: 0,
    ltv: 85,
    initialMax: 20,
    swapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: swapContractAbi,
    },
    reverseSwapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: reverseSwapperContractAbiV1,
    },
  },
  {
    name: "WBTC",
    contractChain: "0xa869",
    id: 3,
    contract: {
      name: "CauldronV2",
      address: "0x5aB5498957294ED557AEc54f679146ec14f2456e",
      abi: cauldronV2Abi,
    },
    token: {
      name: "WBTC",
      decimals: 8,
      address: "0xb77Af13D67A5796C860427603a638708c3054233",
      oracleId: 3,
      oracleDatas: {
        multiply: "0x0000000000000000000000000000000000000000",
        divide: "0x31cf013a08c6ac228c94551d535d5bafe19c602a",
        decimals: 8,
      },
      abi: tokenAbi,
    },
    pairToken: {
      name: "NXUSD",
      decimals: 18,
      address: "0x08Ccc70e9D460e8EbD9D384e261CDEDAe68F1E41",
      abi: pairTokenAbi,
    },
    stabilityFee: 7,
    interest: 0,
    ltv: 85,
    initialMax: 20,
    swapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: swapContractAbi,
    },
    reverseSwapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: reverseSwapperContractAbiV1,
    },
  },
  {
    name: "DAI",
    contractChain: "0xa869",
    id: 4,
    contract: {
      name: "CauldronV2",
      address: "0x06927091e65B6295C019Df00a85ECdB108c04c69",
      abi: cauldronV2Abi,
    },
    token: {
      name: "DAI",
      decimals: 18,
      address: "0xea2D28c00Bef56A353C363084Da76058057B8b05",
      oracleId: 4,
      oracleDatas: {
        multiply: "0x0000000000000000000000000000000000000000",
        divide: "0x7898accc83587c3c55116c5230c17a6cd9c71bad",
        decimals: 8,
      },
      abi: tokenAbi,
    },
    pairToken: {
      name: "NXUSD",
      decimals: 18,
      address: "0x08Ccc70e9D460e8EbD9D384e261CDEDAe68F1E41",
      abi: pairTokenAbi,
    },
    stabilityFee: 5,
    interest: 0,
    ltv: 90,
    initialMax: 20,
    swapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: swapContractAbi,
    },
    reverseSwapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: reverseSwapperContractAbiV1,
    },
  },
  {
    name: "WXT",
    contractChain: "0xa869",
    id: 5,
    contract: {
      name: "CauldronV2",
      address: "0x905D370c69DB2AAb1AAdA9B5e7Da071601fA6266",
      abi: cauldronV2Abi,
    },
    token: {
      name: "WXT",
      decimals: 18,
      address: "0x14f7313b49452a13515F99FE9891b466ECA039bf",
      oracleId: 5,
      oracleDatas: {
        multiply: "0x0000000000000000000000000000000000000000",
        divide: "0x17f7589c98e6e58fda9b1ceaa2021db3779549fa",
        decimals: 6,
      },
      abi: tokenAbi,
    },
    pairToken: {
      name: "NXUSD",
      decimals: 18,
      address: "0x08Ccc70e9D460e8EbD9D384e261CDEDAe68F1E41",
      abi: pairTokenAbi,
    },
    whitelistManager: "0x789348B5A0c24EAe846D2691e93ff41BC28AFe4b",
    stabilityFee: 10,
    interest: 0,
    ltv: 80,
    initialMax: 20,
    swapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: swapContractAbi,
    },
    reverseSwapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: reverseSwapperContractAbiV1,
    },
  },
  {
    name: "WXT",
    contractChain: "0xa86a",
    id: 6,
    contract: {
      name: "CauldronV2",
      address: "0xD70Bfc49f4a293920c8642e97217807a0132284B",
      abi: cauldronV2Abi,
    },
    token: {
      name: "WXT",
      decimals: 18,
      address: "0xfcDe4A87b8b6FA58326BB462882f1778158B02F1",
      oracleId: 6,
      oracleDatas: {
        multiply: "0x0000000000000000000000000000000000000000",
        divide: "0xc22a84ce336b39e2d08324c032a12cbe8bb7e0f1",
        decimals: 6,
      },
      abi: tokenAbi,
    },
    pairToken: {
      name: "NXUSD",
      decimals: 18,
      address: "0xF14f4CE569cB3679E99d5059909E23B07bd2F387",
      abi: pairTokenAbi,
    },
    whitelistManager: "0x662e896e36e57606B0334708B366212c6fe0CAB6",
    stabilityFee: 10,
    interest: 0,
    ltv: 80,
    initialMax: 20,
    swapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: swapContractAbi,
    },
    reverseSwapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: reverseSwapperContractAbiV1,
    },
  },
  {
    name: "AVAX",
    contractChain: "0xa86a",
    id: 7,
    contract: {
      name: "CauldronV2",
      address: "0xc337467F7266Fa6677d8459D4bC531d056348Da8",
      abi: cauldronV2Abi,
    },
    token: {
      name: "WAVAX",
      decimals: 18,
      address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      oracleId: 7,
      oracleDatas: {
        multiply: "0x0000000000000000000000000000000000000000",
        divide: "0x0A77230d17318075983913bC2145DB16C7366156",
        decimals: 8,
      },
      abi: tokenAbi,
    },
    pairToken: {
      name: "NXUSD",
      decimals: 18,
      address: "0xF14f4CE569cB3679E99d5059909E23B07bd2F387",
      abi: pairTokenAbi,
    },
    stabilityFee: 12.5,
    interest: 0,
    ltv: 75,
    initialMax: 20,
    swapContractInfo: {
      address: "0x80f9bb12cf020fb314a5dfb948558c26127998ea",
      abi: swapContractAbi,
    },
    reverseSwapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: reverseSwapperContractAbiV1,
    },
  },
  {
    name: "WETH",
    contractChain: "0xa86a",
    id: 8,
    contract: {
      name: "CauldronV2",
      address: "0x570F08643B4B1573514244d8f0B5005718Fa3e8a",
      abi: cauldronV2Abi,
    },
    token: {
      name: "WETH",
      decimals: 18,
      address: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
      oracleId: 8,
      oracleDatas: {
        multiply: "0x0000000000000000000000000000000000000000",
        divide: "0x976B3D034E162d8bD72D6b9C989d545b839003b0",
        decimals: 8,
      },
      abi: tokenAbi,
    },
    pairToken: {
      name: "NXUSD",
      decimals: 18,
      address: "0xF14f4CE569cB3679E99d5059909E23B07bd2F387",
      abi: pairTokenAbi,
    },
    stabilityFee: 7,
    interest: 0,
    ltv: 85,
    initialMax: 20,
    swapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: swapContractAbi,
    },
    reverseSwapContractInfo: {
      address: "0x9970a82D4fA705342237d609DBD562941aE16947",
      abi: reverseSwapperContractAbiV1,
    },
  },
  {
    name: "WBTC",
    contractChain: "0xa86a",
    id: 9,
    contract: {
      name: "CauldronV2",
      address: "0x88A6414466D61b9Fb6aaFC763c1BaB6EE1462631",
      abi: cauldronV2Abi,
    },
    token: {
      name: "WBTC",
      decimals: 8,
      address: "0x50b7545627a5162F82A992c33b87aDc75187B218",
      oracleId: 9,
      oracleDatas: {
        multiply: "0x0000000000000000000000000000000000000000",
        divide: "0x2779D32d5166BAaa2B2b658333bA7e6Ec0C65743",
        decimals: 8,
      },
      abi: tokenAbi,
    },
    pairToken: {
      name: "NXUSD",
      decimals: 18,
      address: "0xF14f4CE569cB3679E99d5059909E23B07bd2F387",
      abi: pairTokenAbi,
    },
    stabilityFee: 7,
    interest: 0,
    ltv: 85,
    initialMax: 20,
    swapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: swapContractAbi,
    },
    reverseSwapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: reverseSwapperContractAbiV1,
    },
  },
  {
    name: "DAI",
    contractChain: "0xa86a",
    id: 10,
    contract: {
      name: "CauldronV2",
      address: "0x42E07D41312E752143d72Fd0daE60B301ff139De",
      abi: cauldronV2Abi,
    },
    token: {
      name: "DAI",
      decimals: 18,
      address: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
      oracleId: 10,
      oracleDatas: {
        multiply: "0x0000000000000000000000000000000000000000",
        divide: "0x51D7180edA2260cc4F6e4EebB82FEF5c3c2B8300",
        decimals: 8,
      },
      abi: tokenAbi,
    },
    pairToken: {
      name: "NXUSD",
      decimals: 18,
      address: "0xF14f4CE569cB3679E99d5059909E23B07bd2F387",
      abi: pairTokenAbi,
    },
    stabilityFee: 5,
    interest: 0,
    ltv: 90,
    initialMax: 20,
    swapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: swapContractAbi,
    },
    reverseSwapContractInfo: {
      address: "0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6",
      abi: reverseSwapperContractAbiV1,
    },
  },
];
