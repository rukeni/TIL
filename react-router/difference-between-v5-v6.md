# react-router V5 -> V6 차이

## 버전

- 6버전 부터는 필수로 react 버전이 16.8이상이어야한다.

## 번들사이즈

- 5버전 사이즈 20.9kb
- 6버전 사이즈 8.1kb

## Switch -> Routes 네이밍 변경

- `<Route />`의 부모 컴포넌트가 바뀐거임

## exact 속성 삭제

- default가 exact처럼 정확히 일치하는 상태고
- 오직 와일드카드(*)와 dynamic 스타일(/:id)을 사용해서 하위경로를 매칭시킬 수 있다
- 정규표현식 안됨
  - /users/*

## Route에서 컴포넌트를 주입받는 방식 변경

- component -> element로 컴포넌트 넣는 이름 변경
- 컴포넌트 참조를 가져가는 방식에서 컴포넌트 자체를 리턴하는 방식을 변경
  - before: `<Route path='/users' component={User} />`
  - after: `<Route path='/users' element={<User />}>`

## 중첩라우팅

- before: `useRouteMatch` 훅으로 부모 path를 얻어 조합하는 방식
- after:  `Outlet`을 이용하여 `Route`컴포넌트의 children으로 `Route`컴포넌트를 허용하는 방식

## useHistory -> useNavigate로 변경

- useHistory는 객체로 push(), replace()등의 메서드를 소유하여 메서드를 호출하는 방식
  - `const history = useHistory();`
  - `history.push('/');`
  - `history.replace('/good');`
- useNavigate는 함수로 두번째 인수로 객체가 들어와서 다양한 옵션을 줄수있는 방식
  - `const navigate = useNavigate();`
  - `navigate('/');`
  - `navigate('/good', {replace: true});`

## react-router-config의 대체품 useRoutes

- 따로 react-router-config 설치 불필요
- useRoutes사용하면 됨

## `<Redirect>`를 `<Switch>`에서 직접 사용 불가

- before: `<Switch><Redirect from"about" to="about-us" /></Switch>`
- after: `<Routes><Route path="about" render={() => <Redirect to="about-us" />} /></Routes>`

## Link 컴포넌트에서 Prop 불가

- 디자인시스템에 맞게 컴포넌트를 제작하는을 위해 뭔가 작업이 필요하다면
- [https://reactrouter.com/docs/en/v6/upgrading/v5](https://reactrouter.com/docs/en/v6/upgrading/v5)
- `Remove <Link> component prop` 제목을 찾아서 커스텀 훅을 보자
