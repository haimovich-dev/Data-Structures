class Node{
    #value
    #next
    constructor(value,next=null){
        this.#value = value;
        this.#next = next;
    }
    getValue(){
        return this.#value;
    }
    setValue(value){
        this.#value = value;
    }
    getNext(){
        return this.#next;
    }
    setNext(next){
        this.#next = next;
    }
    showNode(){
        return `${this.#value} > ${this.#next}`;
    }
};

module.exports = { Node };