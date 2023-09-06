import Web3, { Web3Eth } from 'web3';
import { Contract } from 'web3-eth-contract';
import abi from '../constants/abi';
import contractAddress from '../constants/address';
import { Window } from '../../type';
import { ethers } from 'ethers';
import { useState } from 'react';

// const web3 = new Web3('http://localhost:8545');
const web3 = new Web3(
  'wss://eth-goerli.g.alchemy.com/v2/Ka3TSKFVasQ8sQNXkcnEaaO69XIO0nUW'
);

const clicker = new web3.eth.Contract(abi, contractAddress);

const click = async (contractAddress: string, address: string) => {
  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    data: clicker.methods.click().encodeABI(),
  };

  //sign the transaction
  try {
    const txHash = await (window as any).ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    return {
      status: 'Success! Transaction hash: ' + txHash,
    };
  } catch (error) {
    return {
      status: '😥 Oh no something went wrong',
    };
  }
};

const getClicks = async () => {
  const data = (await clicker.methods.clickedCount().call()) as bigint;
  return Number(data);
};

const reset = async (contractAddress: string, address : string) => {

  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    data: clicker.methods.reset().encodeABI(),
  };

  //sign the transaction
  try {
    const txHash = await (window as any).ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    return {
      status: 'Success! Transaction hash: ' + txHash,
    };
  } catch (error) {
    return {
      status: '😥 Oh no something went wrong',
    };
  }
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

export { click, getClicks, connectWallet, reset };
