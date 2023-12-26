import Web3 from "web3";
import { abi } from "./contract/voting.ts"; // ABI
const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
const web3 = new Web3(provider);
// const smAd = "0xcfdda80da2ae72cc2f4293dd78ddb41cc13337ed";
const smAd = "0xe9c58dd2ea77058c0561d772000506258c14f4fb";

const votingContract = new web3.eth.Contract(abi, smAd);
export {web3, votingContract};