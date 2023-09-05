import React, { useEffect, useState } from 'react';
import { getClicks } from '../blockchain/web3/web3client';
import { connectWallet } from '../blockchain/web3/web3client';
import { connect } from 'http2';

type Props = {};

export default function Counter({}: Props) {
  const [clicks, setClicks] = useState(0)
  const [wallets, setWallets] = useState<string[]>([])

  useEffect(() => {
    getClicks().then(res => {
      setClicks(res);
    });
  }, []);

  return (
    <div>
      <button onClick={() => getClicks()}>Click</button> 
      <br/>
      {clicks}
      <br/>
      <button>Reset</button>
      <button onClick={() => connectWallet()}>Connect to Wallee</button>
      <ul>
        {/* {wallets.map(w=>{
          <li>{w}</li>
        })} */}
      </ul>
    </div>
  );
}
