class Stack {
    
  constructor() {
    this.items = {};
    this.top = 0;
  }
  // add new element
  push(element) {
    this.items[this.top] = element;
    this.top++;
  }
  // check stack is empty or not
  isEmpty() {
    return this.top === 0;
  }
  // remove last added element
  pop() {
    if (this.isEmpty()) return "UnderFlow";
    this.top--;
    const item = this.items[this.top];
    delete this.items[this.top];
    return item;
  }
  // return the top or peek element
  peek() {
    if (this.isEmpty()) return "No element";
    return this.items[this.top - 1];
  }
  // size of list
  size() {
    return this.top;
  }
  // search and element in list and return index
  search(element) {
    if (this.isEmpty()) return "No element";
    for (let i = 0; i < this.top; i++) {
      if (this.items[i] === element) {
        return i;
      }
    }
    return -1;
  }
  // reverse the linked list
  reverse() {
    let newItems = {};
    let index = 0;
    for (let i = this.top - 1; i >= 0; i--) {
      newItems[index] = this.items[i];
      index++;
    }
    this.items = newItems;
  }
  // return output in array
  toArray() {
    return Object.values(this.items);
  }
  // clear the list of array
  clear() {
    this.items = {};
    this.top = 0;
  }

}

const stack2 = new Stack();
stack2.push("A");
stack2.push("B");
stack2.push("C");
console.log(stack2.search("C")); //2
stack2.reverse();
console.log(stack2.toArray());
console.log(stack2.search("D")); //-1
console.log(stack2.peek()); // "B"
console.log(stack2.pop()); // "B"
console.log(stack2.size()); // 1
