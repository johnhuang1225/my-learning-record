## Declaring Routes as Module

```js
var fortune = require('../lib/fortune.js');

exports.home = function(req, res){
  res.render('home');
};

exports.about = function(req, res){
  res.render('about', {c
    fortune: fortune.getFortune(),
    pageTestScript: '/qa/tests-about.js'
  });
};

//...
```

```js
var main = require('./controllers/main.js');

module.exports = function(app){
  app.get('/', main.home);
  app.get('/about', main.about);
  //...
};
```
