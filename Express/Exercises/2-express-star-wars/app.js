var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

// config handlebars
var hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    plusOne: function (number) {
      return number + 1;
    }
  }
});

var routes = require('./routes');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

var path = require('path');
// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', routes.home);
app.get('/star_wars_episode/:episode_number', routes.movie_single);
app.get('*', routes.notFound);

// Listen on port 3000
app.listen(process.env.PORT || 3000);
