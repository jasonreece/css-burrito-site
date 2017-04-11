var path = require('path');
var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var rename = require('gulp-rename');
var es = require('event-stream');

// errors
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

var onError = function(err) {
  notify.onError({
    title: "Gulp",
    subtitle: "JS",
    message: "Error: <%= error.message %>",
    sound: false
  })(err);
};

// constants
var JS_DEST = './assets/js/dest/'
var JS_GLOB = ['assets/js/**/*.js', '!assets/js/libs/**/*.js', '!assets/js/dest/*.js'];

gulp.task('js', ['lint-js', 'build-js']);

gulp.task('watch-js', function() {
  gulp.watch(JS_GLOB, ['js']);
});

gulp.task('build-js', function() {
    // list of input files for browserify to process
    var files = [
      './assets/js/index.js'
    ];

    var tasks = files.map(function(entry) {
      var file = path.basename(entry);
      return browserify({ entries: [entry] })
        .transform(babelify, {presets: ["es2015"]})
        .bundle()
        .on('error', function(err){
          onError(err);
          this.emit('end');
        })
        .pipe(source(file))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(JS_DEST));
      });

    // create a merged stream
    return es.merge.apply(null, tasks);
});

gulp.task('lint-js', function(){
  return gulp.src(JS_GLOB)
    .pipe(eslint())
    .pipe(plumber())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on("error", notify.onError(onError));
});
