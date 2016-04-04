## Session in express

#### Install package

```js
npm install --save express-session
```

#### Set up

```js
var express = require('express');

var app = express();

app.use(require('express-session')());
```

#### Create session

```js
req.session.session_name = session_value;
```

#### Delete session

```js
delete req.session.session_name;
```
