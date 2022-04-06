/* 일곱 난장이 */
// 일터에 나갔던 난장이 9명이 와서는 모두 자기가 일곱 난장이 중 하나라고 우기고 있다
// 모든 난장이의 가슴에는 숫자가 표시된 배지가 있는데 다행히도 일곱 난장이의 배지에 표시된 숫자의 합
// 이 100이라는 단서로 일곱 난장이를 분별할 수 있다 일곱 난장이를 분별하는 프로그램을 작성하시오
// 배지 값은 100이하 자연수로 들어오며 일곱 난장이의 배지 값을 기존 순서대로 배열에 넣어 반환한다
/* user code */
function answer(dwarf) {
  let result = [];

  const difference = dwarf.reduce((acc,curr) => acc += curr, 0) - 100;
  for(let i = 0; i < dwarf.length; i++) {
    const relativeNumber = Math.abs(difference - dwarf[i]);

    if(dwarf.findIndex(dwarf => dwarf === relativeNumber) === -1 || dwarf[i] > difference) {
      result.push(dwarf[i])
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [1, 5, 6, 7, 10, 12, 19, 29, 33],

  // TC: 2
  [25, 23, 11, 2, 18, 3, 28, 6, 37],

  // TC: 3
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
