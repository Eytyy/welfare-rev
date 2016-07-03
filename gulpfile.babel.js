import _gulp from 'gulp';
import gulpHelp from 'gulp-help';
import data from 'gulp-data';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import render from 'gulp-nunjucks-render';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import del from 'del';
import browserSync from 'browser-sync';

const gulp = gulpHelp(_gulp);
const reload = browserSync.reload;

const root = {
  src: './src',
  dest: './dest',
};

const paths = {
  styles: {
    src: `${root.src}/sass/**/*.scss`,
    dest: `${root.dest}/css/`,
  },
  scripts: {
    src: `${root.src}/js/**/*.js`,
    dest: `${root.dest}/js/`,
  },
  html: {
    src: `${root.src}/html/**/*.html`,
    dest: `${root.dest}/`,
  },
  data: {
    src: `${root.src}/data/**/*.json`,
    dest: `${root.dest}/data`,
  },
};

// Start of styles related tasks ------------------------------------------
gulp.task('styles', 'Convert Sass to CSS', () => {
  gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(reload({ stream: true }));
});
// End of styles related tasks  -------------------------------------------

gulp.task('copyData', 'copy data from src to dest', () => {
  gulp.src(paths.data.src)
    .pipe(gulp.dest(paths.data.dest))
    .pipe(reload({ stream: true }));
});

// Start of HTML related tasks --------------------------------------------
const dataPath = `${root.src}/data`;
const templatesPath = `${root.src}/html`;

gulp.task('html', 'copy HTML files and move to dest folder', () => {
  gulp.src(paths.html.src)
    .pipe(data(() => ({
      global: require(`${dataPath}/data.json`),
    })))
    .pipe(render({
      path: templatesPath,
    }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(reload({ stream: true }));
});
// End of HTML related tasks   --------------------------------------------


// Start of ES6 related tasks ---------------------------------------------
// Clean Task
gulp.task('clean-scripts', 'remove generated script files in dest directory', () => {
  del([paths.scripts.dest]);
});

// Babel Task
gulp.task('babel', 'Generate es6 files in dest directory', () => {
  gulp.src(paths.scripts.src)
    .pipe(babel())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(reload({ stream: true }));
});

// Both (clean dest file the regenerate files in es6 compliant format using babel) Tasks
gulp.task('es6', 'Generate the es6 library in dest', ['clean-scripts', 'babel']);

// End of ES6 related tasks -----------------------------------------------


// Start of lint related tasks --------------------------------------------
gulp.task('lint', 'run eslint on all the source files', () => {
  gulp.src(paths.scripts.src)
    .pipe(eslint())
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
// End of lint related tasks ----------------------------------------------


// Start of watch related tasks -------------------------------------------
gulp.task('watch', 'Watcher task', () => {
  gulp.watch(paths.data.src, ['data']);
  gulp.watch(paths.html.src, ['html']);
  gulp.watch(paths.styles.src, ['styles']);
  gulp.watch(paths.scripts.src, ['lint', 'babel']);
});
// End of watch related tasks ---------------------------------------------


// Start of serve related tasks -------------------------------------------
gulp.task('serve', 'serve resources', () => {
  browserSync({
    server: './dest',
  });
});
// End of serve related tasks ---------------------------------------------

gulp.task('default', ['help', 'copyData', 'html', 'styles', 'babel', 'serve', 'watch']);
