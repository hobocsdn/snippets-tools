const webpack = require("webpack");
const conf = require("../../webpack.config.js")

module.exports = () => {
    console.log("build test =====");
    webpack(conf, function() {
        console.log("webpack ok");
    });
}