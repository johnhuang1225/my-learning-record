## Express - Gulp

#### Install Gulp Package

```
npm install --g gulp
npm install --save-dev gulp
npm install --save-dev gulp-util
```

#### Install

```
sudo npm install -g jshint
npm install --save-dev gulp-jshint gulp-jscs jshint-stylish jshint
```

#### Create a `gulpfile.js` at the root of your project

```js
var gulp   = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('jshint', function () {
  return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {
      verbose: true,
    }))
    .pipe(jscs());
});
```

#### Run gulp:

```
gulp style
```
