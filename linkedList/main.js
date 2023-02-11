class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode; // head is a pointer to node
    this.tail = this.head; // tail is a pointer
    this.length = 1;
  }

  // O(1)
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // O(n)
  pop(value) {}
}

let list = new LinkedList(7);

list.push(4);

console.log(list);
