const { Node } = require('./node');
const { linkedList } = require('./singly-linked-list');

ll1 = new linkedList();
ll2 = new linkedList();


ll1.insertHead(100);
ll1.insertHead(200);
ll1.insertHead(300);
ll1.insertLast(400);
ll1.insertLast(500);

ll1.insertAfterIndex(10,1);
ll1.insertBeforeIndex(20,2);

ll1.removeAt(6);

ll1.replaceAt(1,0)

console.log(ll1.getNodeAt(0).getValue());

ll1.showList();

ll1.clearList();

ll1.showList();

