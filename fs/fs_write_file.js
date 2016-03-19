/*
 node fs_write_file.js "AnyMessages"
*/

// Include required modules
var http = require('http'),
    fs = require('fs')
// Declare variables
var message = process.argv.splice(2),
    fileName = 'outPut.txt',
    body = '',
    encoding = 'utf8'

// Wrtie message to outPut.txt
fs.writeFile(fileName, message, encoding, function(error){
  if (error) throw error;
});

// Create server
var server = http.createServer();

// Register event
server.on('request', function(request, response) {
  // Read data from outPut.txt
  fs.readFile(fileName, encoding, function (error, data) {
    // throw error if any
    if (error) throw error;
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
});

// Listen on the 3000 port
server.listen(3000);

// Write message to console
console.log('Nav to "http://localhost:3000/" to see result');
