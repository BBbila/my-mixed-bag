const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'build/index.html'));
});

app.use('/static',express.static(join(__dirname,'build/static')));

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

