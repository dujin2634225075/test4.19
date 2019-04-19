let gulp = require("gulp");
let webserver = require("gulp-webserver");
gulp.task("server", () => {
    return gulp.src("./src")
        .pipe(webserver({
            port: 8000,
            livereload: true,
            open: true,
            proxies: [
                { source: "/getlist", target: "http://localhost:3000/getlist" }
            ]
        }))
})