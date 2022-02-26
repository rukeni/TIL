/*** 4. ATM 기기 ***/
// 고객이 ATM 기기를 사용하려 한다. ATF 기기는 5 만원 지폐밖에 사용하지 않아 5 배수 금액만 취급한다
// 그리고 인출 할 때 0.5만원(5천원)수수료가 필요하다
// 인출할 금액과 계좌의 총 금액을 임력 받아 계좌의 남은 금액을 반환하는 함수를 작성하시오
// 입력 값 중 첫번째 값은 인출할 금액이고 두번째 값은 계좌의 금액이다 (입력 값은 만원 단위)
// 단 정상적인 인출이 불가능할 경우 돈은 출금되지 않고, 통장의 원래 금액을 반환한다
/* user code */
function answer(withdraw, total) {
  const fee = 0.5;
  let result = total;
  if(withdraw % 5 !== 0) return result;
  if(withdraw + fee > total) return result;
  return result - withdraw - fee;
}

/* main code */
let input = [
  // TC: 1
  [40, 130.0],
  // TC: 2
  [33, 130.0],
  // TC: 3
  [300, 300.0],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
