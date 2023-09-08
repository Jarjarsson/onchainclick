import { useEffect, useState } from 'react';
import {
  getClicks,
  click,
  reset,
  changeValue,
} from '../blockchain/web3/web3client';
import { connectWallet } from '../blockchain/web3/web3client';
import contractAddress from '../blockchain/constants/address';
import '../index.css';
import mainLogo from '../assets/Logo.png';

export default function Counter() {
  const [clicks, setClicks] = useState(0);
  const [wallet, setWallet] = useState('');
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    changeValue(setClicks);
    getClicks().then(res => {
      setClicks(Number(res));
    });
  }, []);

  const handleSelectWallet = async () => {
    await connectWallet().then(res => {
      setWallet(res.address);
      setConnected(res.connected);
    });
  };

  const handleClick = async () => {
    await click(contractAddress, wallet);
  };

  return (
    <div className="w-screen h-screen flex  justify-center items-center">
      <img src={mainLogo} className="h-[96px] w-[96px] object-cover"></img>
      <div className='flex flex-col'>
      <div className='flex items-center'>
        
          <p>Count of clicks: {clicks}</p>
        
        <div className='flex flex-col'>
          <button onClick={handleClick}>Increase</button>
          <button onClick={() => reset(contractAddress, wallet)}>Reset</button>
        </div>
      
      </div>

      <div className="flex flex-col">
        <button onClick={handleSelectWallet}>Connect wallet</button>
        {connected && (
          <p>
            Current address:
            {wallet.substring(0, 4) +
              '...' +
              wallet.substring(wallet.length - 4, wallet.length)}
          </p>
        )}
      </div>
      </div>
    </div>
  );
}
