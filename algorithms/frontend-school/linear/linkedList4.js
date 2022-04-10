function Node(data) {
	this.data = data;
	this.next = null;
}

function LinkedList() {
	this.head = null;
	this.length = 0;
}

LinkedList.prototype.size = function() {
	return this.length;
};

LinkedList.prototype.isEmpty = function() {
	return this.length === 0;
};

LinkedList.prototype.printNode = function() {
	for (let node = this.head; node !== null; node = node.next) {
		process.stdout.write(`${node.data} -> `);
	}
};

LinkedList.prototype.append = function(value) {
	let node = new Node(value);
	let current = this.head;
	if (this.head === null) {
		this.head = node;
	} else {
		while (current.next !== null) {
			current = current.next;
		}
		current.next = node;
	}

	this.length++;
};

LinkedList.prototype.insert = function(value, position = 0) {
	if (position < 0 || position > this.length) {
		return false;
	}

	let node = new Node(value),
		current = this.head,
		index = 0,
		prev;

	if (position === 0) {
		node.next = current;
		this.head = node;
	} else {
		while (index++ < position) {
			prev = current;
			current = current.next;
		}

		node.next = current;
		prev.next = node;
	}

	this.length++;

	return true;
};

LinkedList.prototype.remove = function(value) {
	let current = this.head;
	let prev = current;

	while (current.data !== value && current.next !== null) {
		prev = current;
		current = current.next;

		if (current.data !== value) {
			return null;
		}

		if (current === this.head) {
			this.head = current.next;
		} else {
			prev.next = current.next;
		}

		this.length--;
	}
};

let ll = new LinkedList();
ll.insert('1');
ll.insert('11');
ll.insert('111');

ll.insert('111', 2);

ll.printNode();

ll.remove('1');
ll.remove('1');
console.log('ll.size()', ll.size());
