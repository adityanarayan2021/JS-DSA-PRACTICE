class PriorityQueue {

  constructor() {
    this.heap = [];
  }

  // Get parent indices
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  // Get left child indices
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  // Get right child indices
  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  // Check if indices exist
  hasParent(i) {
    return this.getParentIndex(i) >= 0;
  }
  hasLeftChild(i) {
    return this.getLeftChildIndex(i) < this.heap.length;
  }
  hasRightChild(i) {
    return this.getRightChildIndex(i) < this.heap.length;
  }

  // Get values at indices
  parent(i) {
    return this.heap[this.getParentIndex(i)];
  }
  leftChild(i) {
    return this.heap[this.getLeftChildIndex(i)];
  }
  rightChild(i) {
    return this.heap[this.getRightChildIndex(i)];
  }

  // Swap elements
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Add element to the queue
  enqueue(value, priority) {
    const node = { value, priority };
    this.heap.push(node);
    this.heapifyUp();
  }

  // Remove and return highest priority element
  dequeue() {
    if (this.isEmpty()) return null;

    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();

    return item.value;
  }

  // View highest priority element without removing
  peek() {
    return this.isEmpty() ? null : this.heap[0].value;
  }

  // Check if queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Get size of queue
  size() {
    return this.heap.length;
  }

  // Maintain heap property upward
  heapifyUp() {
    let index = this.heap.length - 1;

    while (
      this.hasParent(index) &&
      this.parent(index).priority > this.heap[index].priority
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  // Maintain heap property downward
  heapifyDown() {
    let index = 0;

    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);

      if (
        this.hasRightChild(index) &&
        this.rightChild(index).priority < this.leftChild(index).priority
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index].priority < this.heap[smallerChildIndex].priority) {
        break;
      }

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  bottomUp(){
    const index = this.heap.length-1;
    const element = this.heap[index];
    while(index > 0){
      let parentIndex = this.getParentIndex(index);
      let parentElement = this.parent(parentIndex);
      if(parentElement.priority <= element.priority) break;
      this.heap[parentIndex] = element;
      this.heap[index] = parentElement;
      index = parentIndex;
    }
  }

  sinkDown(){
    let index = 0;
    while(true){
      let leftIndex = this.getLeftChildIndex(index);
      let rightIndex = this.getRightChildIndex(index);
      let smallest = index;
      if(leftIndex < this.heap.length && this.heap[leftIndex].priority < this.heap[smallest].priority){
       smallest = leftIndex;
      }
       if(rightIndex < this.heap.length && this.heap[rightIndex].priority < this.heap[smallest].priority){
       smallest = rightIndex;
      }
      if(smallest === index) break;
      index = smallest;
    }
  }

  // Display all elements
  display() {
    console.log(this.heap.map((node) => `${node.value} (priority: ${node.priority})`).join(", "));
  }
}

// Example Usage
const pq = new PriorityQueue();

console.log("Adding elements to priority queue:");
pq.enqueue("Task A", 3);
pq.enqueue("Task B", 1);
pq.enqueue("Task C", 2);
pq.enqueue("Task D", 5);
pq.enqueue("Task E", 1);

console.log("\nCurrent queue:");
pq.display();

console.log("\nDequeuing elements by priority:");
while (!pq.isEmpty()) {
  console.log(`Dequeued: ${pq.dequeue()}`);
}

// Practical example: Emergency room triage
console.log("\n--- Hospital Emergency Room Example ---");
const er = new PriorityQueue();

er.enqueue("Patient with headache", 5);
er.enqueue("Patient with broken arm", 3);
er.enqueue("Patient with heart attack", 1);
er.enqueue("Patient with flu", 4);
er.enqueue("Patient with severe bleeding", 1);

console.log("\nPatients in waiting room:");
er.display();

console.log("\nTreating patients by priority:");
while (!er.isEmpty()) {
  console.log(`Now treating: ${er.dequeue()}`);
}
