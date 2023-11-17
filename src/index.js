const { Console } = require('console');
const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');

// 모든 출처를 허용하고, credentials 옵션을 true로 설정합니다.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // 특정 출처만 허용
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true'); // credentials를 true로 설정
  next();
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // 특정 출처만 허용
    credentials: true,
    methods: ['GET', 'POST'],
  },
});

let quizMasters = {};
let answers = {};

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  socket.on('drawing', (data) => {
    io.to(data.option.roomId).emit('drawing', data);
  });

  socket.on('erase', (data) => {
    io.to(data.option.roomId).emit('erase');
  });

  socket.on('start_game', (data) => {
    const { roomId, myId } = data;

    quizMasters[roomId] = myId;
    io.to(roomId).emit('quiz_master_set', myId);
    console.log('quizMasters 생성:', quizMasters);
  });
});

// Heroku에서 제공하는 포트 또는 3001 포트를 사용합니다.
const port = process.env.PORT || 3001;
server.listen(port, () => console.log(`Server running on port ${port}`));
