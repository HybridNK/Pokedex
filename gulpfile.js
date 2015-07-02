/*
* Dependencias
*/
	var gulp = require('gulp'),
	concat   = require('gulp-concat'),
	uglify   = require('gulp-uglify'),
	sass     = require('gulp-sass'),
	jshint   = require('gulp-jshint');
/*
* Concatenar y minificar script javascript
*/
gulp.task('scripts', function () {
  gulp.src('js/source/*.js')
  .pipe(concat('all.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js/build/'))
});

/*
 * Lint task
 */
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/*
 * Compilar sass
 */

gulp.task('sass', function(){
	return gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
});

// Observar cambios en archivos
gulp.task('watch', function(){
	gulp.watch('js/source/*.js',['lint','scripts']);
	gulp.watch('scss/*.scss',['sass']);
});


gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);

