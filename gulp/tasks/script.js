module.exports = () => {
    $.gulp.task('js', () => {
        return $.gulp.src($.path.src.js)
            .pipe($.gp.babel())
            .pipe($.gulp.dest($.path.build.js))
            .on('end', $.bs.reload)
    })
}