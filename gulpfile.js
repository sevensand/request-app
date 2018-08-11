'use strict';

//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-change');


// gulp.task('compile_scss', function() {
//  return gulp.src('src/assets/scss/*.scss')
//  .pipe(sass().on('error', sass.logError))
//  .pipe(minifyCSS())
//  .pipe(gulp.dest('./src/assets/css'))
// });

gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/assets/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper/client/mocha/client.min.js'])
        .pipe(gulp.dest("src/assets/js"))
        .pipe(browserSync.stream());
});

gulp.task('fonts_awesome', function() {
  return gulp.src('node_modules/font-awesome/scss/font-awesome.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/**')
    .pipe(gulp.dest('src/assets/fonts'))
})

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./public"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/assets/scss/*.scss'], ['sass']);
    gulp.watch("public/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js','serve', 'fonts_awesome', 'fonts']);
