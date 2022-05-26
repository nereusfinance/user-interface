export default [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MIM",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIM3POOL",
    outputs: [
      {
        internalType: "contract CurvePool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TETHER",
    outputs: [
      {
        internalType: "contract TetherToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "degenBox",
    outputs: [
      {
        internalType: "contract IBentoBoxV1",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "fromToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "toToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shareToMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareFrom",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "extraShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareReturned",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "fromToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "toToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "refundTo",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shareFromSupplied",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareToExact",
        type: "uint256",
      },
    ],
    name: "swapExact",
    outputs: [
      {
        internalType: "uint256",
        name: "shareUsed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareReturned",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "threecrypto",
    outputs: [
      {
        internalType: "contract IThreeCrypto",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
