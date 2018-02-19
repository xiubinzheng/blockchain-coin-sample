var LinkedNode = require("./modules/LinkedNode");

let node = new LinkedNode(1);
node.appendToTail(2);
node.appendToTail(3);
node.appendToFront(0);
node.appendToFront(-1);
node.appendToFront(-2);

console.log('----original node----\n');
console.log(JSON.stringify(node));
console.log('----------------------\n');
console.log('----------------JSON.stringify(node.deleteNode(node, 3))-----------\n');
console.log(JSON.stringify(node.deleteNode(node, 3)));
console.log('----------------------\n');

console.log('----------------------\n');
console.log(node.deleteMiddleNode(new LinkedNode(3)));
console.log('----------------------\n');

let n = new LinkedNode(1);
n.appendToTail(4);
n.appendToTail(6);
n.appendToTail(9);
n.appendToTail(11);
n.appendToTail(13);
n.appendToFront(0);
n.appendToFront(-11);
n.appendToFront(-12);

console.log("end--------------");

//console.log(n.search(11));

//reconsole.log(n.prev);

