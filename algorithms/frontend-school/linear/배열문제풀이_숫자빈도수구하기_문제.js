/* 숫자 빈도수 구하기 */
// 두 자연수 M, N을 입력 받아, M부터 N까지 각 자리수의 빈도수를 합하는 프로그램을 제작하시오
// 예를들어 129와 137이 주어졌을때 129, 130, 131, 132, 133, 134, 135, 136, 137 숫자가 나오고
// 이 숫자들의 자릿수 별 숫자 빈도수를 계산하여, 0부터 9까지의 빈도수 값을 반환한다
// 입력 값은 M, N은 10,000 이하의 자연수이며, 0부터 9까지의 자릿수 별 빈도수를 배열 형태로 반환한다

/* user code */
function answer(s, e) {
  const length = e - s + 1;
  // 자리수를 구하는 배열
  const numbers = new Array(length).fill(s).map((el, idx)=> el + idx);
  const result = new Array(10).fill(0);

  for(let i = 0; i < numbers.length; i++) {
    const numberChar = numbers[i].toString().split('');
    for(let j = 0; j < numberChar.length; j++) {
      result[numberChar[j]]++;
    }
  }


  return result;
}

/* main code */
let input = [
  // TC: 1
  [129, 137],

  // TC: 2
  [1412, 1918],

  // TC: 3
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
