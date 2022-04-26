/* user code */
// 새로운 지하철 노선이 신설되어, 이를 위한 열차가 새로 반입되었다. 하지만 이 열차들은 서로 연결되어 있지 않아
// 현재 운행이 어려운 상태이다 열차 운행을 위해 열차 찻간을 이어주는 프로그램을 작성하시오
// 열차 별로 고유의 식별번호가 있어 이를 기준으로 반입된 순서대로 열차 찻간을 이어주도록 한다
// 입력은 배열 형태로 열차 식별번호가 주어지며 열차 찻간을 이어주어 Linked List 형태로 반환한다
// 열차 연결 및 반환을 위해 사용해야 할 Train 객체와 Linked List 객체는 템플릿 코드를 참고한다
function Train(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
	this.head = null;
	this.length = 0;
}

LinkedList.prototype.size = function() {
	return this.length;
};

LinkedList.prototype.append = function(value) {
	let node = new Train(value);
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

function answer(nums) {
  let trainList = new LinkedList();
  for(let i = 0; i < nums.length; i++) {
    trainList.append(nums[i]);
  }
  return trainList;
}

/* main code */
let input = [
  // TC: 1
  [4, 7, 1, 10, 6],

  // TC: 2
  [3, 10, 6, 9, 11, 3, 4],

  // TC: 3
  [5, 8, 7, 3, 4, 1, 2, 7, 10, 7],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} -> `);
  }
  console.log("null");
};

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  answer(input[i]).printNode();
}
