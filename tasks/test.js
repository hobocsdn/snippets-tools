// 另外打开一个shell 执行 test
// const shell = require("shelljs");
const fs = require("fs");
const path = require("path");

const child_process = require('child_process');

console.log(__dirname);

module.exports = () => {
    console.log("running test =====");
    child_process.exec("node ./node_modules/karma/bin/karma start").stdout.on('data', (data) => {
        console.log(data);
    });
}