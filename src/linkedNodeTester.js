;l.9pvar LinkedNode = require("./modules/LinkedNode");

let node = new LinkedNode(1);
node.appendToTail(2);
node.appendToTail(3);
node.appendToFront(0);
node.appendToFront(-1);
node.appendToFront(-2);

console.log('\n----original node----\n');
console.log(JSON.stringify(node));
console.log('\n-----------JSON.stringify(node.deleteNode(node, 3)-----------\n');
console.log(JSON.stringify(node.deleteNode(node, 3)));
console.log('\n-----------node.deleteMiddleNode(new LinkedNode(3))-----------\n');
console.log(node.deleteMiddleNode(new LinkedNode(3)));
console.log('\n-----------JSON.stringify(node.deleteLastNode())-----------\n');
node.appendToTail(3);
console.log(JSON.stringify(node.deleteLastNode()));
console.log(JSON.stringify(node));
console.log(JSON.stringify(node.deleteLastNode()));
console.log(JSON.stringify(node));

console.log('\n-----------deleteFirstNode()-----------\n');
node.appendToFront(-3);
console.log(JSON.stringify(node));

console.log(node.deleteFirstNode());


console.log(JSON.stringify(node));

console.log(node.getHeadNode().data);
console.log(node.getTailNode().data);




let n = new LinkedNode(100);
n.appendToTail(4);
n.appendToTail(6);
n.appendToTail(9);
n.appendToTail(11);
n.appendToTail(13);
n.appendToFront(0);
n.appendToFront(-11);
n.appendToFront(-12);
n.appendToFront(122);

console.log("end--------------");
console.log("This is n: "+JSON.stringify(n));
console.log(n.search(-1));

console.log(n.maximum());
console.log(n.minimum());

//console.log(Number.MIN_SAFE_INTEGER);

//console.log(n.search(11));
//reconsole.log(n.prev);
