/* user code */
// 대표 선출하기
// 원탁 시계방향을 1번부터 n번까지 번호 부여
// 주사위를 통해 굴려 나온 숫자 m의 사람을 제외하고 k만큼 이동해가며 대표 후보 제외
// 이렇게 순회하며 1명이 남을때까지 반복

//원형 연결리스트 문제
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.append = function(value) {
  let node = new Node(value);
  let current = this.head;
  if(this.head === null) {
    this.head = node;
  } else {
    while(current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }
}

LinkedList.prototype.removeAt = function(index) {
  let current = this.head;
  let prev = null;
  let i = 0;
  while(current !== null && i < index) {
    prev = current;
    current = current.next;
    i++;
  }
  if(prev === null) {
    this.head = current.next;
    return current;
  } else {
    prev.next = current.next;
    return current;
  }
}
function answer(n, m, k) {
  let result = [];
  let linkedList = new LinkedList();
  const people = new Array(n).fill(0).map((v, i) => i + 1);
  for(let i = 0; i < people.length; i++) {
    linkedList.append(people[i]);
  }
  const mItem = linkedList.removeAt(m - 1);
  result.push(mItem.data);

  return result;
}

/* main code */
let input = [
  // TC: 1
  [8, 2, 3],

  // TC: 2
  [10, 2, 3],

  // TC: 3
  [20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}
