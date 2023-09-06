import Web3, { Web3Eth } from 'web3';
import { Contract } from 'web3-eth-contract';
import abi from '../constants/abi';
import contractAddress from '../constants/address';
import { Window } from '../../type';

// const web3 = new Web3('http://localhost:8545');
const web3 = new Web3(
  'wss://eth-goerli.g.alchemy.com/v2/Ka3TSKFVasQ8sQNXkcnEaaO69XIO0nUW'
);

const clicker = new web3.eth.Contract(abi, contractAddress);

const click = () => {
  clicker.methods.click().call().then(console.log);
};

const getClicks = async () => {
  const data = (await clicker.methods.clickedCount().call()) as bigint;
  return Number(data);
};

const reset = () => {
  clicker.methods.reset().call().then(console.log);
};

const connectWallet = async () => {
  if ((window as any).ethereum) {
    try {
      const addressArray = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
      });
      const obj = {
        status: 'Successfully connected!',
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: '',
        status: 'ERROR!',
      };
    }
  } else {
    return {
      address: '',
      status: 'You need to install metamask noob',
    };
  }
};

export { click, getClicks, connectWallet };
