const {Node} = require('./node');

class linkedList{
    //create linked list
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //insert head node
    insertHead(data){
        this.head = new Node(data,this.head);
        this.size++;
    }
    //insert tail node
    insertLast(data){
        let node = new Node(data);
        this.size++;
        if(!this.head){
            this.head = node;
            return;
        }
        let current = this.head;
        while(current){
            if(!current.getNext()){
                current.setNext(node);
                return;
            }
            current=current.getNext();
        }
    }

    //inser after given index
    insertAfterIndex(data,index){
        if(index > 0 && index >= this.size){
            console.error("Index out of range");
            return;
        }else{
            let cnt = 0;
            let previous = this.head;
            let node = new Node(data);
            let next = previous.getNext();

            while(previous){
                if(index==cnt){
                    previous.setNext(node);
                    node.setNext(next);
                    this.size++;
                    return;
                }
                previous = previous.getNext();
                next = next.getNext();
                cnt++;
            }
        }
    }
    //insert before given index
    insertBeforeIndex(data,index){
        if(index > 0 && index >= this.size){
            console.log("Index out of range");
            return;
        }else{
            let cnt = 0;
            let previous = this.head;
            let current = new Node(data);
            let next = previous.getNext();

            while(previous){
                if(index-1==cnt){
                    previous.setNext(current);
                    current.setNext(next);
                    this.size++;
                    return;
                }
                previous = previous.getNext();
                next = next.getNext();
                cnt++;
            }
        }
    }

    //remove node at index
    removeAt(index){
        if(index > 0 && index >= this.size){
            console.log("index out of range");
            return;
        }else{
            let cnt = 0;
            let current = this.head;
            let previous;
            while(current){
                previous = current;
                current = current.getNext();
                if(index-1==cnt){
                    previous.setNext(current.getNext());
                    this.size--;
                }
                cnt++;
            }
        }
    }
    
    clearList(){
        this.head = null;
        this.size = 0;
    }

    getNodeAt(index){
        if(index > 0 && index >= this.size){
            console.error("Index out of range");
            return;
        }
        let current = this.head;
        let cnt = 0;
        while(current){
            if(cnt==index){
                return current;
            }
            current = current.getNext();
            cnt++;
        }
    
    }
    replaceAt(data,index){
        let current = this.head;
        let cnt = 0;

        while(current){
            if(index===cnt){
                let next = current.getNext();
                current.setValue(data);
                return;
            }
            current = current.getNext();
            cnt++;
        }
        console.error("Index out of range");
    }
    showList(){
        let currentNode = this.head;
        let str = ``;
        while(currentNode){
            str += `${currentNode.getValue()} > `;
            currentNode = currentNode.getNext();
        }
        console.log(str+`null`);
    }
};

module.exports = { linkedList }