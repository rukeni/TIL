function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoubleLinkedList.prototype.size = function() {
  return this.length;
};

DoubleLinkedList.prototype.isEmpty = function() {
  return this.length === 0;
};

let dll = new DoubleLinkedList();
let node;
console.log('dll', dll);

node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;
console.log('dll', dll)

node = new Node(456);
dll.tail.next = node;
node.prev = dll.tail;
dll.tail = node;
dll.length++;

console.log('dll', dll);