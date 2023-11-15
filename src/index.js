const { Console } = require("console");
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

// 모든 출처를 허용하고, credentials 옵션을 true로 설정합니다.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // 특정 출처만 허용
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true"); // credentials를 true로 설정
  next();
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // 특정 출처만 허용
    credentials: true,
    methods: ["GET", "POST"],
  },
});

let quizMasters = {};
let answers = {};
console.log("초기", quizMasters, answers);

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  socket.on("drawing", (data) => {
    io.to(data.option.roomId).emit("drawing", data);
  });

  socket.on("erase", (data) => {
    io.to(data.option.roomId).emit("erase");
  });

  // 게임 시작
  socket.on("start_game", (data) => {
    const { roomId, myId } = data;

    quizMasters[roomId] = myId;
    console.log("this is quizM", quizMasters);
    io.to(roomId).emit("quiz_master_set", myId);
    // console.log(quizMasters);
  });

  socket.on("set_answer", (ans, data) => {
    // 제출자 객체중에 {roomid: scoketid} 를 만족하는게있는지 찾기
    const isQuizMaster = Object.entries(quizMasters).some(([key, value]) => {
      return key === data.roomId && value === data.myId;
    });
    if (isQuizMaster) {
      answers[data.roomId] = ans;
      io.to(data.roomId).emit("alert_all", "새로운 답변이 제출되었습니다");
    }
    console.log("그림문제:", answers);
  });

  socket.on("submit_answer", (userAnswer, data) => {
    if (
      userAnswer.userId !== quizMasters[data.roomId] &&
      userAnswer.text === answers[data.roomId]
    ) {
      // console.log(userAnswer.userId, quizMasters[data.roomId]);
      // console.log(userAnswer.text, answers[data.roomId]);
      io.to(data.roomId).emit("correct_answer", { winner: userAnswer.userId });
      quizMasters[data.roomId] = userAnswer.userId; // 출제 권한 이전
      delete answers[data.roomId]; // 이전 문제 출제자 삭제
      console.log(quizMasters[data.roomId]);

      // 다음 라운드 설정 (필요한 경우)
      // delete quizMasters[roomId];
      // delete answers[roomId];
    }
  });

  socket.on("end_game", (data) => {
    delete quizMasters[data.roomId];
    delete answers[data.roomId];
    // console.log("지우고 나서", quizMasters, answers);
    io.to(data.roomId).emit("game_ended", "게임이 종료되었습니다");
  });
});

// Heroku에서 제공하는 포트 또는 3001 포트를 사용합니다.
const port = process.env.PORT || 3001;
server.listen(port, () => console.log(`Server running on port ${port}`));
