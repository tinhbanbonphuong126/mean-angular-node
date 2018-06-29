'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var changedInPlace = require('gulp-changed-in-place');

var SRC = ['src/app/**/*.scss'];
var DESTINATION = 'src/app';

gulp.task('scss', function () {
    return gulp.src(SRC)
        .pipe(changedInPlace())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(DESTINATION));
});