var gulp = require('gulp');

gulp.task('watch', function() {
    // scripts
    gulp.watch('./assets/js/**/*.js', ['scripts', 'jekyll-rebuild']);

    // styles
    gulp.watch('./assets/stylesheets/**/*.scss', [ 'styles', 'hologram', 'jekyll-rebuild']);

    // living style guide
    // gulp.watch('./assets/living-style-guide/doc_assets/**', [ 'hologram', 'jekyll-rebuild']);

    // markup
    gulp.watch(['./**/*.html', '!./.git/**', '!./_site/**', '!./assets/**', '!./gulp/**','!./node_modules/**'], ['jekyll-rebuild']);
});

