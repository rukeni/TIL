/* 5. 중복 단어 제거 */
// 중복 단어를 제거해주는 함수를 구현하시오
// 입력 값은 배열 형태로 요소들은 문자형이 입력되고, 중복 단어가 제거된 배열을 반환된다
/* user code */
function answer(arr) {
return Array.from(new Set(arr))
}

/* main code */
let input = [
  // TC: 1
  ["john", "alice", "alice"],
  // TC: 2
  ["Hello", "hello", "HELLO", "hello"],
  // TC: 3
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
