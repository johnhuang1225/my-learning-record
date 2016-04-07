## Express - Cookie

#### Install package

- [cookie-parser](https://github.com/expressjs/cookie-parser)

```js
npm install --save cookie-parser
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
var cookieParser = require('cookie-parser');
var credentials = require('./credentials.js');

app.use(cookieParser(credentials.cookieSecret));
```

#### Create cookie

```js
res.cookie(cookie_name , 'cookieValue');
// or
res.cookie(cookie_name , 'cookieValue', { signed: true });
```

#### Delete cookie

```js
res.clearCookie('cookieName');
```

#### Reference

- [Cookie Management in Express](https://www.codementor.io/nodejs/tutorial/cookie-management-in-express-js)
