var BlockChain = require("./modules/BlockChain");
var Block  = require("./modules/Block");
var LinkedNode = require("./modules/LinkedNode");

let node = new LinkedNode(1);
node.appendToTail(2);
node.appendToTail(3);
node.appendToTail(4);
node.appendToTail(5);

console.log(JSON.stringify(node));
console.log('----------------');
console.log(JSON.stringify(node.deleteNode(node, 19)));
console.log('----original node----');
console.log(JSON.stringify(node));
console.log('----Zzzzzzzzzz----');
node.deleteMiddleNode(new LinkedNode(3));
console.log(node.deleteMiddleNode(new LinkedNode(3)));

var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
console.log(SHA256("Message"));
var CryptoJs = require("crypto-js");
console.log(CryptoJs.HmacSHA1("Message","Key"));


let mycoin = new BlockChain();
console.log("mining block 1 ....");
mycoin.addBlock(new Block(1,"10/06/2017",{amount: 12}));
console.log("mining block 2 ....");
mycoin.addBlock(new Block(2,"10/16/2017",{amount: 22}));
console.log("mycoin.isChainValid() : "+mycoin.isChainValid());
// let try to tamper with our block chain
mycoin.chain[1].data = {amount: 3000};
// lets be clever and reclaculte the hash
// this will still make the output to be false, since we have broken the relation with the previous block
mycoin.chain[1].calculateHash();
console.log("mycoin.isChainValid() : "+mycoin.isChainValid());

//console.log(JSON.stringify(mycoin,null,4));
