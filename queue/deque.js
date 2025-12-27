/**
 * Deque (Double Ended Queue)
 *
 * A Deque allows insertion and deletion of elements
 * from both the front and the rear ends.
 *
 * This implementation uses an object to store elements
 * and two indices (`frontIndex` and `rearIndex`) to
 * achieve O(1) time complexity for all operations.
 */
class Deque {
  constructor() {
    /** @type {Object<number, any>} */
    this.items = {};
    this.frontIndex = 0;
    this.rearIndex = 0;
  }

  /**
   * Adds an element to the front of the deque
   * @param {any} value - Value to add
   */
  addFront(value) {
    this.frontIndex--;
    this.items[this.frontIndex] = value;
  }

  /**
   * Adds an element to the rear of the deque
   * @param {any} value - Value to add
   */
  addRear(value) {
    this.items[this.rearIndex] = value;
    this.rearIndex++;
  }

  /**
   * Removes and returns the front element
   * @returns {any|null} Removed element or null if empty
   */
  removeFront() {
    if (this.isEmpty()) return null;

    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  /**
   * Removes and returns the rear element
   * @returns {any|null} Removed element or null if empty
   */
  removeRear() {
    if (this.isEmpty()) return null;

    this.rearIndex--;
    const item = this.items[this.rearIndex];
    delete this.items[this.rearIndex];
    return item;
  }

  /**
   * Returns the front element without removing it
   * @returns {any|null}
   */
  peekFront() {
    return this.isEmpty() ? null : this.items[this.frontIndex];
  }

  /**
   * Returns the rear element without removing it
   * @returns {any|null}
   */
  peekRear() {
    return this.isEmpty() ? null : this.items[this.rearIndex - 1];
  }

  /**
   * Checks whether the deque is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Returns the number of elements in the deque
   * @returns {number}
   */
  size() {
    return this.rearIndex - this.frontIndex;
  }

  /**
   * Prints the internal structure (for debugging)
   */
  print() {
    console.log(this.items);
  }
}
