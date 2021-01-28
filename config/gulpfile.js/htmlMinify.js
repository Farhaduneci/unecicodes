const gulp = require('gulp');
const minifier = require('gulp-minifier');
const removeHtmlComments = require('gulp-remove-html-comments');

function htmlMinify() {
  return gulp.src('../_site/**/*.html')
    .pipe(removeHtmlComments())
    .pipe(minifier({
      minify: true,
      minifyHTML: {
        collapseWhitespace: true,
        conservativeCollapse: true,
      },
    }))

    .pipe(gulp.dest('../_site/'));
}

exports.default = htmlMinify;