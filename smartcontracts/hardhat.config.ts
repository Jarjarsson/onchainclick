import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";

const ALCHEMY_API_KEY = "do2Q1a5e3JFBvrkk1WOH4HAK3XvVpczJ";
const GOERLI_PRIVATE_KEY =
  "ba1cabb173d1e0d386c03e0e6fd52fcd914bdec9fd3142ac310471b93621c667";
const API_URL =
  "https://eth-goerli.g.alchemy.com/v2/do2Q1a5e3JFBvrkk1WOH4HAK3XvVpczJ";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: API_URL,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};

export default config;
