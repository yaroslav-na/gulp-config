import { basename, resolve } from "path";
const rootFolder = basename(resolve());

const buildFolder = "dist";
const srcFolder = "src";

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    scss: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files`,
    imgs: `${buildFolder}/imgs/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    imgs: `${srcFolder}/imgs/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/imgs/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    imgs: `${srcFolder}/imgs/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
