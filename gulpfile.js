const gulp = require('gulp'),
    fileinclude = require('gulp-file-include'), //include html components
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    notify = require("gulp-notify"),
    imagemin = require('gulp-imagemin'),
    imgJpeg = require('imagemin-jpegoptim'),
    browserSync = require('browser-sync').create(),
    replace = require('gulp-replace'),
    svgstore = require('gulp-svgstore'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    webpack = require('webpack-stream');

    // lets delete if not use

    //purgecss = require('gulp-purgecss'),
    //sourcemaps = require('gulp-sourcemaps'),
    //svgSprite = require('gulp-svg-sprite'),/// if using dirty svg
    //svgmin = require('gulp-svgmin'),
    //cheerio = require('gulp-cheerio'),

//PATHS
const path = {
    build: {
        html: 'build/',
        js: 'build/script',
        style: 'build/style',
        img: 'build/assets/img',
        image: 'build/image',
        svg: 'build/assets/',
        fonts: 'build/assets/fonts',
        //template: 'build/style/template'
    },
    src: {
        html: 'src/*.html',
        js: [ 'src/scripts/app.js', 'src/hubspot/scripts/hubspot.js', 'src/hubspot/scripts/hubspotRigr.js', 'src/rigr_blog/scripts/hubspotRigrBlog.js', 'src/scripts/podcast.js'],
        style: [ 'src/styles/style.less', 'src/rigr_blog/styles/rigrBlogStyles.less', 'src/styles/immunity_plans.less', 'src/styles/hubspot_template.less', 'src/styles/hubspot_email_pages.less', 'src/styles/podcast/podcast.less'],
        img: ['src/assets/img/**/*.*','src/hubspot/assets/img/**/*.*', 'src/rigr_blog/assets/img/**/*.*'],
        image: 'src/image/**/*.*',
        svg: ['src/assets/svg/*.*', 'src/hubspot/assets/svg/*.*'],
        fonts: 'src/assets/fonts/**/*.*',
        //template: 'src/components/link/*.html',
        //templateStyle: 'src/components/link/*.less'
    },
    watch: {
        html: 'src/**/*.html',
        js: ['src/**/*.js', 'src/components/**/*.js'],
        style: ['src/styles/**/*.*', 'src/hubspot/styles/**/*.*', 'src/rigr_blog/styles/**/*.*'],
        img: 'src/assets/img/**/*.*',
        image: 'src/image/**/*.*',
        svg: 'src/assets/svg/*.*',
        fonts: 'src/assets/fonts/**/*.*',
        //template: 'src/components/link/*.*'
    },
    clean: './build'
};

gulp.task('html', () => {
    return gulp.src([
            path.src.html,
            //path.src.template // test link - separate page
        ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.reload({
                stream: true
        }));
});

gulp.task('styles', () => {
    return gulp.src(path.src.style)
        //path.src.templateStyle  // test link - separate page])
        //.pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleancss({level: {1: {specialComments: 0}}}))
        .on("error", notify.onError({
            title: "styles"
        }))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.style))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scripts', () => {

    return gulp.src(path.src.js)
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('img', () => {
    return gulp.src(path.src.img)
        .pipe(imagemin([
            imgJpeg({
                progressive: true,
                interlaced: true,
                max: 70,
            }),
            imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('img:rigr', () => {
    return gulp.src(path.src.image)
        .pipe(imagemin([
            imgJpeg({
                progressive: true,
                interlaced: true,
                max: 70
            }),
            imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe(gulp.dest(path.build.image))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('svgsprite', function () {
    return gulp.src(path.src.svg)
        .pipe(svgstore())
        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest(path.build.svg))
        .pipe(browserSync.reload({
            stream: true
        }));

});

gulp.task('clean', () => {
    return gulp.src(path.clean)
        .pipe(clean()) || null;
});

gulp.task('watch', function() {
    //gulp.watch([path.watch.html, path.watch.template], gulp.parallel('html'));
    gulp.watch(path.watch.html, gulp.parallel('html'));
    gulp.watch(path.watch.style, gulp.parallel('styles'));
    gulp.watch(path.watch.js, gulp.parallel('scripts'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        },
        tunnel: false,
        notify: false
    });
});

gulp.task('build', gulp.series(
    //'clean',
    gulp.parallel(
    'html',
    'styles',
    'scripts',
    'img',
    'svgsprite'
    )
));

gulp.task('dev', gulp.series( 'build',
    gulp.parallel('watch', 'serve')
));

