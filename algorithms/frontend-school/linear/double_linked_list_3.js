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

DoubleLinkedList.prototype.printNode = function() {
	process.stdout.write('head -> ');
	for (let node = this.head; node !== null; node = node.next) {
		process.stdout.write(`${node.data} -> `);
	}
	console.log('null');
};

DoubleLinkedList.prototype.printNodeInverse = function() {
	let temp = [];

	process.stdout.write('null <- ');
	for (let node = this.tail; node !== null; node = node.prev) {
		temp.push(node.data);
	}
	for (let i = temp.length - 1; i >= 0; i--) {
		process.stdout.write(`${temp[i]} <- `);
	}
	console.log('tail');
};

DoubleLinkedList.prototype.append = function(value) {
	let node = new Node(value);

	if (this.head === null) {
		this.head = node;
		this.tail = node;
	} else {
		this.tail.next = node;
		node.prev = this.tail;
		this.tail = node;
	}
};

DoubleLinkedList.prototype.insert = function(value, position = 0) {
	if (position < 0 || position > this.length) {
		return false;
	}

	let node = new Node(value);
	let current = this.head;
	let index = 0;
	let prev;

	if (position === 0) {
		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = current;
			current.prev = node;
			this.head = node;
		}
	} else if (position === this.length) {
		current = this.tail;
		current.next = node;
		node.prev = current;
		this.tail = node;
	}

  return true;
};

let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(11);
dll.insert(111);

dll.printNode();
dll.printNodeInverse();

dll.insert(2, 1);
dll.insert(3, 3)
dll.printNode();
dll.printNodeInverse();