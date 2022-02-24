/*** 2. 두 수 사이 숫자 ***/
//  두 수 사이의 숫자들을 출력하는 함수를 작성하시오..
//  입력은 두 숫자 값이 주어지며, 입력된 숫자를 포함한 두 수 사이의 자연수를 배열로 반환한다.
/* user code */
function answer(x, y) {
  const length = Math.abs(x - y);
  new Array(length + 1).fill(Math.min(x, y)).map((el, idx)=> el + idx);
}

/* main code */
let input = [
  // TC: 1
  [3, 7],
  // TC: 2
  [8, 3],
  // TC: 3
  [12, 10],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
