const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

//para converter  gulp convert-webp
async function convertWebp() {
  const webp = await import("gulp-webp").then((mod) => mod.default);
  console.log("Iniciando a conversão de PNG para WebP...");

  return gulp
    .src("assets/**/*.{png,jpg}")
    .pipe(webp())
    .on("error", (err) => console.error("Erro ao converter imagens: ", err))
    .pipe(gulp.dest("assets"))
    .on("end", () => console.log("Conversão concluída!"));
}

function compileSass() {
  return gulp
    .src("scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(gulp.dest("css/"))
    .pipe(browserSync.stream());
}

gulp.task("sass", compileSass);

function pluginsCSS() {
  return gulp
    .src("css/lib/*.css")
    .pipe(concat("plugins.css"))
    .pipe(gulp.dest("css/"))
    .pipe(browserSync.stream());
}

gulp.task("plugincss", pluginsCSS);

function gulpJs() {
  return gulp
    .src("js/scripts/*.js")
    .pipe(concat("all.js"))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("js/"))
    .pipe(uglify());
}

gulp.task("alljs", gulpJs);

function pluginsJs() {
  return gulp
    .src(["js/lib/aos.min.js", "js/lib/swiper.min.js"])
    .pipe(concat("plugins.js")) // Concatenando os arquivos em plugins.js
    .pipe(uglify()) // Minificando o JavaScript
    .pipe(gulp.dest("js/")); // Salvando o arquivo minificado em js/
}

gulp.task("pluginjs", pluginsJs);

function browser() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
}

gulp.task("browser-sync", browser);
gulp.task("convert-webp", convertWebp);
function watch() {
  gulp.watch("scss/*.scss", compileSass);
  gulp.watch("css/lib/*.css", pluginsCSS);
  gulp.watch("*.html").on("change", browserSync.reload);
  gulp.watch("js/scripts/*", gulpJs);
  gulp.watch("js/lib/*.js", pluginsJs);
}

gulp.task("watch", watch);

gulp.task(
  "default",
  gulp.parallel(
    "watch",
    "browser-sync",
    "sass",
    "alljs",
    "pluginjs",
    "plugincss",
    "convert-webp"
  )
);
