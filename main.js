const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, timestamp, data, previousHash = '')
    {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}


class BlockChain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0,"01/01/2017","Genesis block","0");
    }

    // return the latest block in the chain
    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }

    addBlock(newBlock)
    {
        newBlock.previousHash = this.getLatestBlock().hash;
        // recalculate the hash of the block
        newBlock.hash = newBlock.calculateHash();
        // need to push onto the block
        this.chain.push(newBlock);
    }

}

let mycoin = new BlockChain();
mycoin.addBlock(new Block(1,"10/06/2017",{amount: 12}));
mycoin.addBlock(new Block(2,"10/16/2017",{amount: 22}));

console.log(JSON.stringify(mycoin,null,4));
