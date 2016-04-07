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
