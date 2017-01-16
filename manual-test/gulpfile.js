const gulp = require('gulp');

gulp.task('serve', (done) => {
  console.log('Starting "serve" task.');
  setInterval(() => {
    console.log('...');
  }, 1000);
});
