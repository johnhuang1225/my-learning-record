// Include modules
var http = require('http');
var path = require('path');
// Define prot
var port = 3000;
// Create server
var server = http.createServer();

// Attach listener on request event
// This event is called when client send a request to the server
server.on('request', function(request, response) {
  // __dirname means the absolute path of this js file is located
  // normalize will replace multiple slashes into one
  var message = path.normalize(__dirname + request.url);
  // Write headers to the response
  // HTTP status code 200 means success
  response.writeHead(200, {
    // Return actual byte length of the body
    'Content-Length': Buffer.byteLength(message),
    // We are sending plain text, so Content-Type should be text/plain
    'Content-Type': 'text/plain'
  });
  // Send data to the body
  response.write(message);
  // End response
  response.end();
});

// Listen on the 3000 port
server.listen(port);

// Write message to console
console.log('You can try "localhost:3000///what//ever//"');
