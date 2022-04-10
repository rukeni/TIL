/* 달팽이 만들기 */
// 조카를 잠재우기 위해 달팽이 모양으로 숫자를 하나씩 적어주는 프로그램이 필요하게 되었다
// 이를 위해 정사각형 모양의 달팽이 2차원 배열을 그려주는 함수를 작성하시오
// 입력한 크기의 정사각형으로 아래 그림처럼 시계방향으로 돌면서 숫자를 채워 2차원 배열을 반환한다
/* user code */
function answer(length) {
	// 배열만들기
	const result = [];
  for (let i = 0; i < length; i++) {
    result[i] = [];
  }
	// 달팽이 만들기
	let x = 0;
	let y = 0;
	let num = 0;
	let direction = 1;
	x--;
	// 얻어 가야하는 것
	// 1. 숫자를 채워주는 것 
	// 2. 방향을 바꿔주는 것 direction이라고하는 플래그를 이용해서 방향만 바꿈
	// 3. 좌표를 바꿔주는 것

	while(length > 0) {
		for(let i = 0; i < length; i++) {
			x += direction;
			result[y][x] = ++num;
		}
		length--;

		if(length === 0) break;

		for(let j = 0; j < length; j++) {
			y += direction;
			result[y][x] = ++num;
		}

		direction *= -1

	}
	return result;
}

/* main code */
let input = [
	// TC: 1
	3,

	// TC: 2
	5,

	// TC: 3
	6,
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i]));
}
