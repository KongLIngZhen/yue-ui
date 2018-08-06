const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

// 编译less
gulp.task('css', function () {
  gulp.src('../src/theme/index.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(cleanCSS({
      format: 'beautify'
    }))
    .pipe(rename('yue-ui.css'))
    .pipe(gulp.dest('../dist/css'))
})

gulp.task('min.css', function () {
  gulp.src('../src/theme/index.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(cleanCSS())
    .pipe(rename('yue-ui.min.css'))
    .pipe(gulp.dest('../dist/css'))
})

// 拷贝字体文件
gulp.task('fonts', function () {
  gulp.src('../src/theme/webfonts/*.*')
    .pipe(gulp.dest('../dist/css/webfonts'))
})

gulp.task('default', ['css', 'min.css', 'fonts'])
