## 들어가며
리액트를 쓴지 4년 가까이 되어 간다. ref를 사용하고 있지만 아직도 명확하게 ref개념을 잡지 못하여 의미를 정확히 잡고 싶었다.

오늘은 refs의 두가지 정의를 살펴보며 시작한다.
* 렌더 간에 데이터를 유지할 수 있는 가변 데이터 속성
* DOM 요소에 대한 참조

## Mutable Data Storage
useState는 가장 일반적인 데이터 저장용 훅입니다. 블록에서 유일한 훅은 아닙니다. useRef는 useState와는 다르지만 둘 다 렌더 간에 데이터를 유지하는데 사용할 수 있습니다.

```tsx
const ref = React.useRef();

ref.current = 'Hello';

```

이 예제에서 ref.current는 첫 렌더링이 뒤에 'Hello'를 포함시킬겁니다. useRef에서 반환된 값은 단일 키인 current를 가진 객체입니다.

아래 코드를 실행하면 다음과 같습니다.
```tsx

const ref = React.useRef();
console.log(ref);

```

콘솔에 `{current: undefined}`가 찍힐것입니다. 이것은 모든 React Ref의 형태입니다. React.d.ts에서 자세한 정의를 볼 수 있습니다.

```ts
// React.d.ts

interface MutableRefObject {
	current: any;
}

function useRef(): MutableRefObject
```

current 프로퍼티에 데이터를 저장하는 이유가 무엇일까요? 그것은 자바스크립트의 'pass-by-reference'기능을 사용하여 렌더링을 피하기 위해서입니다.

이제 `useRef` 훅을 아래와 같이 쓰겠습니다.

```jsx

function useRef(initial) {
	const [value, setValue] = useState(initial);
	const [ref, setRef] = useState({current: initial});

	useEffect(() => {
	  setRef({
	    get current() {
	      return value;
	    },

		set current(next) {
		  setValue(next);
		}
	  })
	}, [value]);

	return ref;
}

```

하지만 위와 같지 않습니다. 댄 아브라모프의 말을 인용하자면
useRef는 아래와 같이 동작합니다.

```jsx
function useRef(initialValue) {
  const [ref, ignored] = useState({current: initialValue});
  return ref;
}
```

이 구현으로 인해 현재 값을 변이할 때 리렌더링이 발생하지 않습니다.

데이터 저장소에서 렌더링할 수 없기 때문에 참조는 유지해야 하지만 화면에서는 렌더링할 필요가 없는 데이터를 저장하는데 특히 유용합니다. 이러한 예로는 타이머가 있습니다.

```jsx

const dataRef = React.useRef();

const clearTimer = () => {
  clearInterval(dataRef.current);
};

React.useEffect(() => {
  dataRef.current = setInterval(() => {
    console.log('I am here still');
  }, 500);
  return () => clearTimer();
}, [dataRef]);

```

## Visual Timer with Refs
타이머가 상태 값을 렌더링하도록 하려면 어떻게 해야할까요?

이전 예를 들어 보겠습니다. 하지만 setInterval내에서 useState를 업데이트하여 해당 상태에 숫자를 추가합니다.

```jsx

const dataRef = React.useRef();
const [timerVal, setTimerVal] = React.useState(0);

const clearTimer = () => {
  clearInterval(dataRef.current);
}

React.useEffect(() => {
  dataRef.current = setInterval(() => {
    setTimerVal(timerVal + 1);
  }, 500);
  
  return () => clearInterval(dataRef.current);
}, [dataRef]);

return (
 <p>{timerVal}</p>
)

```

이제 타이머가 계속 렌더링을 하면서 1 에서 2로 업데이트될 것으로 예상됩니다. 그러나, 실행 중인 앱을 보면 예상치 못한 동작이 나타납니다.

이것은 클로저라서 그렇습니다. setInterval에 전달된 것은 오랜된 것이기 때문입니다. 이는 리액트 훅을 사용할 때 흔히 발생하는 문제입니다. useState의 API에는 숨겨진 솔루션이 있지만 일단 useRef와 변이를 이용하여 해결해 보겠습니다.

useRef는 참조를 통과하고 해당 참조를 변환하는 것에 의존하기 때문에, 두 번째 useRef를 도입하고 useState 값과 일치하도록 모든 렌더에서 변환하면 이전 클로저로 제한을 해결할 수 있습니다.

```jsx

const dataRef = React.useRef();

const [timerVal, setTimerVal] = React.useState(0);
const timerBackup = React.useRef();
timerBackup.current = timerVal;

const clearTimer = () => {
 clearInterval(dataRef.current);
};

React.useEffect(() => {
  dataRef.current = setInterval(() => {
    setTimerVal(timerBackup.current + 1);
  }, 500);

  return () => clearInterval(dataRef.current);
}, [dataRef]);

```

실제 프로덕션이라면, 이렇게 해결하지 않았을 것입니다. useState에서 콜백을 사용할 것을 권장합니다.

```jsx

const dataRef = React.useRef();

const [timerVal, setTimerVal] = React.useState(0);

const clearTimer = () => {
  clearInterval(dataRef.current);
}

React.useEffect(() => {
  dataRef.current = setInterval(() => {
    setTimerVal(tVal => tVal + 1);
  }, 500);

  return () => clearInterval(dataRef.current);
}, [dataRef])

```

우리는 단지 참조에 대한 중요한 특성 중 하나인 mutation을 설명하기 위해 useRef를 사용하고 있습니다.

## DOM Element References
이 아티클을 시작할 때, ref가 단순한 데이터 저장 방법이 아니라 React 내부에서 DOM 노드를 참조하는 방법이라고 언급했습니다. DOM 노드를 추적하는 가장 쉬운 방법은 요소의 참조 속성을 사용하여 useRef 훅에 저장하는 것입니다.

```jsx

const elRef = React.useRef();

React.useEffect(() => {
  console.log(elRef);
}, [elRef]);

return (
  <div ref={elRef} />
)

```

> 참고 : ref 속성은 모든 HTML 요소에서 React에 의해 추가되고 처리됩니다. 이 예제에서는 div를 사용하지만 이것은 span, header 그너머에 있는 것에 적용됩니다.

이 예제에서 useEffect의 console.log를 살펴보면 현재 속성에 HTMLDivElement인스턴스가 있습니다. 다음 StackBlitz를 열고 콘솔 값을 확인하여 봅시다.

elRef.current값이 현재 HTMLDivElement이기 때문에 자바스크립트 API의 Element.prototype에 접근할 수 있습니다. 이 elRef를 사용하여 기본 HTML 노드를 스타일링 할 수 있습니다.

```jsx

const elRef = React.useRef();

React.useEffect(() => {
  elRef.current.style.background = 'lightblue';
}, [elRef]);

return (
  <div ref={elRef} />
)

```

## Alternative Syntax
참조 속성은 또한 함수를 받아들인다는 것을 주목할 필요가 있습니다. 이 함의에 대해서는 나중에 자세히 설명하겠지만 아래 코드는 정확하게 `ref={elRef}`와 동일하게 동작합니다.

```jsx

const elRef = React.useRef();

React.useEffect(() => {
  elRef.current.style.background = 'lightblue';
}, [elRef]);

return (
  <div ref={ref => elRef.current = ref} />
)


```

## Component References
HTML 요소는 참조를 위한 훌륭한 사용사례입니다. 그러나 하위 렌더링 프로세스의 일부인 요소에 대한 참조가 필요한 경우가 많습니다. 부모 구성 요소에서 자식 구성 요소로 `ref`을 전달하려면 어떻게 해야할까요?

부모에서 자식에게 속성을 전달하여 자식 구성 요소에 참조를 전달할 수 있습니다. 아래 예를 보시죠.

```jsx

const Container = ({children, divRef}) => {
  return <div ref={divRef} />
}

const App = () => {
  const elRef = React.useRef();

  React.useEffect(() => {
    if (!elRef.current) return;
    elRef.current.style.background = 'lightblue';
  }, [elRef]);

  return (
    <Container divRef={elRef} />
  )
}

```

아마 왜 이름을 ref대신 divRef로 했는지 궁금할 겁니다. 이는 리액트의 한계 때문입니다. 프로퍼티 이름을 바꾸지 않고 ref로 하면 의도하지 않은 결과가 초래됩니다.

```jsx

// This code does not function as intended
const Container = ({children, ref}) => {
  return <div ref={ref} />
}


const App = () => {
  const elRef = React.useRef();

  React.useEffect(() => {
    if(!elRef.current) return;
    // If the early return was not present, this line would throw
    // "Cannot read property 'style' of undefinded"
    elRef.current.style.background = 'lightblue';
  }, [elRef]);

  return (
    <Container ref={elRef} />
  )
}

```

Container div가 lightblue 배경색으로 스타일링되어 있지 않다는 것을 알게될 것입니다. 그 이뉴는 elRef.current가 HTML 요소 참조가 되지 않았기 때문입니다. 따라서 단순히 전달하는 용도로  `ref`라는 이름으로는 참조 속성 이름으로 지정할 수 없습니다.

함수형 컴포넌트에서 예상대로 작동하도록 ref이름을 얻는 방법은 무엇일까요?

forwardRef API를 사용하면 ref이름 그대로 전달하기 위해 사용할 수 있습니다. 대신 해당 구성요소를 forwardRef에 할당하여 사용하고 첫번째 구성요소로 props를 주고 두번째 인자로 ref로 주어 액세스를 할 수 있습니다.

```jsx

const Container = React.forwardRef((props, ref) => {
  return <div ref={ref}>{props.children}</div>
})

const App = () => {
  const elRef = React.useRef();

  React.useEffect(() => {
    console.log(elRef);
    elRef.current.style.background = 'lightblue';
  }, [elRef]);

  return (
    <Container ref={elRef} />
  )
}


```

이제 forwardRef를 사용하므로 상위 구성요소에 있는 ref 속성 이름을 사용하여 다시 한 번 elRef에 액세스 할 수 있습니다.

## Class Component References
대부분 함수형 컴포넌트와 관련해서 언급했지만 클래스형 컴포넌트 `ref`를 처리하는 방법을 다루는것도 중요하다고 생각합니다. 다음 클래스 구성 요소를 사용합니다.

```jsx
class Container extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

```

ref 속성을 통과시키려면 어떻게 해야 될 것 같습니까?

```jsx

const App = () => {
  const compRef = React.useRef();

  React.useEffect(() => {
    console.log(compRef.current);
  });

  return (
    <Container ref={container}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </Container>
  );
}

```

원하는 경우 App을 클래스 컴포넌트로 작성할 수도 있습니다.

```jsx

class App extends React.Component {
  compRef = React.createRef();

  componentDidMount() {
    console.log(this.compRef.current);
  }

  render() {
    return (
      <Container ref={this.ref}>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </Container>
    );
  }
}

```

console.log 문을 보면 다음과 같은 내용이 출력됩니다.

```
Container {props: {…}, context: {…}, refs: {…}, updater: {…}…}
context: Object
props: Object
refs: Object
state: null
updater: Object
_reactInternalInstance: Object
_reactInternals: FiberNode
__proto__: Container

```

컨테이너 인스터스의 값을 출력합니다. 실제로 아래 코드를 실행하면 ref.current 값이 Container 클래스의 인스턴스임을 확인할 수 있습니다.

``` js
console.log(container.current instanceof Container); // true
```

하지만, 이 클래스는 무엇일까요? props들은 어디서 오는 걸까요? class 상속에 대해 잘 아신다면, 이건 React.Component에서 확장되어 온 프로퍼티들입니다. Typescript로 정의되어있는 React.Component class를 봅시다. 우리는 꽤나 친숙한 속성들을 볼 수 있습니다.

```jsx

// This is an incomplete and inaccurate type definition shown for
class Component {
  render(): ReactNode;
  context: any;
  readonly props: Object;
  refs: any;
  state: Readonly(any);
}

```

refs, state, props, context 뿐만아니라 render도 보입니다.

## Custom Properties and Methods
리액트 컴포넌트에 빌트인으로 들어있는(예를들면, render, props)것은 class ref에서 액세스할 수 있을 뿐만 아니라 해당 클래스에 첨부된 데이터에도 액세스할 수 있습니다. container.current는 container class의 인스턴스이기 때문에 custom properties와 메서드를 추가하면 참조에서 볼 수 있습니다.

그래서 다음과 같이 클래스 정의를 변경하면:
```jsx

class Container extends React.Component {
  welcomeMsg = "Hello"

  sayHello() {
    console.log('I am saying: ', this.welcomeMsg);
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

```

그런 다음 welcomeMsg 속성을 참조하고 Hello 메서드를 호출 할 수 있습니다.

```jsx

function App() {
  const container = React.useRef();

  React.useEffect(() => {
    console.log(container.current.welcomeMsg); // Hello
    container.current.sayHello(); // I am saying: Hello
  });

  return (
    <Container ref={container}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </Container>
  );
}

```

## Unidirectional Flow(단방향 흐름)
'universal directional flow'는 이 글에서 다루려고 하는 주제보다 더 넓은 주제이지만 위에서 설명된 패턴을 활용하지 말아야 하는 이유를 이해하는 것이 중요하다고 생각합니다. refs가 유용한 이유가 컨셉차원에서는 위험한 이유중 하나입니다. : 단방향 데이터 흐름을 방해합니다. 

대표적으로 리액트 앱에서는 데이터를 한 방향으로 흐르기를 원할겁니다.

![unidirectional-flow](https://res.cloudinary.com/practicaldev/image/fetch/s--7fEqZFdK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/23l6qsl3ep2fj6nkkhb5.png)

```jsx

import React from 'react';

class SimpleForm extends React.Component {
  render() {
    return (
      <div>
        <label>
          <div>Username</div>
          <input
            onChange={e => this.props.onChange(e.target.value)}
            value={this.props.value}
          />
        </label>
        <button onClick={this.props.onDone}>Submit</button>
      </div>
    )
  }
}

export default function App() {
  const [inputTxt, setInputTxt] = React.useState("");
  const [displayTxt, setDisplayTxt] = React.useState("");

  const onDone = () => {
    setDisplayTxt(inputTxt);
  };

  return (
    <div>
      <SimpleForm
        onDone={onDone}
        onChange={v => setInputTxt(v)}
        value={inputTxt}
      />
      <p>{displayTxt}</p>
    </div>
  );
}


```

이번 예제에서는 onChange 프로퍼티와 value프로퍼티 모두 SimpleForm 컴포넌트로 전달되기 때문에 관련된 데이터를 한 곳에 보관할 수 있습니다. 실제 로직은 SimpleForm 컴포넌트 자체 내에서 발생하지 않는다는 것을 알게 될것입니다. 따라서 이 컴포넌트는 '덤' 컴포넌트라고 불릴 것입니다. 스타일링과 합성성을 위해 사용된 부분이 있지만 컴포넌트 로직 자체는 사용되지 않았습니다.

이것이 적절한 리액트 컴포넌트의 모습입니다. 컴포넌트 자체에서 상태를 올리고 멍청한 컴포넌트로 남아있는 이러한 패턴은 리액트 팀 자체의 지침에서 시작됩니다. 이 패턴은 'lifting state up'이라고 부릅니다.

자 우리는 따라야 할 패턴에 대해 더 좋게 이해하게 됐기 때문에 잘못된 방식을 한번 살펴봅시다.

## Breaking from Suggested Patterns(제시된 패턴을 벗어나기)
'lifting state'을 역행 하는 것은 그 state를 다시 SimpleForm컴포넌트로 낮추는 것입니다. 그런 다음 App에서 해당 데이터에 액세스 하려면 ref속성을 사용하여 상위 데이터에서 해당 데이터에 액세스할 수 있습니다.

```jsx
import React from "react";

class SimpleForm extends React.Component {
  // State is now a part of the SimpleForm component
  state = {
    input: ""
  };

  onChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <div>
        <label>
          <div>Username</div>
          <input onChange={this.onChange.bind(this)} value={this.state.input} />
        </label>
        <button onClick={this.props.onDone}>Submit</button>
      </div>
    );
  }
}

export default function App() {
  const simpleRef = React.useRef();
  const [displayTxt, setDisplayTxt] = React.useState("");

  const onDone = () => {
    // Reach into the Ref to access the state of the component instance
    setDisplayTxt(simpleRef.current.state.input);
  };

  return (
    <div>
      <SimpleForm 
        onDone={onDone} 
        ref={simpleRef} 
      />
      <p>{displayTxt}</p>
    </div>
  );
}
```

그러나 문제는 확장을 시작할 때 상태 동작을 관리하는 것이 더 어렵다는 것입니다. 어플리케이션 로직을 따르는 것 조차 더 어렵습니다. 이제 이 두 구성 요소의 라이프사이클이 시각적으로 어떤 모습인지 살펴보겠습니다.

먼저 SimpleForm 컴포넌트에서 state를 더 낮아진 SimpleForm 컴포넌트를 살펴보겠습니다.

![lifecycle-image](https://res.cloudinary.com/practicaldev/image/fetch/s--xBq3OAXK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gp0rhmu98e3hrihb24rp.png)
이 예에서 응용 프로그램 상태의 흐름은 다음과 같습니다.

- App(그리고 children `SimpleForm`)을 렌더링한다.
- 유저는 `SimpleForm`에 저장된 데이터를 변경한다.
- 유저가 `onDone`액션을 시작하면 `App`에서 함수를 실행시킨다.
- `App`의 `onDone`메서드는 `SimpleForm`데이터를 조사한다.
- 데이터가 App으로 반환되면 자체 데이터가 변경되므로 `App`과 `SimpleForm`의 리렌더가 모두 시작됩니다.

위의 도표와 데이터 흐름을 개요에서 볼 수 있듯이 데이터는 서로 다른 두 위치에 걸쳐 분리되어 있습니다. 따라서 이 코드를 수정하기 위해서는 멘탈모델이 혼란스러울 수 있습니다. 이 코드 샘플은 `onDone`이 `SimpleForm`안에서 상태를 변경했을 때 더 복잡해 질 수 있습니다.

![diagram](https://res.cloudinary.com/practicaldev/image/fetch/s--85u403eB--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/80egvk8se7mddkkp7v6y.png)
- `App`(그리고 children인 `SimpleForm`)을 렌더링한다.
- 유저는 `SimpleForm`에서 변화를 만듭니다. state는 콜백을 통해 `App`으로 끌어 올려집니다.
- 유저는 `onDone`액션을 합니다. 이것은 `App`에서 함수를 시작합니다.
- `App`의 `onDone`메서드는 이미 컴포넌트에 필요한 데이터를 포함하고 있습니다. 그래서 추가 오버헤드 로직없이 App 및 SimpleForm을 다시 렌더링하기만 하면 됩니다.

보시다시피, 여러 단계에서 이러한 방법들은 비슷하지만(더 작은 예제에서는 그렇지 않을수도 있지만) 단방향 흐름은 훨씬 더 합리적이고 따르기 쉽습니다.

그렇기 때문에 React 핵심 팀은 단일 지향성을 사용하고 필요하지 않을 때 해당 패턴에서 벗어나는 것을 적절히 피할 것을 강력히 권장합니다.

## Add Data to Ref
이전에 `useImperativeHandle`이라는 훅을 들어본적이 없을 겁니다. 이것이 바로 그 이유입니다. 컴포넌트로 전달된 ref에 메서드 및 속성을 추가할 수 있습니다. 이렇게 하면 상태를 위로 올리도록 강요하는 대신 부모 내에서 자녀의 데이터 직접 액세스할 수 있습니다. 이것은 단일 흐름을 깨트릴 수 있습니다.

이제 `useImperativeHandle`을 사용하여 확장할 수 있는 구성 요소를 살펴보겠습니다.

```jsx
import React from "react";
import "./style.css";

const Container = React.forwardRef(({children}, ref) => {
  return <div ref={ref} tabIndex="1">
    {children}
  </div>
})

export default function App() {
  const elRef = React.useRef();

  React.useEffect(() => {
    elRef.current.focus();
  }, [elRef])

  return (
    <Container ref={elRef}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </Container>
  );
}
```

포함된 데모에서 볼 수 있듯이 어플리케이션이 렌더링될 때 `Container`div에 `focus`를 줄 것입니다. 이 예제에서는 일단 `useImperativeHandle`을 사용하지 않고 대신 `useEffect`의 타이밍에 의존하여 ref의 `current`가 이미 정의되어있습니다.

`Container div`가 프로그래밍적으로 `focus`된 때를 추적해봅시다. 어떻게 하면 될까요? 많은 옵션들이 있지만 앱을 수정할 필요없는 한가지 방법은 `useImperativeHandle`입니다.

`useImperativeHandle`을 사용하면 속성을 참조에 추가할 수 있을 뿐만 아니라 동일한 이름의 함수를 반환하여 native API의 대체 구현을 제공할 수 있습니다.

```jsx
import React from "react";
import "./style.css";

const Container = React.forwardRef(({children}, ref) => {
  const divRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      divRef.current.focus();
      console.log("I have now focused");
    }
  }))

  return <div ref={divRef} tabIndex="1">
    {children}
  </div>
})

export default function App() {
  const elRef = React.useRef();

  React.useEffect(() => {
    elRef.current.focus();
  }, [elRef])

  return (
    <Container ref={elRef}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </Container>
  );
}
```

콘솔을 보면 focus()가 실행되었을 때 console.log도 찾을 수 있습니다!

`useImperativeHandle`과 `forwardRef`의 조합은 컴포넌트의 API를 최대한 자연스럽게 활용할 수있습니다.

그러나 네이티브 API를 자체 API로 보완하려는 경우 두 번째 매개 변수에 반환된 속성 및 메서드만 참조로 설정됩니다. 즉, 지금 실행 중인 경우:

```jsx

  React.useEffect(() => {
    elRef.current.style.background = 'lightblue';
  }, [elRef])

```

`App`에서 스타일은 더이상 `elRef.current`에 정의되어 있지 않기 때문에 에러가 발생합니다.

네이티브 API이름에만 국한되지 않습니다. 다른 App 컴포넌트인 이 샘플코드에서는 어떤 역할을 한다고 생각하십니까?

```jsx
  React.useEffect(() => {
    elRef.current.konami();
  }, [elRef])
```

`Container`요소로 포커스가 적용되면 화살표 키를 사용하여 'konami 코드'를 입력해 보십시오. 그게 끝나면 어떻게 되죠?

## React Refs in `useEffect`
고백할게 있습니다. 제가 거짓말을 했어요. 악의는 없지만 이전 샘플에서 프로덕션에서 절대 사용해서는 안 되는 코드를 반복해서 사용했습니다. 왜냐하면 손을 조금 흔들지 않으면, 이런 것들을 가르치는 것이 까다로울 수 있기 때문입니다.

무슨 일이 일어나고 있는 거죠?

```jsx
React.useEffect(() => {
  elRef.current.anything.here.is.bad();
}, [elRef])
```

> 뭐라고?


그렇구나! `useEffect` 내부에서 elRef.current를 배치해서는 안됩니다(자신이 실제로 무엇을 하고 있는지 알고 있는 경우가 아니라면)

> 왜 그럴까요?

이에 대해 자세히 답변하기 전에 `useEffect`의 작동 방식을 살펴보겠습니다.

다음과 같은 간단한 구성 요소가 있따고 가정합시다.

```jsx
const App = () => {
  const [num, setNum] = React.useState(0);

  React.useEffect(() => {
    console.log("Num has ran");
  }, [num])

  return (
    // ...
  )
}
```

종속성 배열이 num의 변경 사항을 수신하고 데이터가 업데이트되면 이펙스 함수를 시작할 것으로 예상할 수 있습니다. `useEffect`는 데이터 업데이트를 적극적으로 수신하고 데이터가 변경되면 이펙트가 발생한다는 것이 이러한 사고방식입니다. 이 멘탈 모델은 부정확하며 ref 사용과 결합되면 위험해질 수 있습니다. 저조차도 이미 이 기사를 쓰기 시작할 때까지 이것이 잘못된 것이라는 것을 깨닫지 못했습니다!

ref없는 상태에서 배열 의존성을 추적하면 일반적으로 이 추론은 코드 베이스에 버그를 만들지는 않지만 ref가 추가되면 오해를 만든 다는 것입니다.

useEffect가 실제로 작동하는 방식은 훨씬 더 수동적입니다. 렌더링하는 동안 useEffect는 종속성 배열의 값에 대해 검사를 수행합니다. 값의 메모리 주소가 변경된 경우(즉, 개체의 mutation은 무시) 이펙트를 실행합니다. 이는 앞서 개략적으로 설명한 이해와 비슷해 보일 수 있지만 'push'와 'pull'의 차이입니다. useEffect는 어떤 것도 수신하지 않으며 렌더 자체를 시작하지 않지만 렌더는 이펙트의 수신 및 값 비교를 사용합니다. 즉, 렌더가 없는 경우 어레이의 메모리 주소가 변경되었다고 하더라도 useEffect는 이펙트를 실행할 수 없습니다.

왜 refs가 사용될때 이것이 실행될까요? 명심해야할 두가지가 있습니다.

- refs는 재할당보다는 객체 '변화'에 의존합니다.
- ref가 변이되면 리렌더링이 시작되지 않습니다.
- useEffect 배열은 리렌더링에 대해서만 체크합니다.
- ref의 현재 프로퍼티 집합은 리렌더링을 시작하지 않습니다(기억하세요. 어떻게 useRef가 이행됐는지)

이를 알고 있으므로, 다시 불쾌한 예제를 한번 살펴 보겠습니다.

```jsx
export default function App() {
  const elRef = React.useRef();

  React.useEffect(() => {
    elRef.current.style.background = "lightblue";
  }, [elRef]);

  return (
    <div ref={elRef}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
```

이 코드는 우리가 일을 제대로 했기 때문이 아니라, 리액트의 `useEffect` 훅 타이밍 특성 덕분에 처음에 예상했던 대로 동작합니다.

첫 번째 렌더 이후에 useEffect가 발생하므로 elRef.current.style에 새 값이 할당된 때 elRef에 의해 useEffect가 이미 할당되었습니다. 하지만, 만약 우리가 그 타이밍의 예상을 어긴다면 다른 행동을 보게 될 것입니다.

초기 렌더 이후에 div 렌더링을 만들면 어떨것 같습니까?

```jsx
export default function App() {
  const elRef = React.useRef();
  const [shouldRender, setRender] = React.useState(false);

  React.useEffect(() => {
    if (!elRef.current) return;
    elRef.current.style.background = 'lightblue';
  }, [elRef.current])

  React.useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 100);
  }, []);

  return !shouldRender ? null : ( 
    <div ref={elRef}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
```

이런! 더이상 배경이 'light blue'가 아닙니다. div의 렌더링을 지연시키기 때문에 초기 렌더에 elRef가 할당되지 않습니다. 그런 다음 렌더링되면 elRef의 .current속성을 변환하여 ref를 할당합니다. mutations가 리렌더링을 시작하지 않기 때문에(또한 useEffect는 렌더링 중에만 실행됨), useEffect는 값의 차이를 '비교'할 기회가 없으므로 부작용을 만듭니다.

헷갈리나요? 괜찮아요 별거 아닙니다. 나도 처음엔 그랬어요. 운동하는 법을 배우는 사람들을 돕기 위해 일종의 플레이그라운드를 만들었어요!

```jsx
  const [minus, setMinus] = React.useState(0);
  const ref = React.useRef(0);

  const addState = () => {
    setMinus(minus + 1);
  };

  const addRef = () => {
    ref.current = ref.current + 1;
  };

  React.useEffect(() => {
    console.log(`ref.current:`, ref.current);
  }, [ref.current]);

  React.useEffect(() => {
    console.log(`minus:`, minus);
  }, [minus]);
```

> 콘솔을 열고 각 값을 변경할 때 어떤 console.log가 실행되는지 기록해 두십시오

어떻게 이 예제를 사용할까요? 좋은 질문입니다!

먼저 useState 헤더 아래의 버튼을 클릭하여 시작합니다. 버튼을 클릭할때마다 즉시 리렌더링이 트리거되고 UI에 표시된 값이 즉시 업데이트 됩니다. 따라서 useEffect를 사용하여 이전 값을 현재 값과 비교하고 console.log를 이펙트로 실행할 수 있습니다.

자, useState의 add 버튼을 시작한 후에는 useRef 버튼을 사용하여 동일한 작업을 수행합니다. 원하는 횟수 만큼 클릭하면 다시 렌더링이 트리거되지 않습니다. useRef mutations는 DOM을 다시 렌더링하지 않기 때문에 두 useEffect 모두 값을 비교할 수 없으므로 두 useEffect 모두 실행되지 않습니다. 그러나 .current의 값이 업데이트되고 있습니다. 컴포넌트가 다시 렌더링되지 않기 때문에 UI에 표시되지 않습니다. 다시 렌더링을 트리거하면(useState 'add'버튼을 다시 눌러보자) .current의 내부 메모리 값과 일치하도록 UI가 업데이트됩니다.

결론 - useState 'add'를 두번 누릅니다. 화면에 표시되는 값은 2입니다. 그런 다음 useRef 'add'버튼을 세번 누릅니다. 화면에 표시되는 값은 0입니다. useState의 버튼을 다시 한 번 누르고 둘다 값은 다시 3입니다!

## Comments from Core Team
useEffect에서 ref를 추적하는 의도하지 않은 효과 때문에 핵심 팀은 이를 피하는 것을 명시적으로 제안했습니다.

[댄 아브라모프의 발언](https://github.com/facebook/react/issues/14387#issuecomment-503616820)

> 앞에서 언급했듯이 ref.current를 종속성에 포함시키면 실수할 가능성이 높습니다. ref는 변경 내용이 리렌더링을 시작할 필요가 없는 값에 대한 것입니다.

[두번이나](https://github.com/facebook/react/issues/14387#issuecomment-493677168)

> ref.current를 의존성으로 넣으려고 할때는 대개 콜백 ref를 원합니다.


[트위터에서 다시](https://twitter.com/dan_abramov/status/1093497348913803265)

> 내 생각에 당신은 그것에 대한 콜백 ref를 원하는 것 같습니다. ref가 깊숙이 들어가 소유자 컴포넌트의 독립적인 라이프 사이클을 가질 수 있기 때문에 컴포넌트가 마법처럼 ref 변경 사항에 대응하도록 할 수는 없습니다.


아주 좋은 부분입니다. 하지만 댄이 말한 callback ref란 무엇인가요?

## Callback Refs
이 기사를 시작할 때, 우리는 ref를 할당하는 다른 방법을 언급했었습니다.

```jsx
<div ref={elRef}>
```

유효한 것이 있습니다.(조금 더 자세한)

```jsx
<div ref={elRef}>
```

ref가 콜백 기능을 받아들일 수 있기 때문입니다. 이러한 함수는 요소의 노드 자체와 함께 호출됩니다. 즉, 이 문서에서 여러번 사용한 .style 할당을 원하는 경우 인라인할 수 있습니다.

```jsx
<div ref={node => node.style.background = "lightblue"}>
```

하지만 당신은 아마도 그것이 함수를 받아들인다면, 우리는 컴포넌트에서 이전에 선언된 콜백을 전달할 수 있다고 생각할 것입니다. 바로 그것입니다!

```jsx
  const elRefCB = React.useCallback(node => {
    if (node !== null) {
      node.style.background = "lightblue";
    }
  }, []);

  return !shouldRender ? null : (
    <div ref={elRefCB}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
```

> 하지만 이봐요 잠시만요! 렌더 타이밍 불일치가 여전히 존재하더라도 배경은 동일하게 적용됩니다! useEffect 타이밍 불일치로 인해 이전에 발생한 버그가 발생하지 않는 이유는 무엇일까요?

이 예제에서는 useEffect의 사용을 완전히 제거했기 때문입니다! 콜백 함수는 ref를 사용할 수 있는 경우에만 실행되기 때문에, .current가 존재하는 것을 확실히 알 수 있고 그로 인해 속성 값과 해당 콜백 내부에 더 많은 것을 할당할 수 있습니다.

> 하지만 저는 그 ref를 코드베이스의 다른 부분에도 동일하게 전달해야 합니다. 함수 자체가 통과할 수 없어요 그건 ref가 아니라 함수일 뿐입니다.

이건 사실입니다. 그러나 두 동작을 결합하여 useRef에 데이터를 저장하는 콜백을 만들 수 있습니다(나중에 레퍼런스를 사용할 수 있습니다.)

```jsx
  const elRef = React.useRef();

  console.log("I am rendering");

  const elRefCB = React.useCallback(node => {
    if (node !== null) {
      node.style.background = "lightblue";
      elRef.current = node;
    }
  }, []);

  React.useEffect(() => {
    console.log(elRef.current);
  }, [elRef, shouldRender]);
```

## `useState` Refs
때때로 `useRef`와 콜백 ref의 조합이 충분하지 않을 수 있습니다. .current에서 새 값을 얻을 때마다 다시 렌더링해야 하는 드문 경우가 있습니다. 문제는 .current의 고유한 특성이 리렌더링을 방지한다는 것입니다. 어떻게 하면 좋을 까요? useRef를 useState로 전환하여 .current를 완전히 제거합니다.

콜백 참조를 사용하여 useState 훅에 할당할 수 있습니다.

```jsx
  const [elRef, setElRef] = React.useState();

  console.log('I am rendering');

  const elRefCB = React.useCallback(node => {
    if (node !== null) {
      setElRef(node);
    }
  }, []);

  React.useEffect(() => {
    console.log(elRef);
  }, [elRef])
```

자 ref 업데이트로 인해 리렌더링이 발생하므로 안전하게 ref를 useEffect의 종속성 배열로 사용할 수 있습니다.

```jsx
 const [elNode, setElNode] = React.useState();

  const elRefCB = React.useCallback(node => {
    if (node !== null) {
      setElNode(node);
    }
  }, []);

  React.useEffect(() => {
    if (!elNode) return;
    elNode.style.background = 'lightblue';
  }, [elNode])
```

그러나, 이는 성능 비용을 상쇄하는 결과를 낳습니다. 리렌더링을 하기때문에 리렌더링을 하지 않았을 때보다 본질적으로 더 느려집니다. 그러나 여기에는 유효한 용도가 있습니다. 독자는 단지 결정과 코드의 사용법만 주의하면 됩니다.

## Conclusion
대부분의 엔지니어링과 마찬가지로 API의 한계, 장점 및 해결 방법을 알면 성능이 향상되고 프로덕션에서 버그가 줄어들며, 코드 구성을 보다 쉽게 사용할 수 있습니다. 이제 ref로 둘러싼 모든 이야기를 알았으니, 당신은 그 지식을 가지고 무엇을 할 것인가요? 우리는 당신의 소식을 듣고 싶습니다! 아래에 댓글을 달거나 커뮤니티 디스코드에 참여해 주세요!