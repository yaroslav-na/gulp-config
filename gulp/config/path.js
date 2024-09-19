import { basename, resolve } from "path";
const rootFolder = basename(resolve());

const buildFolder = "dist";
const srcFolder = "src";

export const path = {
  build: {
    scss: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files`,
  },
  src: {
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
