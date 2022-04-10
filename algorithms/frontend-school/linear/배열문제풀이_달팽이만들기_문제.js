/* 달팽이 만들기 */
// 조카를 잠재우기 위해 달팽이 모양으로 숫자를 하나씩 적어주는 프로그램이 필요하게 되었다
// 이를 위해 정사각형 모양의 달팽이 2차원 배열을 그려주는 함수를 작성하시오
// 입력한 크기의 정사각형으로 아래 그림처럼 시계방향으로 돌면서 숫자를 채워 2차원 배열을 반환한다
/* user code */
function answer(length) {
	// 배열만들기
	let result = new Array(length).fill(new Array(length).fill(0));

  while(length > 0) {
		
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
