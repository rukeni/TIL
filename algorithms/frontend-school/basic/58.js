/* 6. 배열 내 최대값 구하기 */
// 정수가 저장된 배열을 입력 받아 그 중 최대값을 반환해주는 함수를 구현하시오
/* user code */
function answer(arr) {
  return arr.reduce((acc, curr) => {
    if(acc < curr) {
      acc = curr;
    }
    return acc;
  }, Number.MIN_SAFE_INTEGER);
}

/* main code */
let input = [
  // TC: 1
  [1, 6, 5, 2, 3],
  // TC: 2
  [19, 41, 23, -4, 17],
  // TC: 3
  [-64, -27, -41, -33, -59],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
