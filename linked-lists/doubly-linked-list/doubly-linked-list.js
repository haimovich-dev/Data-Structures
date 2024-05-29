const { Node } = require("./node");

class doubly_linked_list{
    #head;
    #size;
    constructor(){
        this.#head = null;
        this.#size = 0; 
    }
    //insertion operations
    insertHead(data){
        this.#size++;
        if(!this.#head){
            this.#head = new Node(data);
            return;
        }
        let node = new Node(data);
        this.#head.setPrev(node);
        node.setNext(this.#head);
        this.#head = node;
    }
    insertTail(data){
        this.#size++;
        if(!this.#head){
            this.#head = new Node(data);
            return;
        }
        let current = this.#head;
        while(current){
            if(!current.getNext()){
                let node = new Node(data,null,current);
                current.setNext(node);
                return;
            }
            current = current.getNext();
        }
    }
    insertBeforeIndex(data,index){
        if(index > 0 && index >= this.#size){
            console.error("Index out of range");
            return;
        }
        let node = new Node(data);
        if(index==0){
            node.setNext(this.#head);
            this.#head = node;
            this.#size++;
            return;
        }
        let current = this.#head.getNext();
        let cnt = 1;
        while(current){
            if(index == cnt){
                let node_next = current;
                let node_prev = current.getPrev();

                node.setNext(node_next);
                node.setPrev(node_prev);

                current.getPrev().setNext(node);
                current.setPrev(node);
                
                this.#size++;
                return;
            }
            cnt++;
            current = current.getNext();
        }
    }
    insertAfterIndex(data,index){
        if(index > 0 && index >= this.#size){
            console.error("Index out of range");
            return;
        }
        let node = new Node(data);
        let current = this.#head;
        let cnt = 0;
        while(current){
            if(index == cnt){
                node.setNext(current.getNext());
                node.setPrev(current);
                current.setNext(node);

                this.#size++;
                return;

            }
            current = current.getNext();
            cnt++;
        }

    }

    //show list
    showList(){
        let current = this.#head;
        let str = `null < ${this.#head.getData()} <-`;
        while(current){
            current = current.getNext();
            if(current){
                str += `> ${current.getData()} <-`
            }else{
                str += `> null\nTotal Size: ${this.#size}`;
                return str;
            }
        }
        return str;
    }
}

module.exports = { doubly_linked_list };