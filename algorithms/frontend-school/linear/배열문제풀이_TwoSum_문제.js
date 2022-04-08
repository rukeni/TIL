/* two sum */
// 배열과 정수 값이 주어진다. 배열 내  두값을 합하여 정수 값을 만들 수 있도록 두개의 index를 반환하는 함수를 작성하시오
// 각 입력에 하나의 솔루션이 있따고 가정하고 동일한 요소를 두번 사용하지 않는다
/* user code */
function answer(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (i === nums.length - 1) {
        break;
      }
      if(nums[i] + nums[j] === target) {
        return [i, j]
      }
		}
	}
}

/* main code */
let input = [
	// TC: 1
	[ [ 2, 7, 11, 15 ], 9 ],

	// TC: 2
	[ [ 3, 2, 4 ], 6 ],

	// TC: 3
	[ [ 3, 3 ], 6 ],
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i][0], input[i][1]));
}
