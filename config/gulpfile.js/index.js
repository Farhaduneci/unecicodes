const gulp = require('gulp');
const cssMinify = require('./cssMinify');
const htmlMinify = require('./htmlMinify');

exports.default = gulp.series([
  cssMinify.default,
  htmlMinify.default
]);