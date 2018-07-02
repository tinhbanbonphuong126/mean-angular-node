'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var changedInPlace = require('gulp-changed-in-place');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
const rucksack = require('rucksack-css');
const lost = require('lost');


var SRC = ['src/app/**/*.scss'];
var DESTINATION = 'src/app';

gulp.task('scss', function () {

    var processors = [
        rucksack({
            fallbacks: true
        }),
        lost(),
        autoprefixer()
    ];

    return gulp.src(SRC)
        .pipe(changedInPlace())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest(DESTINATION));
});