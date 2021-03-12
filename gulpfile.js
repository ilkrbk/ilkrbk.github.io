const gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    cssmin = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync');
sass.compiler = require('node-sass');

const { series, parallel } = gulp

const html = () => {
    return gulp
    .src('src/layout/*.pug')
    .pipe(
        pug({
            pretty: true
        })
    )
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
}

const styles = () => {
    return gulp.src('src/sass/main.sass')
    .pipe(autoprefixer({
        browserslistrc: ['last 15 versions'],
        cascade: false
    }))
    .pipe(sass())
    .pipe(cssmin({compatibility: 'ie8'}))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('dist/css'))

    .pipe(browserSync.stream());
}

const scripts = () => {
    return gulp.src('src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
}

const images = () => {
    return gulp.src('src/assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream());
}

const server = () => {
    browserSync({
        server: {
            baseDir: './dist'
        },
        notify: false
    })
}

const watch = () => {
    gulp.watch('src/**/*.pug', html)
    gulp.watch('src/**/*.sass', styles)
    gulp.watch('src/js/**/*.js', scripts)
}

exports.dev = series(
    parallel(html, styles, scripts, images), 
    parallel(watch, server)
)




























// const gulp = require('gulp'),
//     gulpsass = require('gulp-sass'),
//     autoprefixer = require('gulp-autoprefixer'),
//     gulppug = require('gulp-pug'),
//     rename = require('gulp-rename'),
//     browserSync = require('browser-sync'),
//     uglify = require('gulp-uglify'),
//     rigger = require('gulp-rigger');


// gulp.task('sass', function() {
//     return gulp.src('src/assets/main.sass')
//         .pipe(autoprefixer({
//             browserslistrc: ['last 15 versions'],
//             cascade: false
//         }))
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         // ================== minify
//         .pipe(gulpsass())
//         .pipe(gulp.dest('./dist/css'))
//         .pipe(browserSync.stream());
// });

// gulp.task('html', function() {
//     return gulp.src('src/layout/*.pug')
//         .pipe(gulppug({
//             pretty: true
//         }))
//         .pipe(gulp.dest('dist/'))
//         .pipe(browserSync.stream());
// });

// gulp.task('js', function() {
//     return gulp.src('src/js/main.js')
//         .pipe(rigger())
//         // .pipe(uglify())
//         // .pipe(babel())==========================
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(gulp.dest('./dist/js'))
//         .pipe(browserSync.stream());
// });

// gulp.task('browser-sync', function() {
//     browserSync({
//         server: {
//             baseDir: './dist'
//         },
//         notify: false
//     })
// });

// gulp.task('watch', function() {
//     gulp.watch('src/**/*.sass', gulp.parallel('sass'));
//     gulp.watch('src/js/*.js', gulp.parallel('js'));
//     gulp.watch('src/**/*.pug', gulp.parallel('html'));
//     gulp.watch('dist/*.html').on('change', browserSync.reload);
// });

// gulp.task('search', gulp.parallel('browser-sync', 'watch', 'js', 'html', 'sass'));