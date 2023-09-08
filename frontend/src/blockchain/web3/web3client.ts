import Web3 from 'web3';
import abi from '../constants/abi';
import contractAddress from '../constants/address';

const web3 = new Web3(
  'wss://eth-goerli.g.alchemy.com/v2/Ka3TSKFVasQ8sQNXkcnEaaO69XIO0nUW'
);

const clicker = new web3.eth.Contract(abi, contractAddress);

const click = async (contractAddress: string, address: string) => {
  const transactionParameters = {
    to: contractAddress,
    from: address,
    data: clicker.methods.click().encodeABI(),
  };

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
      status: 'Something went wrong',
    };
  }
};

const getClicks = async () => {
  const data = (await clicker.methods.clickedCount().call()) as any;
  return data;
};

const reset = async (contractAddress: string, address: string) => {
  const transactionParameters = {
    to: contractAddress,
    from: address,
    data: clicker.methods.reset().encodeABI(),
  };

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
      status: 'Something went wrong',
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
        connected: true,
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: '',
        connected: false,
      };
    }
  } else {
    return {
      address: '',
      connected: false,
    };
  }
};

const changeValue = (callback: (event: number) => void) => {
  clicker.events.Count().on('data' as any, (event: any) => {
    callback(Number(event.returnValues.count));
  });
};

export { click, getClicks, connectWallet, reset, changeValue };
