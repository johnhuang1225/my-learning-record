var http = require('http');
var fs = require('fs');

// 404 response
function send404Response(response){
  response.writeHead(404, {
    'Content-Type': 'text/plain'
  });
  response.write('Error 404: Page not found!');
  response.end();
}

function onRequest(request, response){
  if (request.method === 'GET' && request.url === '/'){
    response.writeHead(200, {
      // Return html file so Content-Type is text/html
      'Content-Type': 'text/html'
    });
    // pipe method will automatically call end() when data finish piping.
    fs.createReadStream('./index.html').pipe(response);
  } else {
    send404Response(response);
  }
};

http.createServer(onRequest).listen(3000);

console.log('Server running at http://localhost:3000/');
