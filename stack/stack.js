class Stack {
    constructor(){
        this.items = {};
        this.top = 0;
    }
    // add new element
    push(element){
        this.items[this.top] = element;
        this.top++;
    }
    // check stack is empty or not
    isEmpty(){
        return this.top === 0;
    }
    // remove last added element
    pop(){
        if(this.isEmpty()) return 'UnderFlow';
        this.top--;
        const item = this.items[this.top];
        delete this.items[this.top];
        return item;
    }
    // return the top or peek element
    peek(){
        if(this.isEmpty()) return 'No element';
        return this.items[this.top-1];
    }
    size(){
        return this.top;
    }
    search(element){
        if(this.isEmpty()) return 'No element';
        for(let i = 0; i < this.top; i++){
            if(this.items[i] === element){
                return i;
            }
        }
        return -1;
    }
    clear(){
        this.items = {};
        this.top = 0;
    }

}

const stack2 = new Stack();
stack2.push("A");
stack2.push("B");
stack2.push("C");
console.log(stack2.search("C")); //2
console.log(stack2.search("D"));//-1
console.log(stack2.peek()); // "B"
console.log(stack2.pop());  // "B"
console.log(stack2.size()); // 1