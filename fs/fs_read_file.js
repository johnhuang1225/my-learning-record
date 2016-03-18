// Include http & file system module
var http = require('http');
var fs = require('fs');
// Declare body variable
var body = '';
// We want to read this file
var fileName = './fs_read_file.js';

// Create server
var server = http.createServer();

// Attach listener on request event
// This event is called when client send a request to the server
server.on('request', function(request, response) {
  // Check if user requests /
  if (request.url == '/') {
    // Read the file
    fs.readFile(fileName, 'utf-8', function (error, data) {
      // display error to the console if there is any
      if (error) {
        return console.error(error);
      }
      // append data to the body
      body += data;
      // Write headers to the response
      // HTTP status code 200 means success
      response.writeHead(200, {
        // Return actual byte length of the body
        'Content-Length': Buffer.byteLength(body),
        // We are sending plain text, so Content-Type should be text/plain
        'Content-Type': 'text/plain'
      });
      // Wrtie data to the body
      response.write(body);
      // End response
      response.end();
    });
  } else {
    // Indicate that requested file was not found.
    response.writeHead(404);
    // And end request without sending any data.
    response.end();
  }
});

// Listen on the 3000 port
server.listen(3000);

// Write message to console
console.log('Please navigate to "http://localhost:3000" to see the result!');
