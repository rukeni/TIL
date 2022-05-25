---
title: "GSAP 정리"
author: "양승민"
date: "2022-04-13"
---



# GSAP란

> animate CSS, SVG, canvas, WebGL, color, string를 아우르는 고성능 만능 라이브러리를 표방한다.

GSAP를 사용 및 이해하기 위해서는 'Tween'과 'Timelines'를 이해하는게 필수적이다.

## 1. Tween

Tween은 모든 애니메이션을 동작하게 한다. high-perpormance 프로퍼티 세터의 한종류이다.
Tween의 공통메서드는 3가지고 이 것들은 Tween의 인스턴스를 리턴한다.

- gsap.to()
- gsap.from()
- gsap.fromTo()

-> 여기서 gsap는 생성된 gsap인스턴스이다.

## 1.1 gsap.to()

일반적인 애니메이션 핸들링 메서드이다. 이 애니메이션 메서드는 Tween 인스턴스를 반환한다.
현재 값은 자동으로 계산한다.

나중에 Tween 인스턴스를 제어하려면 변수를 할당한다.

```javascript
let tween = gsap.to(".class", {rotation: 360, duration: 5, ease: "elastic"});

tween.pause();
tween.seek(2);
tween.progress(0.5);
tween.play();
```

## 파라미터

1. targets - 조절하려고 하는 프로퍼티를 수행할 객체 주로 셀렉터에의해 타겟이 된 것을 의미한다.
2. vars - 애니메이션화할 특별한 속성을 말한다.(Special Properties)

## Special Properties

위에 두번째 인자값인 vars에 해당하는 specital properties는 다음과 같다.

|Property   |Description   |
|:-:|:-:|
|callbackScope   | 사용된 콜백 함수의 스코프 (onStart, onUpdate, onComplete, etc.).  |
|data   | 임의의 데이터를 할당한다. (스트링, 주소 참조된 객체등) 그리고 Tween 인스턴스에 나중에 참조할 수 있도록 부착된다.  |
|delay   |애니메이션을 시작하기 전 지연 시간이다.   |
|duration   |애니메이션의 지속시간 (단위 초)   |
|ease   |  timing-function을 제어한다. 자체 정의된 옵션이 있으니 이 [링크](https://greensock.com/docs/v3/Eases "ease link")를 확인해보면 된다 |
|id   |고유 식별자를 설정한다. gsap.getById()를 통해 찾을 수 있고 [GSDevTools](https://greensock.com/gsdevtools, "gsdevtools")에 표시된다.   |
|immediateRender   | immediateRender: true를 선택하면 인스턴스화 시 즉시 렌더링된다.  따로 지정하지 않으면 업데이트 주기 까지 첫 번째 렌더링을 대기한다.  |
|inherit   |기본적으로 상위 timeline에서 상속되지만 false로 설정하면 상속받지 않을 수 있다.   |
|lazy   |현재 "틱"의 맨 끝까지 값 쓰기를 지연시킨다. 기본값은 true이다.   |
|onComplete   |애니메이션이 완료되면 호출   |
|onCompleteParams   |OnComplete 함수에 전달할 매개 변수 배열   |
|onRepeat   |애니메이션이 새 반복 주기에 들어갈 때마다 호출하는 함수   |
|onRepeatParams   |onRepeat 함수에 전달할 매개 변수 배열   |
|onReverseComplete   |애니메이션이 역방향에서 다시 시작에 도달했을 때 호출하는 기능(반복 제외)   |
|onReverseCompleteParams   |onReverseComplete함수에 전달할 매개변수 배열   |
|onStart   |애니메이션이 시작될 때 호출하는 함수(시간이 0에서 다른 값으로 변경될 때, 두 번이 여러 번 다시 시작될 경우 두 번 이상 발생할 수 있음).   |
|onStartParams   |onStart 함수에 전달할 매개 변수 배열   |
|onUpdate   |애니메이션이 업데이트될 때마다(재생 헤드를 움직이는 각 "틱"에 따라) 호출하는 기능   |
|onUpdateParams   |onUpdate함수에 전달할 매개 변수 배열   |
|overwrite   |기본값은 false, true인 경우, 같은 타겟에 영향을 끼치는 모든 Tween 프로퍼티는 제거된다.   |
|repeat   |애니메이션을 반복할 횟수   |
|repeatDelay   |반복 간 대기 시간   |
|repeatRefresh   |true이면 전체 반복(요를 포함하지 않음)마다 시작/종료 값을 내부적으로 다시 기록, 상대값, 랜덤, 함수 기반을 이용할때 유용하다.   |
|reversed   |참일 경우, 애니메이션은 재생 헤드를 반대로 하여 시작  |
|runBackwards   |참일 경우 애니메이션은 시작 값과 끝 값을 반전   |
|stagger   |여러 대상을 정의한 경우 stigger: 0.1(각 시작 시간 간격 0.1초)과 같은 값을 설정하여 각 대상의 시작 시간을 쉽게 차이를 둘 수 있음   |
|startAt   | 애니메이션이 아니더라도 속성에 대한 시작 값을 정의  |
|yoyo   |참일 경우 다른 모든 반복이 반대 방향으로 실행되어 두 개가 앞뒤로 이동하는 것처럼 보임   |
|yoyoEase   |yoyo의 timing function을 설정   |
|keyframes   |대상을 다양한 상태로 애니메이션화하려면 키 프레임(tween()의 역할을 하는 변수 개체 배열)을 사용   |

# GSAP 코어

<https://greensock.com/docs/v3/GSAP>
