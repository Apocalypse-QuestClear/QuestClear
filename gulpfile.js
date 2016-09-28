var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');

gulp.task('default', ['scripts', 'styles']);

gulp.task('clean', function(callback) {
    del(['public/dist'], callback)
});

gulp.task('scripts', function() {
    return gulp.src('public/javascripts/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/dist/javascripts'));
});

gulp.task('styles', function() {
    return gulp.src('public/stylesheets/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(concat('styles.min.js'))
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/dist/stylesheets'));
});