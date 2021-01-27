var gulp = require('gulp');
var minify = require('gulp-minifier');
var removeHtmlComments = require('gulp-remove-html-comments');

function defaultTask(cb) {
  return gulp.src('../_site/**/*')
  .pipe(removeHtmlComments())
  .pipe(minify({
    minify: true,
    minifyHTML: {
      collapseWhitespace: true,
      conservativeCollapse: true,
    },
    minifyCSS: true,
    getKeptComment: function (content, filePath) {
        var m = content.match(/\/\*![\s\S]*?\*\//img);
        return m && m.join('\n') + '\n' || '';
    }
  }))
  .pipe(gulp.dest('../_site'));
}

exports.default = defaultTask