import gulp from "gulp";
import { copy } from "./gulp/tasks/copy.js";
import { path } from "./gulp/config/path.js";
import { clear } from "./gulp/tasks/clear.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";

function watch() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(html, copy);

export const dev = gulp.series(clear, mainTasks, gulp.parallel(server, watch));
export default () => {};
