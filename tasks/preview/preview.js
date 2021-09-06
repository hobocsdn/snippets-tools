var browserSync = require('browser-sync');
// for debug
module.exports = () => {
    browserSync({
        server: {
            baseDir: ["./demo", "./"]
        },
        files: ["./demo"],
        index: "index.html",
        port: "8080"
    });
}