## Session in express

#### Install package

- [express-session](https://github.com/expressjs/session)

```js
npm install --save express-session
```

#### Create key

```js
// credentials.js
module.exports = {
  sessionSecret: 'your session secret goes here',
};
```

#### Set up

```js
var session = require('express-session');
var credentials = require('./credentials.js');

app.use(session({
  // Only save back to the session store if a change was made
  resave: false,

  // Doesn't store data if a session is new and hasn't been modified
  saveUninitialized: true,

  // The secret string used to sign the session id cookie
  secret: credentials.sessionSecret,
}));
```

#### Create session

```js
req.session.session_name = session_value;
```

#### Delete session

```js
delete req.session.session_name;
```

#### Reference

- [Cookie Management in Express](https://www.codementor.io/nodejs/tutorial/cookie-management-in-express-js)
