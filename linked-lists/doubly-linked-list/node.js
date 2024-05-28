class Node{
    constructor(data,next=null,prev=null){
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
    //getters
    getPrev(){
        return (this.prev)?this.prev:undefined;
    }
    getNext(){
        return (this.next)?this.next:undefined;
    }
    getData(){
        return this.data;
    }
    //setters
    setPrev(prev){
        this.prev = prev;
    }
    setNext(next){
        this.next = next;
    }
    setData(data){
        this.data = data;
    }
    //show
    show(){
        const prevData = (this.prev)?this.prev.getData():"_";
        const nextData = (this.next)?this.next.getData():"_";
        console.log(`${prevData} < ${this.data} > ${nextData}`);
    }
}

module.exports = { Node };