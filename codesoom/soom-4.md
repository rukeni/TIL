# 4주차

## TDD는 정신 소모가 좀 더 큰 것 같다

이번주는 TDD를 이용해서 코드를 작성하였다.

TDD를 따라가는 것은 새로운 습관을 의식적으로 실행하는 것이었다.

그래서 그런지 평소보다 체력소모가 많이 되는 느낌이었고 한 예로 어느날은 wakatime기준으로 4시간정도? 밖에 코딩을 안했는데 너무 힘들어서 졸음이 왔다.(잠은 푹 잘잣음)

## TDD의 사이클 - Red, Green, Refactor

TDD를 사용하여 코드를 짤때는 이런 사이클을 지켜야 한다.

이 `Red`가 의미하는 것을 잘 못느꼈는데 `Red`와 `Green`을 빠르게 만족시키려고 하다보면 **코드를 작고 쉬운 로직부터 시작**하게 된다.(왜냐하면, 코드를 추상적으로 구상하고 싶지만 `Red`에 진입할 것을 생각하면 급 막연한 감이 증대하여 더 이쁘게 짜는것보다 일단 짜자라는 생각으로 귀결됨)

TDD 사이클은 어찌보면 귀찮은 작업인데 이 작업덕에 좋은 부분이 확실히 있었다.

- 약간 지루한작업이 추가되었지만, 이때 여러가지 잡생각이 더해져서 약간의 발상 전환에 도움을 주는 경험을 하였다.
- 코드가 작기 때문에 로직이 쉬워짐
- 쉬운로직에서 테스트 통과를 고민하면서 더 좋게 리팩토링하는게 스트레스가 안됨.(근데 작성할때는 조금 지루함 ㅇㅅㅇ...)
- 프로젝트 시작에는 막연함이 있지만 점점 시간이 지날수록 할일이 명확해져서 내가 작업하고자 하는 부분에만 집중을 할 수 있었음

## 느낀점

1. 그동안 배워온 것을 TDD로 적용해보고 싶었다. 알고리즘도, 기존 프로젝트도, 이전 과제도.(수련이 진정 필요함. 몸에 안익음)
2. UI는 어찌 테스트 하지? 스토리북?? 할게 +1 되었다.
3. 타입스크립트로도 TDD연습 해야 하는구나.. 할게 +2
4. 아샬님의 생각의 흐름이 어렵다. 다시 보면서 그 흐름이 어떻게 되는지 알아보고 싶다.

---
