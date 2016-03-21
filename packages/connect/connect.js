var connect = require('connect');
var http = require('http');

var app = connect();

function profile(request, response){
  response.write('User request profile');
  response.end();
}

function forum(request, response){
  response.write('User request forum');
  response.end();
}

// Router
app.use('/profile', profile)
app.use('/forum', forum)

//create node.js http server and listen on port
http.createServer(app).listen(3000);

console.log('Go to "http://localhost:3000/profile" or "http://localhost:3000/forum" to see the result');
