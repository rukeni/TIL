/*** 2. 나누기와 대소비교 ***/
// 4개의 수를 입력 받아 나누기 연산을 통해 대소를 판단하는 함수를 제작하시오
// 입력 값은 1000이하의 자연수 a,b,c,d가 주어지고
// a/b > c/d 일 때는 1, a/b = c/d일 때는 0, a/b < c/d 일때는 -1을 반환한다
/* user code */
function answer(a, b, c, d) {
  const firstDivision = a / b;
  const secondDivision = c / d;
  if(firstDivision > secondDivision) return 1;
  if(firstDivision < secondDivision) return -1;
  if(firstDivision === secondDivision) return 0;
}

/* main code */
let input = [
  // TC: 1
  [14, 2, 6, 6],
  // TC: 2
  [6, 7, 8, 9],
  // TC: 3
  [18, 2, 36, 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(
    `#${i + 1} ${answer(input[i][0], input[i][1], input[i][2], input[i][3])}`
  );
}
