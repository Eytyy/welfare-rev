import _gulp from 'gulp';
import gulpHelp from 'gulp-help';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import render from 'gulp-nunjucks-render';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import changed from 'gulp-changed';
import del from 'del';
import browserSync from 'browser-sync';
import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import jsonminify from 'gulp-jsonminify';
import globalConfig from './gulp.config';

const gulp = gulpHelp(_gulp);

const root = {
  src: './src',
  dest: './dest',
};

const paths = {
  styles: {
    src: `${root.src}/styles/**/*.scss`,
    dest: `${root.dest}/styles/`,
  },
  js: {
    src: [`${root.src}/js/**/*.js`, `!${root.src}/js/vendor/*.js`],
    dest: `${root.dest}/js/`,
    buildFileName: 'all.min.js',
  },
  vendor: {
    src: `${root.src}/js/vendor/*.js`,
    dest: `${root.dest}/js/vendor/`,
    buildFileName: 'vendor.min.js',
  },
  html: {
    src: `${root.src}/html/**/*.html`,
    dest: `${root.dest}/`,
  },
  fonts: {
    src: `${root.src}/fonts/**/*`,
    dest: `${root.dest}/fonts`,
  },
  images: {
    src: `${root.src}/images/**/*`,
    dest: `${root.dest}/images`,
  },
  data: {
    src: `${root.src}/data/**/*.json`,
    dest: `${root.dest}/data`,
  },
  templates: {
    src: `${root.src}/templates/**/*.js`,
    dest: `${root.dest}/templates`,
    buildFileName: 'templates.min.js',
  },
  resources: {
    src: `${root.src}/resources/**/*`,
    dest: `${root.dest}/resources`,
  },
};

// <Styles>
gulp.task('styles', 'Compile Sass', () => {
  gulp.src(paths.styles.src)
    .pipe(gulpif(globalConfig.development(), sourcemaps.init()))
    .pipe(sass())
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(autoprefixer())
    .pipe(gulpif(globalConfig.development(), sourcemaps.write('.')))
    .pipe(gulpif(globalConfig.production(), cleanCSS()))
    .pipe(gulp.dest(paths.styles.dest));
});
// </Styles>

// <Data>
gulp.task('minifyData', 'minify data', () => {
  gulp.src(paths.data.src)
    .pipe(jsonminify())
    .pipe(gulp.dest(paths.data.dest));
});

gulp.task('copyData', 'copy data from src to dest', () => {
  gulp.src(paths.data.src)
    .pipe(gulp.dest(paths.data.dest));
});
// </Data>

// <Images>
gulp.task('images', 'Optimize images and move to dest folder', () => {
  gulp.src(paths.images.src)
    .pipe(changed(paths.images.dest)) // ignore unchanged files
    .pipe(imagemin()) // optimize
    .pipe(gulp.dest(paths.images.dest));
});
// </Images>

// <Fonts>
gulp.task('fonts', 'copy and move font files', () => {
  gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest));
    // .pipe(reload({ stream: true }));
});
// </Fonts>

// <Clean>
gulp.task('clean', 'clean up dist directory', () => {
  del([paths.templates.dest]);
  del([paths.js.dest]);
});
// </Clean>

// <Scripts>
gulp.task('js', 'compile javascript: lint then transpile', () => {
  gulp.src(paths.js.src)
    .pipe(gulpif(globalConfig.development(), eslint()))
    .pipe(gulpif(globalConfig.development(), plumber({ errorHandler: notify.onError('Erro: <% error.message %>') })))
    .pipe(gulpif(globalConfig.development(), eslint.format()))
    .pipe(gulpif(globalConfig.development(), sourcemaps.init()))
      .pipe(babel())
      .pipe(gulpif(globalConfig.production(), concat(paths.js.buildFileName)))
      .pipe(gulpif(globalConfig.production(), uglify()))
    .pipe(gulpif(globalConfig.development(), sourcemaps.write()))
    .pipe(gulp.dest(paths.js.dest));
});

gulp.task('vendor', 'compile vendor files', () => {
  gulp.src(paths.vendor.src)
    .pipe(gulpif(globalConfig.development(), plumber({ errorHandler: notify.onError('Erro: <% error.message %>') })))
    .pipe(gulpif(globalConfig.development(), sourcemaps.init()))
      .pipe(gulpif(globalConfig.production(), concat(paths.vendor.buildFileName)))
    .pipe(gulpif(globalConfig.development(), sourcemaps.write()))
    .pipe(gulp.dest(paths.vendor.dest));
});
// </Scripts>

// <Templates>
gulp.task('templates', 'compress template files', () => {
  gulp.src(paths.templates.src)
    .pipe(gulpif(globalConfig.development(), sourcemaps.init()))
      .pipe(concat(paths.templates.buildFileName))
      .pipe(gulpif(globalConfig.production(), uglify()))
    .pipe(gulpif(globalConfig.development(), sourcemaps.write()))
    .pipe(gulp.dest(paths.templates.dest));
});
// </Templates>

// <HTML>
const templatesPath = `${root.src}/html`;

gulp.task('html', 'compile HTML files', () => {
  gulp.src(paths.html.src)
    .pipe(render({
      path: templatesPath,
      data: {
        env: globalConfig.production() ? 'production' : 'development',
      },
    }))
    .pipe(gulp.dest(paths.html.dest));
});
// </HTML>

// Start of watch related tasks -------------------------------------------
gulp.task('watch', 'Watcher task', () => {
  gulp.watch(paths.data.src, ['data']);
  gulp.watch(paths.html.src, ['html']);
  gulp.watch(paths.styles.src, ['styles']);
  gulp.watch(paths.js.src, ['js']);
  gulp.watch(paths.templates.src, ['templates']);
});
// End of watch related tasks ---------------------------------------------

// Start of serve related tasks -------------------------------------------
gulp.task('serve', 'serve resources', () => {
  browserSync({
    server: './dest',
  });
});

gulp.task('build', ['help', 'clean', 'copyData', 'html', 'vendor', 'js', 'templates', 'styles', 'fonts', 'images', 'html', 'watch']);

gulp.task('build:production', ['set-production', 'help', 'clean', 'html', 'vendor', 'js', 'templates', 'styles', 'fonts', 'images', 'html']);

gulp.task('set-production', () => {
  globalConfig.environment = 'production';
});

gulp.task('default', ['build']);
