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

    isChainValid(){
        // we are not going to start with block 0, since block 0 is genisis block.
        for(let i=1;i<this.chain.length;i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            // check if these blocks are properly linked together
            if(currentBlock.hash !==currentBlock.calculateHash()){
                return false;
            }

            // check if the currentBlocks previous hash matches the previous blocks hash
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }

            return true;
        }
    }

}

let mycoin = new BlockChain();
mycoin.addBlock(new Block(1,"10/06/2017",{amount: 12}));
mycoin.addBlock(new Block(2,"10/16/2017",{amount: 22}));


console.log("mycoin.isChainValid() : "+mycoin.isChainValid());

// let try to tamper with our block chain
mycoin.chain[1].data = {amount: 3000};

// lets be clever and reclaculte the hash
// this will still make the output to be false, since we have broken the relation with the previous block
mycoin.chain[1].calculateHash();


console.log("mycoin.isChainValid() : "+mycoin.isChainValid());

//console.log(JSON.stringify(mycoin,null,4));
