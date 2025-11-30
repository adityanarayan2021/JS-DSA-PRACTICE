class Queue {
    constructor(){
        // initializing the queue.
        this.queueItems = [];
    }
    // add an element at the rear/Tail.
    enqueue(element) {
      this.queueItems.push(element);
    }
    // remove and element from the head/front.
    dequeue(){
     return this.queueItems.shift();
    }
    // check where queue is empty or not.
    isEmpty(){
     return this.queueItems.length === 0;
    }
    // get first element from the queue.
    peek(){
        if(!this.isEmpty){
            return this.queueItems[0];
        }
    }
    // get the size of the queue.
    size(){
    return this.queueItems.length;
    }
    // remove all the elements of queue.
    clear(){
      this.queueItems = [];
    }
    // print all elemnets of queue.
    printQueue(){
     console.log(this.queueItems.toString()|| []);
    }
}

const queue = new Queue()
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(24);
// queue.dequeue();
console.log(queue.size());
queue.clear();
// queue.printQueue();
console.log(queue.isEmpty())