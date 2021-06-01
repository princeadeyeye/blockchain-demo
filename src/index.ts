import Chain from './chain';
import Wallet from './wallet';


const satoshi = new Wallet();
const bob = new Wallet();
const alice = new Wallet();

satoshi.sendMoney(50, bob.publicKey);
bob.sendMoney(50, alice.publicKey);
alice.sendMoney(5, satoshi.publicKey);

console.log(Chain.instance.chain)