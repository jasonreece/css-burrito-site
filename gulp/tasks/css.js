var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');

// postcss plugins
var autoprefixer = require('autoprefixer');
var cssNano = require('gulp-cssnano');
var stylelint = require('gulp-stylelint');

// minification
var rename = require('gulp-rename');

// errors
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

var onError = function(err) {
  notify.onError({
    title: "Gulp",
    subtitle: "CSS",
    message: "Error: <%= error.message %>"
  })(err);
  this.emit('end');
};

// constants
var STYLES_DIR = 'assets/styles/';
var STYLES_INPUT = 'assets/styles/**/*.scss';
var STYLES_OUTPUT = 'styles.min.css';

gulp.task('css', ['lint-sass', 'sass']);

gulp.task('watch-css', function() {
  gulp.watch(STYLES_INPUT, { maxListeners: 999 }, ['css']);
});

gulp.task('sass', function () {
  var postcssPlugins = [
    autoprefixer,
    cssNano
  ];

  return gulp.src(STYLES_INPUT)
    .pipe(plumber({errorHandler: onError}))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(postcss(postcssPlugins))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(STYLES_DIR));
});

gulp.task('lint-sass', function () {
  return gulp.src(STYLES_INPUT)
    .pipe(plumber({errorHandler: onError}))
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    })
  );
});
