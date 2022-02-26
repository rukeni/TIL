/*** 1. 대소비교 ***/
// 두 정수를 입력 받아 문자열 형태의 대소비교 부등호를 반환하는 함수를 작성하시오
/* user code */
function answer(x, y) {
  if( x - y > 0) return '>';
  if( x - y < 0) return '<';
  if( x - y === 0) return '='
}

/* main code */
let input = [
  // TC: 1
  [3, 5],
  // TC: 2
  [7, 4],
  // TC: 3
  [2, 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
