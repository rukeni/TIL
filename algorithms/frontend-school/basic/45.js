/*** 3. 반 평균 ***/
// 선생님의 업무 보조를 위해 시험 점수의 반 평균을 구해주는 프로그램을 만들고자 한다.
// 학생 별 점수를 입력 받아 평균을 구해주는 함수를 작성하시오.
// 입력은 배열 형태로 학생 별 별 시험 점수 값이 주어지며, 해당 반의 평균 점수를 반환한다.
// 단, 평균 점수가 소수점으로 나올 수 있기 때문에 두번째 자리까지 반올림하여 반환한다.
/* user code */
function answer(score) {
  let average = 0;
  const length = score.length;
  for(let i = 0; i < length; i++) {
    average += score[i]
  }
  average = average / length;
  // 코드 구현 시작 영역

  // …

  // 코드 구현 종료 영역

  return average.toFixed(2)
}

/* main code */
let input = [
  // TC: 1
  [80, 95, 65, 70, 100],
  // TC: 2
  [82, 77, 51, 64, 73, 90, 80],
  // TC: 3
  [100, 71, 59, 88, 72, 75, 91, 93],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
