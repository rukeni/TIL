/* 4. 요일 구하기 */
// 날짜를 입력 받아 요일을 반환해주는 함수를 구현하시오
// 입력 값은 문자형 날짜 값이 입력되며 문자형 형태의 요일을 반환한다
/* user code */
function answer(str) {
  let week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );
  const day = new Date(str).getDay();
  return week[day]
}

/* main code */
let input = [
  // TC: 1
  "2021-01-27",
  // TC: 2
  "2021-02-27",
  // TC: 3
  "2021-03-14",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
