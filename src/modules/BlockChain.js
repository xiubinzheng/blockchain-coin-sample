
var Block  = require("./Block");

class BlockChain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty =2;
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
        //newBlock.hash = newBlock.calculateHash();
        newBlock.mineBlock(this.difficulty);
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

module.exports = BlockChain;
