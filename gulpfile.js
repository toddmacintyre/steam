// var gulp = require('gulp');
// var sourcemaps = require('gulp-sourcemaps');
// var source = require('vinyl-source-stream');
// var buffer = require('vinyl-buffer');
// var browserify = require('browserify');
// var watchify = require('watchify');
// var babel = require('babelify');

// function compile(watch) {
//   var bundler = watchify(browserify('./public/index.js', { debug: true }).transform(babel));

//   function rebundle() {
//     bundler.bundle()
//       .on('error', function(err) { console.error(err); this.emit('end'); })
//       .pipe(source('build.js'))
//       .pipe(buffer())
//       .pipe(sourcemaps.init({ loadMaps: true }))
//       .pipe(sourcemaps.write('./'))
//       .pipe(gulp.dest('./build'));
//   }

//   if (watch) {
//     bundler.on('update', function() {
//       console.log('-> bundling...');
//       rebundle();
//     });
//   }

//   rebundle();
// }

// function watch() {
//   return compile(true);
// };

// gulp.task('build', function() { return compile(); });
// gulp.task('watch', function() { return watch(); });
// gulp.task('nodemon', function (cb) {
//   return nodemon({
//     script: 'app.js'
//   }).once('start', cb);
// });

// gulp.task('default', ['watch']);


'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');


gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:5000",
        files: ["public/**/*.*"],
        // browser: "google chrome",
        port: 7000,
	});
});
gulp.task('nodemon', function (cb) {

	var started = false;

	return nodemon({
		script: 'server/app.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true;
		}
	});
});