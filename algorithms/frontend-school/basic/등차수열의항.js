/* 1. 등차수열의 항 찾기 */
// 입력된 값을 통해서 등차 수열의 몇 번째 항인지를 구하는 프로그램을 작성하시오
// 입력은 초항 a, 인접한 차이 d, 찾는 항의 수 n이 주어지며, n 값에 해당하는 항번호를 반환한다
// 단, 만약 항 번호가 없을 시에는 -1를 반환한다
// 예를들어 a=1, d=2 n=7이 주어졌을때
// f(1) = 1, f(2) 3, f(3) = 5, f(4) = 7가 되므로 n7에 해당하는 항인 4를 반환한다
/* user code */
function answer(a, d, n) {
  let index = 1;
  let result = a;
  while(true) {
    if(result === n) {
        break;
    }
    if(result < n) {
      index++;
    }
    if(result > n) {
      index = -1;
      break;
    }
    result = result + d;
  }
  return index;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 7],
  // TC: 2
  [2, 3, 10],
  // TC: 3
  [3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
