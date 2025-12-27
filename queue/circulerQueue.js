/**
 * Circular Queue Implementation
 *
 * A Circular Queue is a linear data structure where the last position
 * is connected back to the first position to make a circle.
 *
 * This implementation uses a fixed-size array and modulo arithmetic
 * to efficiently utilize space.
 */
class CircularQueue {
  /**
   * @param {number} size - Maximum size of the circular queue
   */
  constructor(size) {
    this.items = new Array(size);
    this.size = size;
    this.front = -1;
    this.rear = -1;
  }

  /**
   * Checks if the queue is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this.front === -1;
  }

  /**
   * Checks if the queue is full
   * @returns {boolean}
   */
  isFull() {
    return (
      (this.front === 0 && this.rear === this.size - 1) ||
      (this.rear + 1) % this.size === this.front
    );
  }

  /**
   * Adds an element to the rear of the queue
   * @param {any} value
   */
  enqueue(value) {
    if (this.isFull()) {
      console.log('Queue is full');
      return;
    }

    // First insertion
    if (this.front === -1) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.size;
    this.items[this.rear] = value;
  }

  /**
   * Removes and returns the front element from the queue
   * @returns {any|null}
   */
  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return null;
    }

    const item = this.items[this.front];

    // Only one element present
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    return item;
  }

  /**
   * Returns the front element without removing it
   * @returns {any|null}
   */
  peek() {
    return this.isEmpty() ? null : this.items[this.front];
  }

  /**
   * Prints the queue elements from front to rear
   */
  print() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return;
    }

    let result = [];
    let i = this.front;

    while (true) {
      result.push(this.items[i]);
      if (i === this.rear) break;
      i = (i + 1) % this.size;
    }

    console.log(result.join(' '));
  }
}

const cq = new CircularQueue(5);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.print();   // 10 20 30 40

cq.dequeue(); // removes 10
cq.dequeue(); // removes 20

cq.enqueue(50);
cq.enqueue(60);
cq.print();   // 30 40 50 60
