class Node{
    constructor(value,next=null){
        this.value = value;
        this.next = next;
    }
    getValue(){
        return this.value;
    }
    setValue(value){
        this.value = value;
    }
    getNext(){
        return this.next;
    }
    setNext(next){
        this.next = next;
    }
    showNode(){
        return `Value:${this.value}\nNext:${this.next}`;
    }
};

module.exports = { Node };