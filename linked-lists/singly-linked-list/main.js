const { Node } = require('./node');
const { linkedList } = require('./singly-linked-list');

ll1 = new linkedList();
ll2 = new linkedList();


ll1.insertLast(100);
ll1.insertLast(200);
ll1.insertLast(300);
ll1.insertLast(400);
ll1.insertLast(500);

ll1.showList();
console.log(ll1.size);
