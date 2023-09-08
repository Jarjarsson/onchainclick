import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cc3/30 flex justify-around text-cc2 items-center p-2  ">
      <p className="items-center">Copyright | Developoors | 2023</p>

      <div className="flex gap-2">
        <p>
          <a
            href="https://goerli.etherscan.io/address/0xb297c4e6da21832e7c529011bc3b9411f5f3501a"
            target="_blank"
          >
            View contract address |
          </a>
        </p>
        <p>Network: Goerli testnet </p>
      </div>
    </footer>
  );
};
// Contract address:
export default Footer;
