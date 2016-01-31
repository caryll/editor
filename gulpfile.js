var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var nop = require('gulp-nop');

gulp.task('css-glyphs', function() {
	return gulp.src('./styles/glyphs/*.styl')
		.pipe(stylus({ compress: true }))
		.pipe(gulp.dest('./static/glyphs/'));
});

gulp.task('js-glyphs', function() {
	return gulp.src('./scripts/glyphs/main.js')
		.pipe(browserify({
			transform : ['vueify'],
			extensions : ['.vue']
		}))
		.pipe(uglify())
		.pipe(rename('main.js'))
		.pipe(gulp.dest('./static/glyphs/'));
});


gulp.task('default', ['css-glyphs', 'js-glyphs']);
