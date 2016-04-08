## Express - Cookbook

#### Creating the initial scaffold

- mkdir <folder_name>
- cd <folder_name>
- npm init
- bower init
- touch .gitignore

```
node_modules
bower_components
```

- mkdir app
- mkdir server
- touch app/index.ejs

```html
<!-- index.ejs -->
<body>
  Hello, World!
</body>
```

- touch server/main.js

```js
// main.js
var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.render('./../app/index.ejs');
});

app.listen(port);
```

- npm install --save express
- npm install --save ejs
- node server/main.js

> http://localhost:3000/

#### Setting up the gulp file

- touch gulpfile.js
- npm install -g gulp
- npm install --save gulp
- npm install --save gulp-live-server

```js
// gulpfile.js
var gulp = require('gulp');
var LiveServer = require('gulp-live-server');

gulp.task('live-server', function () {
  var server = new LiveServer('server/main.js');
  server.start();
});
```

- gulp live-server

> http://localhost:3000/

- npm install --save browser-sync

```js
// gulpfile.js
var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');

gulp.task('live-server', function () {
  var server = new LiveServer('server/main.js');
  server.start();
});

gulp.task('serve', ['live-server'], function () {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    port: 9001,
  });
});
```

- gulp serve

#### Transpiling our first jsx script

- npm install -—save react
- npm install -—save react-dom
- npm install -g react-tools
- touch app/main.jsx

```js
// main.jsx
console.log("Hello from JSX!");
```

```js
// server/main.js
var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../app'));

app.get('/', function (req, res) {
  res.render('./../app/index.ejs');
});

app.listen(port);
```

```html
<!-- app/index.ejs -->
<body>
  Hello, World!
  <script src="main.jsx"></script>
</body>;
```

- gulp serve

#### Bundling the Application with Browserify

- sudo npm install -g browserify
- npm install --save browserify
- npm install --save reactify
- npm install --save vinyl-source-stream

```js
// gulpfile.js
var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('live-server', function () {
  var server = new LiveServer('server/main.js');
  server.start();
});

gulp.task('bundle', function () {
  return browserify({
    entries:'app/main.jsx',
    debug:true,
  })
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
    .pipe(gulp.dest('./.tmp'));
});

gulp.task('serve', ['bundle', 'live-server'], function () {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    port: 9001,
  });
});
```

- gulp bundle

```html
<!-- app/index.ejs -->
<body>
  Hello, World!
  <script src="app.jsx"></script>
</body>;
```

```js
// server/main.js
var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../.tmp'));

app.get('/', function (req, res) {
  res.render('./../app/index.ejs');
});

app.listen(port);
```

- gulp serve

#### Creating a React component

- mkdir app/components
- touch app/components/GroceryItemList.jsx

```js
// app/components/GroceryItemList.jsx
var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <h1> Grocery Listify </h1>
      </div>
    );
  },
});
```

```html
<body>
  <div id="app"></div>
  <script src="app.js"></script>
</body>;
```

```js
// main.jsx
console.log('Hello from JSX!');

var React = require('react');
var ReactDOM = require('react-dom');

var GroceryItemList = require('./components/GroceryItemList.jsx');

ReactDOM.render(
  <GroceryItemList />,
  document.getElementById('app')
);
```

- gulp serve
