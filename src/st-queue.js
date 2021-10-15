const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 function insert(list, data) {
  if (list === null) {
    return new ListNode(data);
  } else {
    list.next = insert(list.next, data);
  }
  return list;
}

module.exports = class Queue {

  queue = null;

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    this.queue = insert(this.queue, value);
  }

  dequeue() {
    if (this.queue == null) {
      return null;
    }
    let value = this.queue.value;
    this.queue = this.queue.next;
    return value;
  }
}
