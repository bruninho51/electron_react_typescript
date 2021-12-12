const { argv } = require('yargs');
const gulp = require('gulp');
const template = require('gulp-template');
const rename = require('gulp-rename');

gulp.task('createWindow', () => {
  const { name } = argv;

  if (name && name.length > 0) {
    const destinationRender = `src/renderers`;
    const destinationWindow = `src/windows`;

    gulp.src('templates/renderer.txt')
      .pipe(template({ name }))
      .pipe(rename({
        basename: name,
        extname: '.tsx'
      }))
      .pipe(gulp.dest(destinationRender));

    gulp.src('templates/window.txt')
      .pipe(template({ name }))
      .pipe(rename({
        basename: name,
        extname: '.ts'
     }))
      .pipe(gulp.dest(destinationWindow));

    return Promise.resolve();
  }

  console.log('******************************************');
  console.log('* ERROR: You must provide a feature name *');
  console.log('* HINT:  gulp createWindow --name login  *');
  console.log('******************************************');
});