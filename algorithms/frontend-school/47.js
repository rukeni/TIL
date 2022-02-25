/*** 5. 무한 뺄셈 ***/
// 두 자연수를 입력 받아 앞의 숫자에서 뒤의 숫자를 뺄셈하며 반복 연산하는 프로그램을 작성하시오
// 단 무한 연산을 막기 위해 뺀 값이 음수일때 프로그램이 종료된다.
// 초기 입력된 수를 포함하여 뺄셈을 통해 나온 숫자 모두를 배열에 저장하여 반환한다.
// 예를 들어 두 수 6, 3이 입력 값으로 주어졌을때
// 6 - 3 = 3, 3-3 = 0, 3-0 = 3, 0-3 = -3 순으로 계산되고, -3이 되었으므로 프로그램은 종료된다
// 이 때 배열 형태로 반환되는 숫자는 [6, 3, 3, 0, 3]이 된다.
/* user code */
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);

  while(true) {
    if(sequence[sequence.length -2] - sequence[sequence.length -1] > -1) {
      sequence.push(sequence[sequence.length -2] - sequence[sequence.length -1])
    }  else {
      break;
    }
  }

  return sequence;
}

/* main code */
let input = [
  // TC: 1
  [9, 3],
  // TC: 2
  [6, 3],
  // TC: 3
  [13, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
