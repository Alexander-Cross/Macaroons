'use strict';

const {watch, src, dest} = require('gulp');
const less = require('gulp-less');
const path = require('path');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

function buildStyles() {
    return src('./less/main.less')
        .pipe(less({
            paths: [ path.join('./less', 'less', 'includes') ]
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./css'));
};
exports.buildStyles = buildStyles;

exports.watch = function () {
    watch('./less/*.less', buildStyles);
};
