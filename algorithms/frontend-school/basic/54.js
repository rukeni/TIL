/* 2. 제곱 구현 */
// 두 수 x, y를 입력 받아 x의 y 제곱 값을 반환해주는 함수를 구현하시오(제곱 연산자는 사용하지 않는다 )
/* user code */
function answer(x, y) {
  let result = 1;

  for (let i = 0; i < y; i++) {
    result = x * result;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [2, 3],
  // TC: 2
  [4, 6],
  // TC: 3
  [1, 100],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
