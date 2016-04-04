## Cookie in Express

#### Install package

```js
npm install cookie-parser
```

#### Create key

```js
// credentials.js
module.exports = {
  cookieSecret: 'your cookie secret goes here',
};
```

#### Set up

```js
var express = require('express');
var credentials = require('./credentials.js');

var app = express();

app.use(require('cookie-parser')(credentials.cookieSecret));
```

#### Create cookie

```js
res.cookie(cookie_name , 'cookie_value');
// or
res.cookie(cookie_name , 'cookie_value', { signed: true });
```

#### Delete cookie

```js
res.clearCookie('cookie_name');
```

#### Reference

- [Cookie Management in Express](https://www.codementor.io/nodejs/tutorial/cookie-management-in-express-js)
