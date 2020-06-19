class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    console.log(this.first);
    return this.first;
  }

  all() {
    let node = this.first;
    while (node) {
      console.log(node);
      node = node.next;
    }
  }
}

// function queueTest() {
//   const queueTest = new Queue();
//   queueTest.enqueue("T1");
//   queueTest.enqueue("T2");
//   queueTest.enqueue("T3");
//   queueTest.enqueue("T4");
//   queueTest.enqueue("T5");
//   queueTest.dequeue();
//   queueTest.all();
//   queueTest.show();
// }

// queueTest();

module.exports = Queue;
