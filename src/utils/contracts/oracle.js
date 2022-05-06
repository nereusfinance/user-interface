export default [
  {
    name: "AVAXOracle",
    id: 1,
    contractChain: "0xa869",
    address: "0x3FB913D0c17AD4e8e5aEFCcA97B9dDEaC403cDc2",
    abi: [
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "get",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "multiply", type: "address" },
          { internalType: "address", name: "divide", type: "address" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
        ],
        name: "getDataParameter",
        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peek",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peekSpot",
        outputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    name: "ETHOracle",
    id: 2,
    contractChain: "0xa869",
    address: "0xf534d31BdB86F658925c64446c50f69CF485E6d9",
    abi: [
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "get",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "multiply", type: "address" },
          { internalType: "address", name: "divide", type: "address" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
        ],
        name: "getDataParameter",
        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peek",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peekSpot",
        outputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    name: "BTCOracle",
    id: 3,
    contractChain: "0xa869",
    address: "0x0eD8515D4B74f281BC1A13e9Ed49a712369ae916",
    abi: [
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "get",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "multiply", type: "address" },
          { internalType: "address", name: "divide", type: "address" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
        ],
        name: "getDataParameter",
        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peek",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peekSpot",
        outputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    name: "DAIOracle",
    id: 4,
    contractChain: "0xa869",
    address: "0x8AB969a41b658Ee9981c2d5AA61EDA98a3a860Cc",
    abi: [
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "get",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "multiply", type: "address" },
          { internalType: "address", name: "divide", type: "address" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
        ],
        name: "getDataParameter",
        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peek",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peekSpot",
        outputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    name: "WXTOracle",
    id: 5,
    contractChain: "0xa869",
    address: "0x42d3d4b15822b1b7976BF2711514E18513Ab8a49",
    abi: [
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "get",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "multiply", type: "address" },
          { internalType: "address", name: "divide", type: "address" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
        ],
        name: "getDataParameter",
        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peek",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peekSpot",
        outputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    name: "WXTOracle",
    id: 6,
    contractChain: "0xa86a",
    address: "0xd2276a18E7bF769B5C2079e4A94C929a68a2D676",
    abi: [
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "get",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "multiply", type: "address" },
          { internalType: "address", name: "divide", type: "address" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
        ],
        name: "getDataParameter",
        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peek",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peekSpot",
        outputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    name: "AVAXOracle",
    id: 7,
    contractChain: "0xa86a",
    address: "0x9141E3c09268274696c62C7bEE8dE72cbd4980Be",
    abi: [
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "get",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "multiply", type: "address" },
          { internalType: "address", name: "divide", type: "address" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
        ],
        name: "getDataParameter",
        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peek",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peekSpot",
        outputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    name: "ETHOracle",
    id: 8,
    contractChain: "0xa86a",
    address: "0xBAa61A86B99214323f0104089430Eb3454b0291e",
    abi: [
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "get",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "multiply", type: "address" },
          { internalType: "address", name: "divide", type: "address" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
        ],
        name: "getDataParameter",
        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peek",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peekSpot",
        outputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    name: "BTCOracle",
    id: 9,
    contractChain: "0xa86a",
    address: "0x24ed1513d790f8F9A1A177F53915c45d4F590349",
    abi: [
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "get",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "multiply", type: "address" },
          { internalType: "address", name: "divide", type: "address" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
        ],
        name: "getDataParameter",
        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peek",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peekSpot",
        outputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  {
    name: "DAIOracle",
    id: 10,
    contractChain: "0xa86a",
    address: "0xA5FEd9f9da2c2bd3c5b6ED495936b9A2EC7705ff",
    abi: [
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "get",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "multiply", type: "address" },
          { internalType: "address", name: "divide", type: "address" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
        ],
        name: "getDataParameter",
        outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peek",
        outputs: [
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
        name: "peekSpot",
        outputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
];
