const gulp = require('gulp');
const minifier = require('gulp-minifier');

function cssMinify() {
  return gulp.src('../_site/**/*.css')
    .pipe(minifier({
      minify: true,
      minifyCSS: true,
      getKeptComment: function (content, filePath) {
          var m = content.match(/\/\*![\s\S]*?\*\//img);
          return m && m.join('\n') + '\n' || '';
      }
    }))

    .pipe(gulp.dest('../_site/'));
}

exports.default = cssMinify;