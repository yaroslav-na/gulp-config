import replace from "gulp-replace";
import fileInclude from "gulp-file-include";
import webHtmlNoSvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browserSync from "browser-sync";

export const plugins = {
  replace,
  fileInclude,
  webHtmlNoSvg,
  versionNumber,
  plumber,
  notify,
  browserSync,
};
