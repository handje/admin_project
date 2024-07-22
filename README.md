# Admin Project

# [Skills]

- React(vite)
- Typescript

# [기능]

## 로그인(/login)

- 회사 이메일로 로그인
- 로그인 완료
  - token 발급 (임시 데이터이므로 관련 정보 반환 토큰임) : 로그인 유저 정보, 접근 권한 포함
  - token이 있을 경우 root 페이지로 이동
  - token이 없을 경우 /login만 접근 가능

## 메인화면(/) \_ (구현 예정)

- 상품과 고객 수 총 합
- 카테고리별 상품 수 차트
- 최근 주문 내역
- 많이 팔린 상품 순위 차트

## 상품

### 리스트(/posts)

- 상품 리스트 테이블
- 각 행 클릭 시 상세페이지로 이동
- id, 상품명, 가격

### 상세(/posts/:id)

- 상품 상세 정보
- 상품 이미지, id, 상품명, 카테고리, 가격, 평점, 설명
- edit 클릭 시, 수정 페이지(/posts/:id/edit)로 이동
- X 클릭 시, 상품리스트(/posts)로 이동

### 추가 & 수정

- 추가(/posts/add)

  - role의 add가 true일 경우만 접근 가능
  - id : 랜덤 정수
  - 상품명(title), 가격(price), 상품 사진 주소(image), 카테고리(category), 설명(description) 입력 필수

- 수정(/posts/:id/edit)
  - role의 edit이 true일 경우만 접근 가능
  - 추가 폼과 동일, 기존 내용을 기본값으로 보여줌

## 고객

- role의 users가 true일 경우만 접근 가능

### 리스트(/customers)

- 고객 리스트 테이블
- 각 행 클릭 시 상세페이지로 이동
- id, 고객명, 아이디(username), 핸드폰번호

### 상세(/customers/:id)

- 고객 상세 정보
- id, 고객명, 아이디(username),핸드폰번호, 이메일, 주소, 주문 내역
- X 클릭 시, 고객리스트(/customers)로 이동

## 로그인 유저 정보

- modal 구현
- token에 포함된 정보 출력: 이름, 부서, 사원번호, 이메일
- logout 클릭 시, 로그인 페이지(/login)로 이동
