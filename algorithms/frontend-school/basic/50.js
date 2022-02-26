/*** 3. 윤년 판별기 ***/
// 자연수를 입력으로 받아 윤년이면 true, 아니면 false 값을 반환하는 함수를 작성하시오
// 윤년이란 아래 두 가지 중 하나라도 참이면 윤년이다
// - 4의 배수이고 100의 배수가 아닐때
// - 400의 배수일때
/* user code */
function answer(year) {
  let result = false;
  if (year % 4 === 0) {
    result = true;
  }
  if (year % 100 === 0) {
    result = false;
  }
  if (year % 400 === 0) {
    result = true;
  }
  return result;
}

/* main code */
let input = [
  // TC: 1
  4,
  // TC: 2
  100,
  // TC: 3
  124,
  // TC: 4
  247,
  // TC: 5
  400,
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
