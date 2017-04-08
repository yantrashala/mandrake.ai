'use strict';

var gulp        = require('gulp');
var shrinkwrap  = require('gulp-shrinkwrap');
var gulpNSP     = require('gulp-nsp');

gulp.task('nsp', function(cb) {
  return gulpNSP({
    shrinkwrap: __dirname + '/npm-shrinkwrap.json',
    package: __dirname + '/package.json',
    output: 'default',
    stopOnError: false
  }, cb);
});

gulp.task('shrinkwrap', function() {
  return gulp.src('./package.json')
    .pipe(shrinkwrap.lock())
    .pipe(gulp.dest('./'));
});

gulp.task('default', [
    'shrinkwrap',
    'nsp',
  ], function() {});

gulp.task('build', ['default']);
