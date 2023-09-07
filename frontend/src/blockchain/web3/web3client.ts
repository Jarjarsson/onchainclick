import Web3 from 'web3';
import abi from '../constants/abi';
import contractAddress from '../constants/address';

// npm i web3-eth-contract

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
  /* Catch the bigInt and transform it into a number */

  return parseInt(data.toString()[0]);
};

const reset = async (contractAddress: string, address: string) => {
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

const changeValue = (callback: (event: number) => void) => {
  clicker.events.Count().on('data' as any, (event: any) => {
    callback(Number(event.returnValues.count));
  });
};

export { click, getClicks, connectWallet, reset, changeValue };
