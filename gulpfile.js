
const {
  src,
  dest,
  watch,
  series,
  parallel

  
} = require('gulp');

const del = require('del');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

const html = () => {
    console.log("Обработка HTML")
    return src('docs/*.html')
    
    
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./public"))

}


 const clean = () => {
	return del(['public/*'])
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "./public"
    },
  });

  // watch('./docs/css/**/*.css', styles);
  watch('./docs/*.html', html);
//   watch('./src/resources/**', resources);
//   watch('./src/img/*.{jpg,jpeg,png,svg}', images);
//   watch('./src/img/**/*.{jpg,jpeg,png}', images);
//   watch('./src/img/svg/**.svg', svgSprites);
}


exports.html = html;
exports.clean = clean;
exports.watch = watchFiles;
exports.dev = series(
  clean,
  html,
  watchFiles
);