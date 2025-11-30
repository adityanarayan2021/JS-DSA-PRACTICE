// Node class
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    // insert at end
    insert(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    // insert ar begining;
    insertAtBeginning(data){
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    }
    // print elements of list
    print(){
        let current = this.head;
        let result = "";
        while(current){
            result += current.data+'->';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }
    // delete a node from list
    delete(value){
        if(!this.head) return 'No node in list';
        if(this.head.data === value){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current.next && current.next.data !== value){
            current = current.next;
        }
        if(current?.next){
            current.next = current.next.next;
        }
    }
    // check given element exist or not
    search(value){
        let current = this.head;
        while(current){
            if(current.data === value){
                return true;
            }
            current = current.next;
        }
        return false;
    }
    // Reverse the linked list
    reverse(){
        let prev = null;
        let current = this.head;
        let next = null;
        while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

}

// Example usage
const ll = new LinkedList();
ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.insertAtBeginning(5);
ll.print();
console.log(ll.search(10));
console.log(ll.search(100));
ll.reverse();
ll.print();