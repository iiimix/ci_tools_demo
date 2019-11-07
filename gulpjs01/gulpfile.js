

let gulp = require('gulp')
let { series } = gulp

let uglify =  require('gulp-uglify')
let rename = require('gulp-rename')
let babel = require('gulp-babel')

function defaultTask(cb) {
  console.log('开始执行默认任务........')
  console.log('执行默认任务完成........')
  cb()
}

function innerTask(cb) {
  console.log('私有任务........')
  console.log('私有任务完成........')
  cb()
}

function publicTask(cb) {
  console.log('公开任务........')
  console.log('公开任务........')
  cb()
}



gulp.task('copy', function() {
  // 需要返回一个异步对象
  return gulp.src('src/*.js')
    .pipe(gulp.dest('dist/'))
})

gulp.task('copy_uglify', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/'))
})

gulp.task('copy_uglify_rename', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js'}))
    .pipe(gulp.dest('dist/'))
})


// 1. 使用.babelrc配置

gulp.task('copy_babel_uglify_rename', function() {
  return gulp.src('src/*.js')
    .pipe(babel({presets:["@babel/env"]}))      // 需要注意安装gulp-babel @babel/core  @babel-preset-env, 并配置.babelrc  {"presets": ["@babel-preset-env"]}
    // .pipe(uglify())  // 不加压缩更清楚查看转化后的代码
    .pipe(rename({ extname: '.min.js', basename: 'babel_compiled_index'}))
    .pipe(gulp.dest('dist/'))
})


exports.publicTask = publicTask

exports.default = series(defaultTask, innerTask)