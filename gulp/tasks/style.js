module.exports = () => {
    $.gulp.task('style', () => {
        return $.gulp.src($.path.src.style)
            .pipe($.sass())
            .pipe($.gp.rename({ extname: '.css' }))
            .pipe($.gp.autoprefixer())
            .pipe($.sass({outputStyle:'compressed'}))
            .pipe($.gp.groupCssMediaQueries())
            .pipe($.gulp.dest($.path.build.style))
            .on('end', $.bs.reload)
    })
}