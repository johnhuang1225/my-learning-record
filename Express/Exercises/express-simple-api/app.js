const app = require('express')(),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      port = process.env.PORT || 3000,
      // http://underscorejs.org
      _ = require('underscore');

// Initial data
var users = [
        { id: 1, name: 'tony' }
      ];

// create logger for every request
app.use(morgan('dev'));

app.use(bodyParser.json());

// return all users
app.get('/users', function(req, res) {
  res.send({ success: true, users: users });
});

// return specific user
app.get('/users/:name', function(req, res) {
  var name = req.params.name;

  // return undefined if no match data
  var user = _.find(users, function(u) {
    return u.name == name;
  });

  var result = user
    ? { success: true, user: user }
    : { success: false, reason: 'user not found: ' + name };

  res.send(result);
});

// We can use Postman to mimic post data
app.post('/users', function(req, res) {
  var user = req.body;

  console.log(user);

  if (!user || !user.name) {
    res.send({ success: false, reason: 'cannot create user (missing user name)' });
    return;
  }

  // Returning an array of all the values that contain all of the key-value pairs listed in properties
  var existing = _.findWhere(users, { name: user.name });

  if (existing) {
    res.send({ success: false, reason: 'user already exists: ' + existing.name  });
    return;
  }

  users.push(user);
  user.id = users.length;

  res.send({ success: true, user: user })

});

app.put('/users/:name', function(req, res) {
  var name = req.params.name,
      newName = req.body.name;

  var user = _.find(users, function(u) {
    return u.name == name;
  });

  if (user) {
    user.name = newName;
  }

  var result = user
      ? { success: true, user: user }
      : { success: false, reason: 'user not found: ' + name };

  res.send(result);
});

app.delete('/users/:name', function(req, res) {
  var name = req.params.name;

  var user = _.find(users, function(u) {
    return u.name == name;
  });

  var result = user
      ? { success: true, user: user }
      : { success: false, reason: 'user not found: ' + name };

  users = _.reject(users, function(u) {
    return u.name == name;
  });

  res.send(result);
});

app.listen(port);
