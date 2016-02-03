var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var nop = require('gulp-nop');

var vueify = require('vueify');
var patelify = require('patelify');

gulp.task('css-glyphs', function() {
	return gulp.src('./styles/glyphs/*.styl')
		.pipe(stylus({ compress: true }))
		.pipe(gulp.dest('./static/glyphs/'));
});

gulp.task('js-glyphs', function() {
	var b = browserify({
		entries: './scripts/glyphs/main.js',
		transform: [patelify, vueify],
		extensions: ['.vue', '.patel', '.ptl']
	})
	return b.bundle()
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(uglify()) .on('error', gutil.log)
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./static/glyphs/'))
});


gulp.task('default', ['css-glyphs', 'js-glyphs']);
