import React from 'react';
import logo from './logo.svg';
import { getClicks, click } from './blockchain/web3/web3client';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
export default App;
