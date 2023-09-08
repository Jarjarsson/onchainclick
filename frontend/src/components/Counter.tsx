import { useEffect, useState } from "react";
import {
  getClicks,
  click,
  reset,
  changeValue,
} from "../blockchain/web3/web3client";
import { connectWallet } from "../blockchain/web3/web3client";
import contractAddress from "../blockchain/constants/address";
import "../index.css";
import mainLogo from "../assets/Logo.png";
import { cropWallet } from "../utils/utils";
import Footer from "./Footer";

export default function Counter() {
  const [clicks, setClicks] = useState(0);
  const [wallet, setWallet] = useState("");
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    changeValue(setClicks);
    getClicks().then((res) => {
      setClicks(Number(res));
    });
  }, []);

  const handleSelectWallet = async () => {
    await connectWallet().then((res) => {
      setWallet(res.address);
      setConnected(res.connected);
    });
  };

  const handleIncrease = async () => {
    await click(contractAddress, wallet);
  };

  const handleReset = async () => {
    await reset(contractAddress, wallet);
  };

  return (
    <div className="flex justify-center items-center w-50 select-none h-full">
      <div>
        <div className="flex gap-3 bg-cc3/50 shadow-inner p-3">
          <a href="https://github.com/Jarjarsson/onchainbet">
            <img
              src={mainLogo}
              alt="onchainbet logo"
              className="object-fit h-[12rem]"
            ></img>
          </a>
          <div className="flex flex-col gap-2 bg-1 h-[12rem] w-0.6">
            <div className="flex items-center gap-4 bg-cc1/50 p-2 text-cc2 grow">
              <p>Number of clicks: {clicks}</p>

              <div className="flex flex-col gap-2">
                <button
                  onClick={handleReset}
                  className="bg-cc1 text-cc2 px-2 rounded-md hover:opacity-50 border-none"
                >
                  Increase
                </button>
                <button
                  onClick={handleIncrease}
                  className="bg-cc1 text-cc2 px-2 rounded-md hover:opacity-50 border-none"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="flex flex-col bg-cc1/50 gap-2 p-2 grow justify-evenly">
              <button
                onClick={handleSelectWallet}
                className="bg-cc1 text-cc2 px-2 rounded-md hover:opacity-50 border-none"
              >
                Connect wallet
              </button>
              {connected && (
                <p className="text-cc2">
                  {"Current address: " + cropWallet(wallet)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
