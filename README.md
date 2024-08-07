# Admin Project

# [Skills]

- React(vite)
- Typescript
- React-Router-Dom, Styled-Components

# [기능]

## 로그인(/login)

- 회사 이메일로 로그인
- 로그인 완료
  - token 발급 (임시 데이터이므로 관련 정보 반환 토큰임) : 로그인 유저 정보, 접근 권한 포함
  - token이 있을 경우 root 페이지로 이동
  - token이 없을 경우 /login만 접근 가능

## 로그인 유저 정보

- modal 구현
- token에 포함된 정보 출력: 이름, 부서, 사원번호, 이메일
- logout 클릭 시, 로그인 페이지(/login)로 이동

## 메인화면(/)

- 상품과 고객 수 총 합
- 최근 주문 내역
- 카테고리별 상품 수 차트
- 많이 팔린 상품 순위 차트

## 상품

### 리스트(/products)

- 상품 리스트 테이블
- 각 행 클릭 시 상세페이지로 이동
- id, 상품명, 가격

### 상세(/products/:id)

- 상품 상세 정보
- 상품 이미지, id, 상품명, 카테고리, 가격, 평점, 설명
- edit 클릭 시, 수정 페이지(/products/:id/edit)로 이동

### 추가 & 수정

- 추가(/products/add)

  - id : 랜덤 정수
  - 상품명(title), 가격(price), 상품 사진 주소(image), 카테고리(category), 설명(description) 입력 필수

- 수정(/products/:id/edit)
  - 추가 폼과 동일, 기존 내용을 기본값으로 보여줌

## 고객

### 리스트(/users)

- 고객 리스트 테이블
- 각 행 클릭 시 상세페이지로 이동
- id, 고객명, 아이디(username), 핸드폰번호

### 상세(/users/:id)

- 고객 상세 정보
- id, 고객명, 아이디(username),핸드폰번호, 이메일, 주소, 주문 내역

## 주문내역

### 리스트(/carts)

- 주문 내역 리스트 테이블
- 각 행 클릭 시 상세페이지로 이동
- id, 고객id, 날짜

### 상세(/carts/:id)

- 주문내역 상세 정보
- id, 날짜, 고객id, 구매한 상품 내역
