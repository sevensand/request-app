'use strict';

//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-change');


gulp.task('compile_scss', function() {
 return gulp.src('src/assets/scss/*.scss')
 .pipe(sass().on('error', sass.logError))
 .pipe(minifyCSS())
 .pipe(gulp.dest('./src/assets/css'))
});

gulp.task('default', function() {
  gulp.watch('./src/scss/*.scss', ['compile_scss']);
});
