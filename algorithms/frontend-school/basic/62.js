/* 10. 2차원 배열의 곱셈 합 */
// 2차원 배열을 입력 받아 모든 요소를 곱한 값을 반환해주는 함수를 구현하시오
// 입력 값은 2차원 배열로 Number 자료형 값이 들어오며, 모든 요소를 곱한 값을 반환해준다
/* user code */
function answer(arr) {
  return arr.flat().reduce((acc, curr) => acc = acc* curr, 1);
}

/* main code */
let input = [
  // TC: 1
  [[1], [2], [3]],
  // TC: 2
  [
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ],
  // TC: 3
  [
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
