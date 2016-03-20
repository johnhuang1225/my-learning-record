// Include module
var http = require('http');

// Define prot
var port = 3000;

// Create server
var server = http.createServer();

// Attach listener on request event
// This event is called when client send a request to the server
server.on('request', function(request, response) {
  var message = '';

  // Return different message base on request method.
  switch(request.method) {
    case 'GET': message = "Thats GET message"; break;
    case 'POST': message = "That's POST message"; break;
    case 'PUT': message = "That's PUT message"; break;
    case 'DELETE': message = "That's DELETE message"; break;
  }

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
console.log('Server running at http://localhost:3000/');
