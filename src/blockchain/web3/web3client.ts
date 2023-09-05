import Web3, { Web3Eth } from 'web3';
import { Contract } from 'web3-eth-contract';
import abi from '../constants/abi';
import contractAddress from '../constants/address';

const web3 = new Web3('http://localhost:8545');

const clicker = new web3.eth.Contract(abi, contractAddress);

// clicker.methods
//   .clickedCount()
//   .call()
//   .then((count: number) => {});
