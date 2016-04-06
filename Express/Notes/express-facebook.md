## Passport

#### Install Package

```js
npm install --save passport passport-facebook
```

#### Setting up Passport

> lib/auth.js

```js
var User = require('../models/user.js'),
passport = require('passport'),
FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser(function(user, done){
  done(null, user._id);
});

passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    if(err || !user) return done(err, null);
    done(null, user);
  });
});
```

Passport uses serializeUser and deserializeUser to map requests to the authenti‐ cated user, allowing you to use whatever storage method you want. In our case, we are only going to store the MongoDB-assigned ID (the _id property of User model instan‐ ces) in the session. The way we’re using it here makes “serialize” and “deserialize” a bit of a misnomer: we’re actually just storing a user ID in the session. Then, when needed, we can get a User model instance by finding that DB in the database.
