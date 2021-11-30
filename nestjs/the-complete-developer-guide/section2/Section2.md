# NestJS: The Complete Developer's Guide

# 섹션 2 The Basics of Nest

@nestjs/common → Nest로부터 우리가 필요한 다양한 클래스들, 함수들이 포함되어있다.

@nestjs/plaform-express → Http 리퀘스트 핸들링을 Express.js 방식으로 하게 한다.

reflect-metadata → 데코레이터를 돕는다.

typescript → 타입스크립트를 사용할 수 있게 한다.

Nest.js 서버

1.  요청 데이터 에대한 유효성 검사 → Pipe
2.  유저 인증절차 → Guard
3. 요청 라우트 → Controller
4. 비즈니스 로직 → Service
5. 데이터베이스 접근 → Repository

Nest의 요소들

1.  Controllers → 리퀘스트 핸들링
2. Services → 데이터 접근 핸들링 과 비즈니스 로직
3. Modules → 코드 그룹화
4. Pipes → 데이터 유효성 검사
5. Filters → 요청 핸들링하는동안 에러 처리
6. Guards → 인증 처리
7. Interceptors → 요청 또는 응답에 추가 로직 더하기
8. Repositories → DB 저장 처리

컨벤션들

1.  하나의 클래스에 하나의 파일
2. 클래스 이름은 우리가 만들려고 하는 대상을 포함시켜야한다.
3. 클래스의 이름과 파일 이름은 항상 일치가 되는 포맷이어야한다.
4. 파일이름 템플릿 : name.type_of_thing.ts