const { Node } = require('./node');
const { doubly_linked_list } = require('./doubly-linked-list');

dll1 = new doubly_linked_list();
dll2 = new doubly_linked_list();
dll3 = new doubly_linked_list();

dll1.insertHead(4);
dll1.insertHead(5);
dll1.insertHead(6);
dll1.insertTail(7);
console.log(dll1.showList());