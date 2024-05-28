const { Node } = require("./node");

class doubly_linked_list{
    constructor(){
        this.head = null;
        this.size = 0; 
    }
    //insertion operations
    insertHead(data){
        this.size++;
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        let node = new Node(data);
        this.head.setPrev(node);
        node.setNext(this.head);
        this.head = node;
    }
    insertTail(data){
        this.size++;
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        let current = this.head;
        while(current){
            if(!current.getNext()){
                let node = new Node(data,null,current);
                current.setNext(node);
                return;
            }
            current = current.getNext();
        }
    }
    //show list
    showList(){
        let current = this.head;
        let str = `null < ${this.head.getData()} >`;
        while(current){
            current = current.getNext();
            if(current){
                str += ` < ${current.getData()} >`
            }else{
                str += ` null`;
                return str;
            }
        }
        return str;
    }
}

module.exports = { doubly_linked_list };