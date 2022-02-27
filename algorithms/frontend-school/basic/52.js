/*** 5. 네번째 좌표 ***/
// 고객이 평행한 직사각형을 만들기 위해 3점을 선택한 후 네번째 점을 구하는데 고생하고 있다
// 고객을 도와 네 번째 점을 구하는 함수를 만드시오
// 입력 값은 x 좌표 3개, y 좌표 3개가 각각 배열로 입력되며, 네번째 점[x, y]를 산출하여 반환한다
/* user code */
function answer(x_arr, y_arr) {
  let x, y
  let x1 = x_arr[0], x2 = x_arr[1], x3 = x_arr[2], y1 = y_arr[0], y2 = y_arr[1], y3 = y_arr[2];
  if(x1 === x2)  x = x3;
  if(x2 === x3)  x = x1;
  if(x1 === x3)  x = x2;
  if(y1 === y2)  y = y3;
  if(y2 === y3)  y = y1;
  if(y1 === y3)  y = y2;

  return [x, y]
}

/* main code */
let input = [
  // TC: 1
  [
    [5, 5, 8],
    [5, 8, 5],
  ],
  // TC: 2
  [
    [3, 1, 1],
    [2, 1, 2],
  ],
  // TC: 3
  [
    [7, 7, 3],
    [4, 1, 1],
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
