// server
const net = require("net");

net.createServer(function (socket) {
  console.log("connected");

  socket.on('data', function (data) {
    console.log(data.toString());
  });
}).listen(8080);

// client
var socket = require('net').Socket();
socket.connect(8080);
socket.write('Hello');
socket.end();
