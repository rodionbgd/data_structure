class NodeI {
  next: NodeI;

  constructor(public value: number) {
    this.next = null;
  }
}

export default class LinkedList {
  private head: NodeI;

  private length: number;

  private tail: NodeI;

  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  addToTheEnd(value) {
    const node = new NodeI(value);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      let tail = this.tail;
      this.tail = node;
      tail.next = this.tail;
    }
    this.length += 1;
  }

  reverseList() {
    let prev, next, node;
    prev = null;
    node = this.head;
    this.tail = this.head;
    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    this.head = prev;
  }

  printList() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}
