# 보리쌀 - 보리사이트 프론트엔드

## 🐶1. 서론

### 왜 보리쌀을 만들게 됐나?
우리 귀엽고 세상에서 제일귀여운 보리를 사람들에게 자랑하고 싶어서 만들게 됐습니다. 실제로 우리 보리는 너무 귀엽습니다. 아래 사진을 보실래요? 
![KakaoTalk_20230331_170007171](https://user-images.githubusercontent.com/52379503/229061211-af0e2c3a-b9c0-4bcf-8b3c-a2a3ec0f4b28.jpg)

![KakaoTalk_20230402_223912387](https://user-images.githubusercontent.com/52379503/229356806-ba325358-1b0a-418d-b3ca-228ce130aa36.jpg)

![KakaoTalk_20230402_223912387_01](https://user-images.githubusercontent.com/52379503/229356815-3e63dd74-6097-44c6-9279-bb2ed97e746f.jpg)

너무귀엽죠ㅎㅎ
## 🐶2. 기획서

https://www.figma.com/file/ostLEtK2oJDRCU3HInhDbD/%EB%B3%B4%EB%A6%AC%EC%8C%80?node-id=0%3A1&t=4JlyKT2EoBWC6vIP-1

## 🐶3. 브랜치

### 배포 브랜치명

- release

### 개발 브랜치명

- develop

### 화면별 브랜치명

- feature/main-page
- feature/goods-page
- feature/bori-gallery-page
- feature/user-page
- feature/admin-page

## 🐶4. 기술 스택

![프론트엔드](https://user-images.githubusercontent.com/52379503/229461288-32589c12-a04c-4516-b41d-ba9818543d32.png)


## 🐶5. 플로우 차트

- 로그인과 회원가입 플로우차트

![회원가입과 로그인 플로우차트](https://user-images.githubusercontent.com/52379503/229060124-97532144-7917-46bb-be2c-e9635a18fea5.png)

- 굿즈 플로우차트

![주문과 장바구니 플로우차트](https://user-images.githubusercontent.com/52379503/229060118-d01b2df7-e2bf-4f42-b086-9cc3d08c52dd.png)

- 배송조회 플로우차트

![배송내역조회 플로우차트](https://user-images.githubusercontent.com/52379503/229060049-31577866-8efb-4a58-b2c2-d2ed16c3b27b.png)

- 굿즈 등록 플로우차트

![상품 등록 플로우차트](https://user-images.githubusercontent.com/52379503/229060092-07e1081f-4f1b-4159-9896-ebf203fc37a5.png)

- 보리갤러리 플로우차트

![보리갤러리 플로우차트](https://user-images.githubusercontent.com/52379503/229060070-a4c3fb88-ce49-4594-9352-8152a2532f28.png)


## 🐶6. 폴더 구조
![image](https://user-images.githubusercontent.com/52379503/229061537-8080493f-c2cb-4af6-9ad5-610dd9958542.png)

폴더들은 위에 보시는 구조처럼 이루어져 있습니다. scss파일, test파일, 스토리북 파일과 같은 파일들을 계속해서 찾아다니는 과정이 불편하고 비효율적이라고 생각이 들었습니다. 때문에 저는 하나의 컴포넌트와 연관된 모든 *test, stories, module.scss*파일들을 다음과 같이 구성시켰습니다. 

## 🐶7. 시연 영상

### ✨보리쌀 메인페이지
![1 보리쌀 메인페이지](https://user-images.githubusercontent.com/52379503/230714310-4bc6ceb5-064f-471e-a297-b34de86027fe.gif)

### ✨회원가입
![2 회원가입](https://user-images.githubusercontent.com/52379503/230714313-a524f3a7-4fcf-4231-8869-a6d1cde28dbe.gif)

### ✨로컬 로그인
![3 로컬 로그인](https://user-images.githubusercontent.com/52379503/230714315-733de401-bea8-4206-8f19-74028b3279cf.gif)

### ✨소셜 로그인
![4 소셜 로그인](https://user-images.githubusercontent.com/52379503/230714323-cf8f8ae8-f99d-4057-bf09-fa83d4bdca7a.gif)

### ✨소셜 로그인(중복 이메일 접근)
![5 소셜 로그인(중복 이메일 접근)](https://user-images.githubusercontent.com/52379503/230714330-4df22bb8-8b54-4a98-80b2-51d4465746a7.gif)

### ✨사용자 페이지
![6 사용자 페이지](https://user-images.githubusercontent.com/52379503/230714335-e9f725ce-136b-4161-9d59-825c0a7de25a.gif)

### ✨굿즈 페이지
![7 굿즈 페이지](https://user-images.githubusercontent.com/52379503/230714338-9da7976d-ad7c-4d40-bad2-322cb2abf814.gif)

### ✨장바구니 담기
![8 장바구니 담기](https://user-images.githubusercontent.com/52379503/230714348-a2fcf83d-8731-4bce-909c-bc3eb6c01a88.gif)

### ✨장바구니에서 구매
![9  장바구니에서 구매](https://user-images.githubusercontent.com/52379503/230714353-9454f923-d342-4732-93d8-799f3bbcca49.gif)

### ✨보리 갤러리 페이지
![10 보리 갤러리 페이지](https://user-images.githubusercontent.com/52379503/230714356-847eda5f-b4ea-44d4-9957-fb7125db3df7.gif)

### ✨어드민 페이지 접속 및 굿즈 등록
![11 어드민 페이지 접속 및 굿즈 등록](https://user-images.githubusercontent.com/52379503/230714362-ec2ac6de-269f-4f66-af36-a4796cc612b0.gif)

### ✨굿즈확인
![12 굿즈확인](https://user-images.githubusercontent.com/52379503/230714372-7318f727-c923-4e05-b6cc-3ba2ee62c9a4.gif)

### ✨갤러리 등록 및 확인
![13 갤러리 등록 및 확인](https://user-images.githubusercontent.com/52379503/230714373-ba91d6af-4e5b-476d-ac1e-a173b5cc1b7f.gif)

### ✨주문내역 수정 및 확인
![14 주문내역 수정 및 확인](https://user-images.githubusercontent.com/52379503/230714377-13942ad2-b9bf-49c8-b649-8c9387ce6bc1.gif)


## 🐶더 자세한 내용이 궁금하다면?🐶

https://github.com/JoStar33/BoriSsal-Front/wiki
