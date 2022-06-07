# jest-mock

## jest.fn()

인수로 구현이 전달되면 정확한 mock 타이핑이 가능하다. 대부분은 형식적으로 사용하기에 jest.fn()형식으로 사용한다.

### jest.fn().getMockName()

mock 의 이름을 리턴 받는다. 이것은 jest.fn().mockName(value)를 통해서 set할 수 있다.

### jest.fn().mock.calls

mock 함수에서 수행된 호출의 인수를 보여주는 배열을 리턴한다. 배열의 각 인덱스는 호출 중에 전달된 인수의 배열이다.

### jest.fn().mock.results

mock 함수에 대해 수행된 모든 호출의 결과를 포함하는 배열이다. 이 배열의 각 항목은 type 속성 및 value 속성을 포함한 객체이다.

type은 return, throw, incomplete 중에 하나다.

### jest.fn().mock.contexts

컨텍스트는 함수가 호출될 때 받는 this 값이다. 

이것은 bind, call, apply 함수를 사용할때 사용한다.

### jest.fn().mock.lastCall

마지막 호출된 함수의 인수가 포함되어 있는 배열을 리턴한다.

함수가 호출되지 않으면 undefined가 리턴된다.

### jest.fn().mockClear()

mock.calls, mock.instance, mock.contexts, mock.results에 저장된 모든 정보를 지운다.

- clearMocks를 옵션으로 설정해두면 각 테스트 전에 자동적으로 mock을 클리어한다.

### jest.fn().mockReset()

mockClear()가 하는 모든 일을 수행하고 mock된 return value와 implementation도 제거한다.

완전히 초기 상태로 재설정하려는 경우에 유용하다.(spy는 이경우 리턴 값이 없어진다.)

- mockReset 옵션으로 자동적으로 작동시킬 수 있다.

### jest.fn().mockRestore()

mockReset()이 하는 모든일을 하고 원래 구현을 복원한다.

이 기능은 특정 테스트 사례에서 기능을 시뮬레이션하고 다른 테스트 사례에서 원래 구현을 복원하려는 경우에 유용하다.

이 함수는 mock이 jest.spyOn()으로 생성된 경우에만 작동한다. 따라서 jest.fn()을 수동으로 할당할 때 직접 복원을 수행해야 한다.

- restoreMocks 옵션은 자동으로 작동시킬 수 있다.

### jest.fn().mockImplementation(fn)

대체하여 실행할 함수를 받는다. 

mock은 스스로 여전히 모든 호출과 자체에서 들어오는 인스턴스를 기록한다. 유일한 차이점은 mock이 실행되면 구현도 실행된다는 점이다.

jest.fn(implementation)은 jest.fn().mockImplementation(implementation)의 단축어이다.

### jest.fn().mockImplementationOnce(fn)

모킹된 함수에 대한 한 번의 호출만 구현으로 쓸 수 있또록 허락한다. 여러 함수 호출이 서로 다른 결과를 생성하도록 체인을 설정할 수 있다.

### jest.fn().mockName(name)

jest.fn()대신 테스트 결과를 출력에 사용할 문자열을 사용하여 참조 중인 mock 함수를 표현한다.

### jest.fn().mockReturnThis()

jest.fn(function() {return this})의 syntatic sugar

### jest.fn().mockReturnValue(value)

mock 함수가 불려지면 value를 리턴한다.

### jest.fn().mockReturnValueOnce(value)

mock 함수에 대한 한 번의 호출에 대해 반환되는 값을 허락한다.

연속적인 호출이 다른 값을 반환하도록 체이닝 할수 있다.

mockReturnValueOnce가 모두 불려서 값이 없으면 mockReturnValue로 지정된 값을 반환한다.

### jest.fn().mockResolvedValue(value)

jest.fn().mockImplementation(() => Promise.resolve(value)); 의 syntatic sugar

### jest.fn().mockResolvedValueOnce(value)

jest.fn().mockImplementationOnce(() => Promise.resolve(value)); 의 syntatic sugar

### jest.fn().mockRejectedValue(value)

jest.fn().mockImplementation(() => Promise.reject(value)); 의 syntatic sugar

### jest.fn().mockRejectedValueOnce(value)

jest.fn().mockImplementationOnce(() => Promise.reject(value)); 의 syntatic sugar
