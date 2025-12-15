class Queue {
    constructor(){
        this.queue = {};
        this.rearIndex = 0;
        this.frontIndex = 0;
    }
    enqueue(value){
        this.queue[this.rearIndex] = value;
        this.rearIndex++;
    }
    isEmpty(){
        return this.rearIndex === this.frontIndex;
    }
    dequeue(){
        if(this.isEmpty()) return 'Queue is empty';
        const item = this.queue[this.frontIndex];
        delete this.queue[this.frontIndex];
        this.frontIndex++;
        return item;
    }
    front(){
        return this.isEmpty() ? 'Queue is empty' : this.queue[this.frontIndex];
    }
    rear(){
        return this.isEmpty() ? 'Queue is empty' : this.queue[this.rearIndex-1];
    }
    size(){
        return this.rearIndex-this.frontIndex;
    }
    print(){
        console.log(this.queue);
    }
}

const queue = new Queue;
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
console.log(queue.dequeue());
console.log(queue.size());
queue.print();