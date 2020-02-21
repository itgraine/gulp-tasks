// // include the required packages.
// var gulp = require('gulp');
// var stylus = require('gulp-stylus');
// var browserSync = require('browser-sync').create();
//
// // Get one .styl file and render
// gulp.task('stylus', function () {
//     return gulp.src('stylus/*styl')
//         .pipe(stylus())
//         .pipe(gulp.dest('css'));
//
// });
//
// gulp.task('watch', function () {
//     gulp.watch('stylus/**/*', gulp.series('stylus'));
// });

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();
var prefix = require('autoprefixer-stylus');


gulp.task('css', function() {
    return gulp.src('stylus/*styl')
        .pipe(stylus({
            use: prefix('last 16 versions')
        }))
        .pipe(gulp.dest('blocks'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function () {

    browserSync.init({
        server: {
            baseDir: "./"
        },
        host: "candles",
        open: false,
        notify: false
    });

    gulp.watch("stylus/**/*", gulp.series('css'));
    gulp.watch("./*.html").on('change', browserSync.reload);
});


gulp.task('default', gulp.series('css', 'serve'));