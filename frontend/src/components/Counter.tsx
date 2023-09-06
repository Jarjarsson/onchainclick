import React, { useEffect, useState } from 'react';
import { getClicks, click, reset } from '../blockchain/web3/web3client';
import { connectWallet } from '../blockchain/web3/web3client';
import { connect } from 'http2';
import contractAddress from '../blockchain/constants/address';

type Props = {};

export default function Counter({}: Props) {
  const [clicks, setClicks] = useState(0);
  const [wallet, setWallet] = useState('');

  useEffect(() => {
    getClicks().then(res => {
      setClicks(res);
    });
  }, []);

  const handleSelectWallet = async () => {
    await connectWallet().then(res => {
      setWallet(res.address);
    });
  };

  const handleClick = async () => {
    await click(contractAddress, wallet);
  };

  return (
    <div>
      <button onClick={handleClick}>Click to increase</button>
      <br />
      {clicks}
      <br />
      <button onClick={() => reset(contractAddress, wallet)}>Reset</button>
      <button onClick={handleSelectWallet}>Connect to Wallee</button>
      <p>Currently connected address: {wallet}</p>
    </div>
  );
}
