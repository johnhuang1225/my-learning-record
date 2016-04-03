## router.route(path)

The router.route(path) method is used to chain HTTP verb methods. For example, in a create, read, update, and delete (CRUD) server that has POST, GET, PUT, and DELETE endpoints for the /posts/:id URL (e.g., /posts/53fb401 dc96c1caa7b78bbdb), we can use the Router class as follows:

```js
var express = require('express');
var router = express.Router();
// ... Importations and configurations
router.param('postId', function(request, response, next) {
  // Find post by ID
  // Save post to request
  request.post = {
    name: 'PHP vs. Node.js',
    url: 'http://webapplog.com/php-vs-node-js'
  };
  return next();
});

router
.route('/posts/:postId')
.all(function(request, response, next){
  // This will be called for request with any HTTP method
})
.post(function(request, response, next){
})
.get(function(request, response, next){
  response.json(request.post);
})
.put(function(request, response, next){
  // ... Update the post
  response.json(request.post);
})
.delete(function(request, response, next){
  // ... Delete the post
  response.json({'message': 'ok'});
})
```
