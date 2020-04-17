// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  insertLast(data) {
    let node = this.getLast();
    if (node == null) {
      this.insertFirst(data);
    } else {
      node.next = new Node(data);
    }
  }
  insertAt(data, index) {
    if (index < 0) return;
    if (index == 0) {
      this.insertFirst(data);
      return;
    }
    let i = 0;
    let current = this.head;
    let previous = this.head;
    while (i < index && current) {
      i++;
      previous = current;
      current = current.next;
    }
    previous.next = new Node(data, current);
  }
  size() {
    let counter = 0;
    let current = this.head;
    while (current) {
      counter++;
      current = current.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let current = this.head;
    if (!current) return null;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
  getAt(index) {
    if (!this.head || index < 0) return null;
    let i = 0;
    let current = this.head;
    while (i < index) {
      current = current.next;
      i++;
    }
    if (i != index) return null;
    return current;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    let previous = this.head;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
  }
  removeAt(index) {
    if (!this.head || index < 0) return;
    if (this.head.next == null && index == 0) {
      this.head = null;
    } else if (index == 0 && this.head.next != null) {
      this.head = this.head.next;
    }
    let i = 0;
    let current = this.head;
    let previous = this.head;
    while (i < index && current.next) {
      i++;
      previous = current;
      current = current.next;
    }
    if (i == index) previous.next = current.next;
  }
  forEach(callback) {
    if (!this.head) return;
    let current = this.head;
    while (current) {
      callback(current);
      current = current.next;
    }
  }
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
