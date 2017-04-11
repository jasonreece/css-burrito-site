var gulp = require('gulp');
var w3cjs = require('gulp-w3cjs');

gulp.task('validate-html', function() {
  gulp.src('_site/**/*.html')
    .pipe(w3cjs())
    .pipe(w3cjs.reporter());
});
