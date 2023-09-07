// const abi = [
//   {
//     "inputs": [],
//     "name": "click",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "clickedCount",
//     "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "reset",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   }
// ]

// export default abi

const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "Count",
    type: "event",
  },
  {
    inputs: [],
    name: "click",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "clickedCount",
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
    inputs: [],
    name: "reset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export default abi;
