import gulp from "gulp";

import { path } from "../config/path.js";
import { plugins } from "../config/plugins.js";

export function scss() {
  return (
    gulp
      .src(path.src.scss, { sourcemaps: true })
      .pipe(
        plugins.plumber(
          plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>",
          })
        )
      )
      .pipe(plugins.replace('"/src/imgs/', '"../imgs/'))
      .pipe(plugins.sass({ outputStyle: "expanded" }))
      .pipe(plugins.groupCssMediaQueries())
      .pipe(plugins.webpcss({ webpClass: ".webp", noWebpClass: ".no-webp" }))
      .pipe(
        plugins.autoprefixer({
          cascade: true,
          overrideBrowserslist: ["last 3 versions"],
        })
      )
      // comment out to not build expanded style.css
      .pipe(gulp.dest(path.build.scss))
      .pipe(plugins.cleanCss({}))
      .pipe(plugins.rename({ extname: ".min.css" }))
      .pipe(gulp.dest(path.build.scss))
      .pipe(plugins.browserSync.stream())
  );
}
