/* 8. 배열 회전 */
// 배열을 입력 받아 순서를 역을 만들어 반환해주는 함수를 구현하시오
// * 본 문제는 reverse 함수를 이용하지 않고 반복문을 통해 구현해야 한다
// 입력은 배열 형태로 값은 정수형과 문자형으로 구성되어 있으며 역으로 변환된 배열을 반환한다
/* user code */
function answer(user) {
  let reverse = [];
  for(let data of user) {
    reverse.unshift(data);
  }
  return reverse;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 3, 4],
  // TC: 2
  [-1, 6, "hello", -15],
  // TC: 3
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
