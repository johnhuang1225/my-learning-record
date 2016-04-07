## Express - MongoDB Session Store

#### Install Package

```js
npm install --save session-mongoose
```

#### Create key

```js
// credentials.js
mongo: {
  development: {
    connectionString: 'your_dev_connection_string',
  },
  production: {
    connectionString: 'your_production_connection_string',
  },
},
```

#### Set Up

```js
var MongoSessionStore = require('session-mongoose')(require('connect'));

var sessionStore = new MongoSessionStore({ url: credentials.mongo.connectionString });

app.use(require('cookie-parser')(credentials.cookieSecret));
app.use(require('express-session')({ store: sessionStore }));
```
