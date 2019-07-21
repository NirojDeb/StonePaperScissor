const gulp = require('gulp');
const replace = require('gulp-replace');

gulp.task('cordovaLinksReplace', () => gulp.src(['www/index.html'])
  .pipe(replace('=/css/', '=https://corpcomdev.azurewebsites.net/css/'))
  .pipe(replace('=/js/', '=https://corpcomdev.azurewebsites.net/js/'))
  .pipe(replace('=/img/', '=https://corpcomdev.azurewebsites.net/img/'))
  .pipe(gulp.dest('cordova/www')));
