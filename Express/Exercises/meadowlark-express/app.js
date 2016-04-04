var express = require('express');
var handlebars = require('express-handlebars');
var fortune = require('./lib/fortune.js');

/*
fortune = {
getFortune: function() {
var idx = Math.floor(Math.random() * fortuneCookies.length);
return fortuneCookies[idx];
};
}
*/

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

// set up handlebars view engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
  next();
});

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/about', function(req, res) {
  res.render('about', {fortune: fortune.getFortune(), pageTestScript: '/qa/tests-about.js'} );
});

app.get('/tours/hood-river', function(req, res){
  res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', function(req, res){
  res.render('tours/request-group-rate');
});

// the order in which routes and middleware are added is significant.
// If we put the 404 handler above the routes, the home page and About page would stop working: instead, those URLs would result in a 404.

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
  res.status(404);
  res.render('404');
});

// Express can distinguish between the 404 and 500 handlers by the number of arguments their callback functions take.

// 500 error handler (middleware)
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
  app.get('port') + '; press Ctrl-C to terminate.' );
});
