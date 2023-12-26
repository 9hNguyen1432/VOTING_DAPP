import Web3 from "web3";
import { abi } from "./contract/voting.ts"; // ABI
const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
const web3 = new Web3(provider);
// const smAd = "0xcfdda80da2ae72cc2f4293dd78ddb41cc13337ed";
const smAd = "0xd221f5ae9efa0cf4aea9e8e75e8e7698ec701dd0";

const votingContract = new web3.eth.Contract(abi, smAd);
export {web3, votingContract};