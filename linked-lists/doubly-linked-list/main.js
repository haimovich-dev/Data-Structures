const { Node } = require('./node');
const { doubly_linked_list } = require('./doubly-linked-list');

dll1 = new doubly_linked_list();

dll1.insertHead(4);
dll1.insertHead(5);
dll1.insertHead(6);
dll1.insertTail(7);

dll1.insertBeforeIndex(10,0);
dll1.insertAfterIndex(12,4);

dll1.insertTail(90);

console.log(dll1.showList());