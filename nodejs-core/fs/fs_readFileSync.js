// Include modules
var http = require('http');
var fs = require('fs');

// Create server
var server = http.createServer();

// Attach listener on request event
// This event is called when client send a request to the server
server.on('request', function(request, response) {
  // Content will write into response.
  var content = '';
  // Content-Type will different base on the file you read.
  var type = '';

  if(request.url === '/') {
    content = fs.readFileSync('./page.html');
    type = 'text/html';
  } else if(request.url === '/styles.css') {
    content = fs.readFileSync('./styles.css');
    type = 'text/css';
  } else if(request.url === '/api/user/new') {
    // Do actions like
    // reading POST parameters
    // storing the user into the database
    content = '{"success": true}';
    type = 'application/json';
  }
  // Write headers to the response
  // HTTP status code 200 means success
  response.writeHead(200, {
    // Return actual byte length of the content
    'Content-Length': Buffer.byteLength(content),
    'Content-Type': type
  });
  // Send data to the content
  response.write(content);
  // End response
  response.end();
});

// Listen on the 3000 port
server.listen(3000);

// Write message to console
console.log('Server running at http://localhost:3000/');
