/* 7. 스팸 메일 */
// 최근 스팸 메일이 급증하여 메일 업무 처리에 지장이 생겼다
// 대소문자를 구분하지 않고 Advert로 시작하는 메일 제목은 스팸 처리하는 함수를 구현하시오
// 입력 값은 문자형이며 출력 값은 스팸으로 판단할 경우 true, 아닐 경우 false를 반환한다
/* user code */
function answer(str) {
  return str.toLowerCase().indexOf('advert') !== -1;
}

/* main code */
let input = [
  // TC: 1
  "RE: Request documents",
  // TC: 2
  "[Advertisement] free mobile!",
  // TC: 3
  "50% off this week (advertising)",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
