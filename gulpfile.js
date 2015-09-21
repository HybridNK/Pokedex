/*
 * Dependencias
*/
    var gulp  = require('gulp'),
    concat    = require('gulp-concat'),
    uglify    = require('gulp-uglify'),
    stylus    = require('gulp-stylus'),
    jshint    = require('gulp-jshint');
    minifyCss = require('gulp-minify-css');
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
 * Compilar stylus
 */
gulp.task('stylus', function(){
	return gulp.src('stylus/style.styl')
    .pipe(stylus())
   // .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});

/*
 * Minificar css
 */
gulp.task('minifyCss', function(){
    return gulp.src('css/*.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('css'))
});

// Observar cambios en archivos
gulp.task('watch', function(){
	gulp.watch('js/source/*.js',['lint','scripts']);
	gulp.watch('stylus/*.styl',['stylus']);
});


gulp.task('default', ['lint', 'stylus', 'scripts', 'watch']);

