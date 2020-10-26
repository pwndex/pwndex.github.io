/**
 * A simple Gulp-Starter-Kit for modern web development.
 *
 * @package @pwndex/gulp-starter-kit
 * @author Amal Greenberg <pwndex42@gmail.com>
 * @copyright 2020 Amal Greenberg
 * @license https://github.com/pwndex/gulp-starter-kit/blob/master/LICENSE MIT
 * @version v1.0.0
 * @link https://github.com/pwndex/gulp-starter-kit GitHub Repository
 *
 * ________________________________________________________________________________
 *
 * gulpfile.js
 *
 * The gulp configuration file.
 *
 */

const gulp                      = require('gulp'),
      del                       = require('del'),
      plumber                   = require('gulp-plumber'),
      imagemin                  = require('gulp-imagemin'),
      gulp_sass                 = require('gulp-sass'),
      babel                     = require('gulp-babel'),
      autoprefixer              = require('gulp-autoprefixer'),
      dependents                = require('gulp-dependents'),
      concat                    = require('gulp-concat'),
      browserSync               = require('browser-sync').create(),

      src_folder                = './src/',
      src_assets_folder         = src_folder + 'assets/',
      dist_folder               = './dist/',
      dist_assets_folder        = dist_folder + 'assets/',

      dev_tasks                 = [html, json, sass, js],
      build_tasks               = [clear, html, json, sass, js, images]


function clear() {
  return del([dist_folder])
}

function html() {
  return gulp
    .src([src_folder + '**/*.html'], {
      base: src_folder,
    })
    .pipe(gulp.dest(dist_folder))
    .pipe(browserSync.stream())
}

function json() {
  return gulp
    .src(src_assets_folder + 'js/**/*.json')
    .pipe(gulp.dest(dist_assets_folder + 'js'))
}

function js() {
  return gulp.src([ src_assets_folder + 'js/**/*.js' ])
    .pipe(plumber())
    .pipe(babel({
      presets: [ '@babel/env' ]
    }))
    .pipe(concat('all.js'))
    .pipe(gulp.dest(dist_assets_folder + 'js'))
    .pipe(browserSync.stream());
}

function sass() {
  return gulp.src(src_assets_folder + 'scss/**/*.scss')
    .pipe(plumber())
    .pipe(dependents())
    .pipe(gulp_sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(dist_assets_folder + 'css'))
    .pipe(browserSync.stream());
}

function images() {
  return gulp
    .src([src_assets_folder + 'images/**/*.+(png|jpg|jpeg|gif|svg|ico)'])
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest(dist_assets_folder + 'images'))
    .pipe(browserSync.stream())
}

function serve() {
  return browserSync.init({
    server: {
      baseDir: ['dist'],
    },
    port: 3000,
    open: false,
  })
}

function watch() {
  const watch = [
      src_folder + '**/*.html',
      src_assets_folder + 'js/**/*.json',
      src_assets_folder + 'scss/**/*.scss',
      src_assets_folder + 'js/**/*.js',
    ],
    watchImages = [
      src_assets_folder + 'images/**/*.+(png|jpg|jpeg|gif|svg|ico)',
    ]

  gulp.watch(watch, gulp.series(dev_tasks)).on('change', browserSync.reload)
  gulp.watch(watchImages, gulp.series(images)).on('change', browserSync.reload)
}

exports.serve = gulp.series(build_tasks, gulp.parallel(serve, watch))
exports.build = gulp.series(build_tasks)
