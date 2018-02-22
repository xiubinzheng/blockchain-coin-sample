var LinkedList = require("./modules/LinkedList");

let node = new LinkedList(1);
node.addToHead(16);
node.addToHead(12);
node.addToHead(10);


//node.addToHead(node);
//node.addToHead(node);
console.log(node);
console.log(node.next.head);