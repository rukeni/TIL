/* 벽돌 옮기기 */
// 새로 온 알바생이 벽돌의 높이를 맞추지 않고 벽을 쌓아 놓았다
// 관리자를 위해 몇 개의 벽돌을 옮겨야 벽돌이 높이가 같아질 수 있을지 구해주는 프로그램을 제작하시오
// 입력은 배열 형태의 정수이며 같은 높이를 맞추기 위해 ㅇ롬겨야 하는 벽돌의 개수를 반환한다
// 단, 입력으로 들어오는 배열을 남는 벽돌 없이 높이가 딱 나눠 떨어지도록 들어온다
/* user code */
function answer(blocks) {
  const height = (blocks.reduce( (acc, curr) =>  acc += curr)) / blocks.length;
  let result = 0;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] > height) {
      result += blocks[i] - height;
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [5, 2, 4, 1, 7, 5],

  // TC: 2
  [12, 8, 10, 11, 9, 5, 8],

  // TC: 3
  [27, 14, 19, 11, 26, 25, 23, 15],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
