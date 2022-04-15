---
title: "행복한 프로그래밍"
author: "양승민"
date: "2022-04-13"
---

# 행복한 프로그래밍

2021.11.7(일요일) 양승민 리뷰

# 입문 논제.

# 1. 책을 읽은 소감은?

## 책으로써 짜임새는 아쉬웠지만 개발자로써 읽어보길 잘한 글.

**책을 막 읽기 시작했을때는** 저자의 의식의 흐름이 반영된 저자의 의식의 흐름이 와닿기 전까지 책 읽기에 불편함이 있었고 책을 점점 **읽어갈수록 흐름이 익숙해지면서 독서에 몰입 할 수 있었다.**

책은 임백준 저자님의 순수한 감정을 느끼는 글귀와 경험이 많이 녹아져 있어서 어떤 마음으로 글을 썼을지 상상이 되어 편안한 마음으로 읽게 되었다. 개발자들은 타 직군에 비해, 순수함을 유지하는 사람이 많다는 생각을 하곤 했는데 그부분을 다시 확인한 것 같다. 특히, 다섯번째 이야기에서 개발을 무공으로 비유하여 생각하는게 개발자 특유의 순수하고 신나서 묘사하는 모습이 상상되어 약간 웃으면서 본것 같다.

# 2. 책을 읽으면서 인상 깊었던 내용과 이유

## "자신의 코드나 설계에 대한 비판이 이뤄지면 우선 그 비판이 타당한지 아닌지를 깊게 고찰해봐야 한다. 만약 타당한 비판이라면(조금 쓰라리긴 해도) 당당하게 고마움을 표시하고 비판을 접수해야한다"(P.273)

 가장 고민을 하게 되는 부분이다. 실무에서는 내가 짠코드를 다른 사람과 이야기를 하거나 다른 사람이 짠코드를 내가 이야기할 기회가 많은 것 같다. 개발일을 하다보면, **경력이 있는 개발자일 수록 의견을 굉장히 신중하게 표현**함을 느끼곤 했다. 그 이유는 아마 논쟁을 넘어선 싸움, 비난과 힐난을 경험했기 때문인 것 같다. 

  개발자는 서비스직과 달리, 사람상대를 하는 직업은 아니기에 **상대편에게 이렇게 말하면 실례인지를 잘 모르는 경우가 비일비재하다. 때로는 사회성이 조금 떨어지는 사람은 상대의 의견을 비난이나 힐난으로 곡해하는 경우도 있다. 대체로 한국에서 공부를 하고 배우면, 토론문화나 의견을 대립하는것을 많이 경험하기 쉽지 않다. 그러다보니, 전문가나 권위자의 의견을 무조건적인 수용을 하거나 다른 의견을 제시받는 것에 수치심을 느끼고 방어적 태도로 일관하게 되는 부분도 있는것 같다.**

다른 분들은 정당한 비판, 부당한 비판, 애매한 비판(?)들을 어떻게 의사소통하고 대응하는지 궁금하다.

# 3. 풀리지 않는 문제를 갑자기 떠오른 영감으로 해결하거나, 레거시 코드를 효율적으로 리팩토링 하면서 성취감을 느꼈던 경험은?

## 페이지, 컴포넌트 마다 중구난방 데이터 존재 → 데이터 Fetch 로직 훅(Hooks)으로 관리하기

  리액트를 하다보면, 높은 자유도가 있는 반면에, 스프링과 Vue.js같은 프레임워크와는 달리, **특별히 정해진 방법이 없다**는 것이 난감한 일이다. 이러다보면, 회사내에 상태관리에 대한 컨벤션이 없거나 사람마다 자기 스타일대로 코드를 작성하기 때문에 작성자에 따라 다른 스타일의 코드를 다른 프레임으로 적용하여 분석하며 봐야한다. UI를 만들어내는 과정은 보통 크게 관여할일이 없기도 하고 프로덕트디자이너가 있다면, 프로덕트 디자이너의 요구만 생각하면 된다. 

  가장 난감한 것은 컴포넌트 내부에서만 사용하는 내부 상태관리, 전역 상태관리, 데이터 페칭이 섞여서 시점마다 달라지는 앱의 데이터 플로우를 파악하기 어렵다는 점이다.

  다양한 방법이 의논되었는데, 결정한 원칙은 "**데이터 가져오기는 UI 역할을 하는 컴포넌트가 직접 호출하지 않는다."**였다. **컴포넌트가 데이터를 가져오지 않고 호출만 전담하는 Hook을 만들었고** Hook은 가져온 데이터를 상황에 따라 내부 상태와 전역 상태에 알맞게 할당하도록 코드를 짰다. 데이터 가져오기를 일관화하면서 가져오게된 사이드 이펙트 중하나는 컴포넌트 내부에 데이터와 관련된 코드가 현저히 줄어들면서 코드 가독성면에서도 이득을 보게 되었다. 

  그외에 데이트피커나 폼처럼 내부적으로 상태관리가 많이 필요한 UI들을 직접 만들어서 썼는데 외부에서 필요에 따라 쓰게 하기위해서 데이터를 외부에서 → 내부로 Props를 내려서 사용하는 방식을 사용했다. 이 역시도 가독성면에서 해치는 부분이 있어서 useImperativeHandle()이라는 것을 이용하여 내부의 독립성을 유지하면서 필요한 데이터를 부모 컴포넌트가 가져올 수 있도록 리팩토링 하였다.

---

# 핵심 논제.

# 1. 내공은 부족하지만 외공을 빠른시간에 익혀서 취업하는 현상에대한 생각?

## 외공만 중요한 시장도 있다. 하지만, 내공은 롱런을 위해 필수적인 요소이다.

  나는 경제학을 전공하여 비전공자 독학으로 스타트업에서 신입을 시작하였다. 그동안 스타트업 위주로 회사를 다니다가 흥미가 생겨서 이번 하반기에 유니콘회사에 첫도전을 내밀었고 최종탈락이라는 쓰라린아픔이 있었다. 다시 준비하려는 찰나에 우연히 제안을 받게 되어 SI업계의 프리랜서를 입문하게 되었다. 

  SI시장은 참 독특한 문화가 있었다. **구현을 빠르게 해내는 사람이 최고로 대단한 사람이고** 다른 요소로는 특별히 실력으로 높이 쳐주지는 않았다. 브라우저의 원리를 알필요도 없고 테스트 자동화를 할줄아는것도 별 도움이 되지 않았다. **오직 구현 스피드만이 중요한 값어치**였다. 프론트엔드, 백엔드를 다 할줄알면 더 좋다. 이때 처음으로 구현만 신경써도 먹고 살수 있는 거구나를 느꼈다. 빨리 해야한다는 이유로 구현만 신경쓰는게 약간은 불만인 상태였다. 그러면서, 나는 소위 '네카라쿠배당토'라고 부르는 회사들에 관심이 더 생겼다. 최고 수준의 개발자들과 같이 일한다면, **'개발자로서 많은 것을 배울 수 있겠구나'**라는 SI회사 경험을 통해 처음으로 깨달았다. 왜 그동안은 못느꼈는지 모르겠지만 더 지적인 갈망이 커졌다.

  이곳에서 일을하면서 느낀건 내 입장에서는 간단한 문제인데, 몇몇 개발자들분은 그게 어려운 구현과제였다. 그 이유는 브라우저가 돌아가는 원리를 잘 몰라서라고 생각이 들었고 기본기의 중요성을 어렴풋이 깨닫게하는 계기가 되었다. 기본으로 돌아가면 간단하게 해결되는 문제를 엄청 복잡도가 높고 어려운 알고리즘을 만들어서 푸셨다. 단순히, 캘린더 구현하고 땡, 관리자 페이지 구현하고 땡. 이런 패턴만 하다보니, 매번 조금만 어려운 요구사항이 오면 과제로 러닝커브로 다가오는게 아닐지. 생각이 들게 하였다. 따라서, 내공이란 것만 파기엔 할일이 많지만 절대 간과해서는 안되는 요소라고 생각이든다.(그래서 독서모임 참여!)

# 2. 효율성과 가독성을 바라보는 판단기준? 구체적인 방향

## 바야흐로 가독성이 좀더 중요한 시대가 된건 아닐까하는.

  바로 얼마전에 레거시 페이지의 CheckBox 그룹을 만들어내는 로직을 리액트로 바꾸는 일을 하였다. 이전에 레거시를 짰던 개발자분은 효율성을 위해 비트연산을 하여 어떤 숫자값을 데이터로 저장하였고 해당 숫자값을 비트 AND연산을 하여 여러개의 CheckBox에 체크표시를 만드는 로직이었다. **이 코드의 문제점은 가독성이었다.** 나를 포함하여 몇몇 개발자는 이 체크박스가 어떻게 만들어지 찾지를 못했다. 그 이유는 자바스크립트를 사용하면서 &을 보면 타입을 합치는 걸로 생각하거나 &을 &&으로 착각하여 읽기 때문에 비트 연산자가 있을거라는 생각을 못했다.(물론 주석이나 설계서, 설명이 없었기도 했다) if(result & check) 라고 되어있는 분기문은 Syntax에러도 없기때문에 도무지 어디서 코드가 실행되고 있는건지 찾기가 어려웠다. 나중에 비트 AND 연산자 '&'을 발견하고 허탈한 마음이 들기도 했다. 현대적인 웹개발에서는 비트 연산이 필요할정도로 타임크리티컬한 문제가 산재해있거나 유저가 그 차이를 민감하게 반응할일은 많지 않은 것 같다.

  개인적인 프로젝트로 Capacitor.js(아이오닉같은 웹앱 플랫폼)을 이용하여 리액트로 래핑된 웹앱을 만들어야할 일이있었다. 리액트로 빌드된 웹페이지는 네이티브 앱들에 비해 느린 문제가 있어서 고민이 있었다. 페이지 최적화를 어느정도 해도 뜨는 속도가 느려서 고민이 들었다. 이때 나는 Preact라는 좀 더 가벼운 리액트를 도입하였고 좀 더 최적화에 힘쓰면 앱이랑 견줘도 차이를 못느낄 것 같다는 생각이 들었다. 이 처럼, 효율성(퍼포먼스)은 굉장히 중요한 값어치이다. 하지만, 좀 더 일반적인 상황을 견줘보았을때는 성능이슈보다는 가독성이슈가 우리를 가로막는 장애물이 아닐까 생각이든다.

# 3. 웜바이러스, 슬래머 바이러스,  KT 인터넷 라우팅 설정 오류 등의 사태로 느끼는 생각. 개발자가 해야할 일.

## 시큐어 코딩, 보안정책 : 개발자가 넘어야할 산.

  일반적으로 개발자는 생산자, 창조자로서 역할을 집중한다. **그러다보니, 보안적 이슈를 신경쓰지 않거나 간과하는 경우가 많은 것 같다.** 대표적으로 owasp에는 각 언어 별, 플랫폼 별로 코드를 어떤식으로 작성하면 안전하다라고하는 가이드가 이미 공개되어 있다. 하지만 이를 이행하는 건 좀 더 다른 차원의 이야기인 것같다. 시큐어 코딩을 하느냐 마느냐, 혹은 어떻게 하느냐는 것은 회사차원에서 정해진 것 외에는 평가받지 않기 때문에 개인적인 책임의 영역을 벗어난다. 일반적으로 개발자는 맞춰야하는 보안 요구사항의 **최소한만을 맞추는데** 익숙하다.(나역시도) 사람은 자기의 관심분야를 벗어난 이슈를 고민하는 게 쉽지 않은것 같다. 나역시 이부분은 개발자 고유의 권한과 책임으로 해결할 수 있는 문제일지 고민에 잠기게 한다.

---

# 기타 논제.

# 1. 함수형 언어를 공부하거나 실무에 사용해본 경험이 있다면 어떤점이 다른 패러다임과 비교해서 좋았는지 이야기해주세요.

## 간결하면서 의도를 쉽게 예상할 수 있는 패러다임.

  사실, 함수형 언어를 썼거나 함수형 패러다임을 정확히 아는 것은 아니지만(clojure 배워보려다 포기..) 자바스크립트를 사용하면서, 그리고 리액트에 녹아있는 함수형 프로그래밍 개념을 통해서 느낀 경험정도는 이야기할 수 있을 것 같다. 자바스크립트는 하스켈같은 순수 함수형 프로그래밍 언어도 아니며 클로져나 스칼라처럼 함수형을 표방하여 나온 언어는 아니다. 하지만 자바스크립트 함수가 변수나 데이터 구조에 할당 및 리턴 할 수있는 1급 객체로 취급되고 이뮤터블(Immutable)을 고려하는 코드(js는 뮤터블하지만), 사이드 이펙트를 없애는 순수함수등을 고려하는 경우가 많아, 아주 조금은 함수형 프로그래밍을 맛을 봤다고 생각이 든다.

  타 언어 경험이 적어 비교는 어렵지만 함수형으로 짠다는 것은 코드가 짧고 있는 그대로 이해하기 좋다는 점이다. 함수형 프로그래밍과 절차지향 언어 이야기를 할때 나오는 또 다른 차원의 비교는 명령형 프로그래밍과 선언형 프로그래밍이다. C언어 같은 명령형 언어의 프로그래밍 작성법은 말그대로 '너이렇게 해라'라는 명령이기 때문에 해당 '명령'을 끝까지 따라가면서 그 구조를 이해해야한다. 이와는 반대로 선언형 프로그래밍은 'a가 10인 배열을 10개 만들거야'라는 방식으로 코딩을 하기때문에 하고자하는 의도 파악이 좀 더 수월하다는 생각이 든다.

# 2. 피보나치 알고리즘 리팩토링하기

```jsx
let result = 0;
    let store = {};
    let count = 0;
    const fibo = (n) => {
        if (store[n]) {
            return store[n];
        }
        count++;
        if (n <= 2) {
            result = 1;
        } else {
            result = fib(n - 1) + fib(n - 2);
        }
        store[n] = result;
        return result;
    }
fibo(100);
```

# 3. 마무리 발언 및 소감

## 가볍게 접근 하지 말자.

  사실 발제문을 보고 가벼운 마음을 임하면 안되겠다는 책임감을 느꼈다. 그런 마음을 들게하기위해 모임장님께서 빡센 발제문으로 첫 순서를 잡으신 것 있지 않을까 생각이 든다. 책을 한권읽는다는 것은 1회독하고 의미없게 남는 지식없이 끝나는 경험이 많았는데 이런식으로 딥다이브하는 경험을 하면서 다른 분들 의견을 경청할 수 있다면 경험치가 많이 오를 것 같다는 생각이 든다.

  앞으로 진행에 폐가 되지 않으면서 윈윈을 하려면 책임감을 가지고 임해야겠다고 다짐했다.