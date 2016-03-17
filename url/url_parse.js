// Include http & url module
var http = require('http');
var url = require('url');

// Create server
var server = http.createServer();

// Attach listener on request event
// This event is called when client send a request to the server
server.on('request', function(request, response) {
  // Parsing incoming URL string to parseData object
  var parseData = url.parse(request.url, true);
  // Change parseData from object type to JSON and assign to body
  var body = JSON.stringify(parseData);
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
console.log('Navigate to "http://localhost:3000/?data=put_some_text_here" to see the result');
