// Include http module
var http = require('http');

// Create server
var server = http.createServer();

// Attach listener on request event
// This event is called when client send a request to the server
server.on('request', function(request, response) {
  // Define body content
  var body = 'Hello World!'
  // Write headers to the response
  // HTTP status code 200 means success
  response.writeHead(200, {
    // Return actual byte length of the body
    'Content-Length': Buffer.byteLength(body),
    // We are sending plain text, so Content-Type should be text/plain
    'Content-Type': 'text/plain'
  });
  // Send data to the body
  response.write(body);
  // End response
  response.end();
});

// Listen on the 3000 port
server.listen(3000);

// Write message to console
console.log('Server running at http://localhost:3000/');
