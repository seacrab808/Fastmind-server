<div align="center">

<img src="https://github.com/LeHiHo/FastMind/assets/37584686/6e7fe4ca-ff6d-4a4d-b572-20e799a8c2c7" width=300>

### 패스트캠퍼스 토이프로젝트2 한조팀의 FastMind 게임 💻 백엔드

<p align="center">
  <a href="https://fastmind.vercel.app/">
    <img src="https://img.shields.io/badge/FastMind-white?style=for-the-badge&logoColor=white" alt="wiki"/>
  </a>
</p>

</div>

<br/>

## 📝 프로젝트 소개

`FastMind`는 창의적이고 상호작용이 풍부한 웹 애플리케이션입니다. 이 프로젝트는 그림판과 채팅 기능을 통합하여 아래 두 가지 주요 방식으로 사용됩니다.  

1. 게임 모드: 사용자 중 한 명이 출제자가 되어, 퀴즈를 내고 관련된 그림을 그립니다. 그 후, 다른 참여자들이 그림을 바탕으로 퀴즈의 답을 맞추는 대화형 웹 게임입니다.
2. **협업 모드**: 사용자들은 그림판에 직접 그림을 그리며, 실시간으로 공유하고 채팅을 통해 아이디어를 교환합니다. 이 모드는 회의, 브레인스토밍, 또는 일반 대화에 이상적으로 활용됩니다.

프론트엔드는 [이곳](https://github.com/LeHiHo/FastMind)을 클릭해 주세요.  
채팅 서버는 [이곳](https://github.com/GyoHeon/chat-back)을 클릭해 주세요.  
피그마는 [이곳](https://www.figma.com/file/Hqwygf0k7CoF0BloFTn729/%ED%95%9C%EC%A1%B0?type=design&node-id=0-1&mode=design&t=yNhmQ8W65uAUDQvI-0)을 클릭해 주세요.


<br/>

## 🛠️ 기술 스택

## FrontEnd  
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"> 

### Development

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white) 
![Recoil](https://img.shields.io/badge/Recoil-007af4.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NS4yMSA2MjMuOTEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp3aGl0ZX08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03NC42MiAyNzcuNDYgMS4yNC0uMTMgMzQuNzgtMy4yOC01My40Ny01OC42NkE5Ni40NyA5Ni40NyAwIDAgMSAzMiAxNTAuM0gzYTEyNS4zIDEyNS4zIDAgMCAwIDMyLjggODQuNTdaTTE3Ny4xMyAzNDdsLTM2IDMuNCA1My4zMiA1OC41MUE5Ni40MSA5Ni40MSAwIDAgMSAyMTkuNjMgNDc0aDI4LjkyYTEyNS4yOCAxMjUuMjggMCAwIDAtMzIuNzYtODQuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUzLjY5IDIzMS42OGMtNi4zMy0zMS4zLTMwLjg5LTU0LjA5LTYyLjU3LTU4LjA3bC02LjM1LS43OWE0OS42MSA0OS42MSAwIDAgMS00My4zNS00OS4xM3YtMjBhNTIuNzUgNTIuNzUgMCAxIDAtMjguOTEtLjM2djIwLjM4YTc4LjU2IDc4LjU2IDAgMCAwIDY4LjY1IDc3LjgybDYuMzYuOGMyMy4yNCAyLjkyIDM0Ljc4IDIwIDM3LjgzIDM1LjFzLS45MyAzNS4zMi0yMS4yMiA0N2E3My44MSA3My44MSAwIDAgMS0zMC4wNiA5LjYybC05NS42NiA5YTEwMi40NSAxMDIuNDUgMCAwIDAtNDEuOCAxMy4zOEM5IDMzMi40NS00LjgxIDM2MyAxLjUyIDM5NC4yOXMzMC44OSA1NC4wOCA2Mi41NyA1OC4wNmw2LjM1LjhhNDkuNiA0OS42IDAgMCAxIDQzLjM1IDQ5LjEydjE4YTUyLjc1IDUyLjc1IDAgMSAwIDI4LjkxLjI2di0xOC4yNmE3OC41NSA3OC41NSAwIDAgMC02OC42NS03Ny44MWwtNi4zNi0uOGMtMjMuMjQtMi45Mi0zNC43OC0yMC4wNS0zNy44My0zNS4xMXMuOTMtMzUuMzIgMjEuMjItNDdhNzMuNjggNzMuNjggMCAwIDEgMzAuMDYtOS42M2w5NS42Ni05YTEwMi40NSAxMDIuNDUgMCAwIDAgNDEuOC0xMy4zOGMyNy42NS0xNi4wMiA0MS40LTQ2LjU0IDM1LjA5LTc3Ljg2WiIvPjwvc3ZnPg==&logoColor=white) 
![StyledComponents](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 
![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)


### CI/CD
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

### Design
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

## Chatting BackEnd

### Language
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

### Framework
![Express](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)


### DB
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

### Infra
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![Mongoose](https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white)

### CI/CD
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) 
![Amazon EC2](https://img.shields.io/badge/Amazon%20EC2-FF9900.svg?style=for-the-badge&logo=Amazon-EC2&logoColor=white)

## Game BackEnd

### Language
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

### Framework
![Express](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)

### Infra
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

<br/>

## 📚 주요 로직

<details><summary><strong>그림판</strong></summary>
  
- **Canvas API**: 본 프로젝트의 그림판 기능은 HTML5의 Canvas API를 활용하여 구현되었습니다.
- **실시간 통신**: 실시간 사용자 상호작용을 위해 [Socket.io](http://socket.io/)를 사용하였으며, 사용자 간의 그림 데이터 공유 및 통신을 위해 자체적으로 구축한 백엔드 서버에 연결합니다.
- **서버 배포**: 프로젝트의 백엔드 서버는 Heroku를 통해 배포되었습니다. node.js/Express/Babel 등을 사용했습니다. 


<details><summary><strong>주요 기능</strong></summary>

- **색상 선택**: 사용자는 다양한 색상 팔레트에서 마음대로 색을 선택할 수 있습니다.
- **그리기 도구**: 부분 지우개와 전체 지우기 기능을 통해 사용자는 쉽게 그림을 수정할 수 있습니다.
- **굵기 조절**: 사용자는 선의 굵기를 자유롭게 조절하여 다양한 표현을 할 수 있습니다.

그림판에서의 사용자 작업은 다음과 같은 형식으로 서버로 전송됩니다.

```tsx
originalMousePosition: {
  x: number;
  y: number;
};
  newMousePosition: {
  x: number;
  y: number;
};
  option: {
    color: string;
    lineWidth: number;
    roomId: string;
  };
```

- **`originalMousePosition`**: 현재 마우스 위치 (x, y 좌표)
- **`newMousePosition`**: 새로운 마우스 위치 (x, y 좌표)
- **`option`**: 작업 옵션 (선택된 색상, 선의 굵기, 방 ID)

</details>
</details>

<details><summary><strong>게임 로직</strong></summary>

 - 유저 진입 시 게임 소켓에 연결하고 roomId를 기준으로 방을 선정해 유저를 나눕니다.
 - 게임 시작 버튼 클릭 시 퀴즈 배열의 roomId번 인덱스에 클릭한 클라이언트의 쿠키 내 userId를 지정합니다.
 - 게임 시작 버튼 클릭 후 모달 내 답안 입력 시 정답 배열의 roomId번 인덱스에 정답을 설정합니다.
 - 채팅을 친 유저, 채팅 값, roomId와 쿠키 내 userId을 서버에 보냅니다.
 - 만약 답변을 한 유저가 퀴즈 배열의 roomId번 인덱스와 다르고 답변을 한 유저의 답안이 정답 배열의  roomId번 인덱스와 같다면, 출제자가 아니면서 답변을 맞혔다는 뜻이므로 해당 하는 방 내 모든 클라이언트들에게 승자를 선정해 데이터를 보냅니다.
 - 다음 게임을 위해 서버에서는 해당하는 roomId번 인덱스의 퀴즈 배열과 정답 배열을 초기화 해줍니다.
 - 승자 데이터가 쿠키 내 userId와 같다면 정답을 맞혔다는 모달을 띄워줍니다.
 - 다르다면 타 유저가 정답을 맞혔다는 모달을 띄워줍니다.
 - 이 후, 게임 시작 버튼 클릭 시 게임이 재시작 됩니다.
 - ⏰ 게임 중, 언제든 게임 시작 버튼을 눌러도, 해당하는 roomId번 인덱스의 정답 배열 및 퀴즈 배열의 덮어씌움으로 언제든 재 시작이 가능합니다.
</details>


## 🖌️ 프로젝트 아키텍처

<img src="https://github.com/LeHiHo/FastMind/assets/37584686/26f7fbcb-9141-4aec-980f-83af4ccc0b27"/>

<br/>


<br/>

## 🧑🏻‍💻 팀 소개
| 장호진 (FE & BE) | 양재혁 (FE & BE) | 소유나 (FE & BE) |
|:---------------------:|:-----------------------:|:---------------------:|
| <img height="100" src="https://avatars.githubusercontent.com/leHiHo" width="100"/> | <img height="100" src="https://avatars.githubusercontent.com/yangjaehyuk" width="100"/>  | <img height="100" src="https://avatars.githubusercontent.com/seacrab808" width="100"/> |
| [leHiHo](https://github.com/leHiHo) | [yangjaehyuk](https://github.com/yangjaehyuk) | [seacrab808](https://github.com/seacrab808) |
|<ul><li>게임 로직</li><li>게임 소켓</li><li>배포</li></ul> | <ul><li>게임 로직</li><li>게임 소켓</li></ul> | <ul><li>그림판 구현</li><li>그림판 소켓</li><li>게임 서버</li>  |

<br/>

## 📆 기간
  `2023.11.06 ~ 2023.11.17`
