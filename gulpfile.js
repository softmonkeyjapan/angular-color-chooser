var gulp      = require('gulp');
var uglify    = require('gulp-uglify');
var rename    = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');

// Copy non-uglify version to "dist"
gulp.task('copy', function() {
  return gulp.src(['src/*.js', 'src/*.css']).pipe(gulp.dest('dist'));
});

// Create an uglify version to "dist"
gulp.task('uglify', function() {
  return gulp.src('src/*.js').pipe(uglify())
                             .pipe(rename('color-chooser.min.js'))
                             .pipe(gulp.dest('dist'));
});

// Minify css
gulp.task('cssmin', function() {
  return gulp.src('src/*.css').pipe(minifyCSS())
                             .pipe(rename('color-chooser.min.css'))
                             .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.js', ['copy', 'uglify', 'cssmin'])
});

gulp.task('default', function() {
  gulp.start('watch');
});
