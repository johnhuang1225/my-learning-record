## Express - Gulp

#### Install Gulp Package

The first step is to get gulp installed globally.

```
npm install --g gulp
```

After that, you’ll need gulp as a `devDependencies` on any of your projects you want to use it in. Make sure that you have your `package.json` created by manually creating it or typing `npm init`. Once you have your `package.json`, let’s install gulp into `devDependencies` with:

```
npm install --save-dev gulp
```

#### Jshint on save

1. gulp-jshint => check for errors
2. jshint-stylish => format output

```
sudo npm install -g jshint
npm install --save-dev gulp-jshint jshint-stylish gulp-jscs
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

#### Run the task

```js
gulp style
```
