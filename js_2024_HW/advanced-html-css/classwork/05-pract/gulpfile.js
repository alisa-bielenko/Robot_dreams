import gulp from "gulp";
const { src, dest, watch, series, parallel } = gulp;

import imagemin from "gulp-imagemin";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import clean from "gulp-clean";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

import bsc from "browser-sync";
const browserSync = bsc.create();

const htmlTaskHandler = () => {
	return src("./src/*.html").pipe(dest("./dist"));
};

const cssTaskHandler = () => {
	return src("./src/scss/main.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(csso())
		.pipe(dest("./dist/css"))
		.pipe(browserSync.stream());
};

const imagesTaskHandler = () => {
	return src("./src/img/**/*.*")
		.pipe(imagemin())
		.pipe(dest("./dist/img"));
};

const fontTaskHandler = () => {
	return src("./src/fonts/**/*.*").pipe(dest("./dist/fonts"));
};

const cleanDistTaskHandler = () => {
	return src("./dist", { read: false, allowEmpty: true }).pipe(
		clean({ force: true })
	);
};

const browserSyncTaskHandler = () => {
	browserSync.init({
		server: {
			baseDir: "./dist",
		},
	});

	watch("./src/scss/**/*.scss").on(
		"all",
		series(cssTaskHandler, browserSync.reload)
	);
	watch("./src/*.html").on(
		"change",
		series(htmlTaskHandler, browserSync.reload)
	);
	watch("./src/img/**/*").on(
		"all",
		series(imagesTaskHandler, browserSync.reload)
	);
};

export const cleaning = cleanDistTaskHandler;
export const html = htmlTaskHandler;
export const css = cssTaskHandler;
export const font = fontTaskHandler;
export const images = imagesTaskHandler;

export const build = series(
	cleanDistTaskHandler,
	parallel(htmlTaskHandler, cssTaskHandler, fontTaskHandler, imagesTaskHandler)
);
export const dev = series(build, browserSyncTaskHandler);
