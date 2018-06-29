var gulp = require('gulp');
var requireDir = require('require-dir');


//Import file
requireDir('./gulp');

gulp.task('watch', function () {
    gulp.watch(['src/app/**/*.scss'], {cwd: './'}, ['scss']);

});


gulp.task('default', ['scss', 'watch']);