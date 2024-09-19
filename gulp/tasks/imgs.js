import gulp from "gulp";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";

import { path } from "../config/path.js";
import { plugins } from "../config/plugins.js";

function convertToWebp() {
  return gulp
    .src(path.src.imgs, { encoding: false })
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: "IMGS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(plugins.newer({ dest: path.build.imgs, ext: ".webp" }))
    .pipe(plugins.webp())
    .pipe(gulp.dest(path.build.imgs))
    .pipe(plugins.browserSync.stream());
}

function copyOriginals() {
  return gulp
    .src(path.src.imgs, { encoding: false })
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: "IMGS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(plugins.newer(path.build.imgs))
    .pipe(gulp.dest(path.build.imgs))
    .pipe(plugins.browserSync.stream());
}

function copySvg() {
  return gulp
    .src(path.src.svg)
    .pipe(gulp.dest(path.build.imgs))
    .pipe(plugins.browserSync.stream());
}

export const imgs = gulp.series(copyOriginals, copySvg, convertToWebp);
