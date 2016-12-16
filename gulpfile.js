/**
 *
 * 你仅仅需要知道的5个gulp命令
 * gulp.task(name, fn)这个你应经见过了
 * gulp.run(tasks...)尽可能多的并行运行多个task
 * gulp.watch(glob, fn)当glob内容发生改变时，执行fn
 * gulp.src(glob)返回一个可读的stream
 * gulp.dest(glob)返回一个可写的stream
 */
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'),
  less = require('gulp-less'),
  jshint = require('gulp-jshint'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  watch = require('gulp-watch'),
  minifycss = require('gulp-minify-css');


// 语法检查
gulp.task('jshint', function () {
  return gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// js合并文件之后压缩代码
gulp.task('minify', function () {
  return gulp.src('src/js/*.js')
// /*    .pipe(concat('all.js'))*/
//     .pipe(gulp.dest('dist/js'))
//     .pipe(uglify())
// /*    .pipe(rename('all.min.js'))*/
//     .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist/js'));
});

// gulp.task('minifycss',function(){
//   return gulp.src('src/css/*.css')
//     .pipe(gulp.dest('dist/css'));
// });

gulp.task('less', function () {
  return gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});

// 监视文件的变化
gulp.task('watch', function () {
  // gulp.watch('src/js/*.js', ['jshint', 'minify']);////压缩
  gulp.watch('src/js/*.js', ['jshint']);
});

gulp.task('watch2', function () {
  gulp.watch('src/less/*.less', ['less']);
});

// 注册缺省任务
gulp.task('default', ['jshint','minify', 'less','watch', 'watch2']);
