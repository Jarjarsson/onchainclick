import React, { useEffect, useState } from 'react';
import { getClicks, click } from '../blockchain/web3/web3client';
import { connectWallet } from '../blockchain/web3/web3client';
import { connect } from 'http2';

type Props = {};

export default function Counter({}: Props) {
  const [clicks, setClicks] = useState(0)
  const [wallet, setWallet] = useState('')

  useEffect(() => {
    getClicks().then(res => {
      setClicks(res);
    });
  }, []);

  const handleSelectWallet = async()=>{
    await connectWallet().then(res=>{
      setWallet(res.address)
    })
  }

  return (
    <div>
      <button onClick={() => getClicks()}>Click</button> 
      <button onClick={() => click()}>Click to increase</button>
      <br/>
      {clicks}
      <br/>
      <button>Reset</button>
      <button onClick={handleSelectWallet}>Connect to Wallee</button>
      <p>
        Currently connected address: {wallet}
      </p>
    </div>
  );
}
