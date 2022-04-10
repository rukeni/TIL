function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.size = function () {
  return this.length;
}

LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
}

LinkedList.prototype.printNode = function () {
  for(let node = this.head; node !== null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
}

LinkedList.prototype.append = function (value) {
  let node = new Node(value);
  let current = this.head;
  if (this.head === null) {
    this.head = node;
  } else {
    while(current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  this.length++;
}

let ll = new LinkedList();
ll.append('1');
ll.append('11');
ll.append('111');

ll.printNode();

console.log('ll.size()', ll.size())