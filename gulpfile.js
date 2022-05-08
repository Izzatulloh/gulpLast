global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync'),
    sass: require('gulp-sass')(require('sass')),

    path: {
        serveDir: './app/build',
        tasks: require('./gulp/config'),

        src: {
            html: "./app/src/*.html",
            style: './app/src/style/*.*',
            js: './app/src/js/*.*',
            img: './app/src/img/*.{jpg,png,svg,jpeg,jfif,gif,webp}',
            fonts: './app/src/fonts/**/*.*'
        },
        build: {
            html: './app/build',
            style: './app/build/style',
            js: './app/build/js',
            img: './app/build/img',
            fonts: './app/build/fonts'

        },
        watch: {
            html: ['./app/src/*.html', './app/src/view.*.html'],
            style: ['./app/src/style/**/*.*', './app/src/style/*.*'],
            js: './app/src/js/*.*',
            img: './app/src/img/*.{jpg,png,svg,jpeg,jfif,gif,webp}',
            fonts: './app/src/fonts/**/*.*'
        },
    },

    tasks: {
        default: ['html', 'style', 'js', 'img','fonts', 'serve', 'watch'],
        build: ['html', 'style', 'js', 'img','fonts']
    }

}
$.path.tasks.forEach(taskPath => require(taskPath)());

for (const key in $.tasks) {
    $.gulp.task(key, $.gulp.series($.gulp.parallel(...$.tasks[key])))
}
