var dgram = require('dgram');
var client = dgram.createSocket("udp4");
var server = dgram.createSocket("udp4");
// node udp.js "Hello World!"
var message = process.argv[2] || "message";

// UDP requires messages to be Buffer objects, so we ensure that some message exists and convert it.
message = new Buffer(message);

// receive message & display it to stdout
server
.on("message", function (msg) {
  process.stdout.write("Got message: " + msg + "\n");
  process.exit();
})
.bind(41234);

// send message to it self
client.send(message, 0, message.length, 41234, "localhost");
