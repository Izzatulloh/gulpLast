module.exports = ()=>{
    $.gulp.task('html',()=>{
       return $.gulp.src($.path.src.html)
       .pipe($.gp.fileInclude())
       .pipe($.gulp.dest($.path.build.html))
       .on('end',$.bs.reload)
    })
}