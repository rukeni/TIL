/* 기차 운행 */
// 열차가 1번 부터 3번까지 순서대로 들어오고 입력 순서대로 나갈 수 있는지 판단하는 프로그램
/* user code */
function answer(train) {
  return train.pop();
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 3],

  // TC: 2
  [3, 2, 1],

  // TC: 3
  [3, 1, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
