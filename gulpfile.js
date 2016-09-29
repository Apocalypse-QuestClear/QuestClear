var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');
var browserSync = require('browser-sync').create();

gulp.task('default', ['scripts', 'styles']);

gulp.task('clean', function(callback) {
    del(['public/dist'], callback)
});

gulp.task('serve', ['default'], function() {
    browserSync.init({
        proxy: 'localhost:3000'
    });

    gulp.watch("public/javascripts/**/*.js", ['scripts']);
    gulp.watch("public/stylesheets/**/*.less", ['styles']);
    gulp.watch("public/**/*.html").on('change', browserSync.reload);
    gulp.watch("public/dist/**/*.js").on('change', browserSync.reload);
    gulp.watch("public/dist/**/*.css").on('change', function(event) {
        gulp.src(event.path).pipe(browserSync.reload({stream: true}));
    });
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