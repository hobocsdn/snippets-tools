const Util = {
    consoleStart(...args) {
        console.log("===========================");
        if (args.length) {
            console.log(...args);
        }
    },
    consoleEnd(...args) {
        if (args.length) {
            console.log(...args);
        }
        console.log("===========================");
    }
}
module.exports = Util;