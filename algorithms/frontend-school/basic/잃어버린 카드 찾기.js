/* 2. 잃어버린 카드 찾기 */
// 등차 수열을 이루는 4개의 숫자 카드를 받았는데 한 카드를 잃어버렸다 잊어버린 카드를 찾아 주자
// 입력은 자연수로 된 3개의 숫자 카드를 받고, 한 가지의 잃어버린 카드의 수를 반환한다
// 단, 잃어버린 카드는 가운데 숫자 카드로 한정한다.
// 예를 들어, 1, 7, 10을 입력 받았을 때,
// 초항이 1이고 두수의 차가 3인 등차 수열 1 4 7 10을 찾아 4를 반환하도록 한다
/* user code */
function answer(a, b, c) {
  let number = 0;

  // sort
  num = [a, b, c];
  num.sort((x, y) => x - y);

  // 먼저 d 찾기
  let d = Math.min(num[1] - num[0], num[2] - num[1]);
  for(let i = 0; i < num.length; i++) {
    if(num[i] + d !== num[i+1]) {
      number = num[i] + d;
      break;
    }
  }


  return number;
}

/* main code */
let input = [
  // TC: 1
  [1, 7, 10],

  // TC: 2
  [3, 8, 18],

  // TC: 3
  [2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
