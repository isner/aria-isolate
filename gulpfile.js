
var duo = require('gulp-duojs');
var gulp = require('gulp');

gulp.task('default', ['build']);

gulp.task('build', function () {
  gulp.src('aria-isolate.js')
    .pipe(duo({ global: 'AriaIsolate' }))
    .pipe(gulp.dest('dist'));
});
