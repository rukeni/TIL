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

let ll = new LinkedList();
console.log('ll', ll);

ll.head = new Node(123);
ll.length++;
console.log('ll', ll);

ll.head.next = new Node(456);
ll.length++;
console.log('ll', ll)