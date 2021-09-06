#! /usr/bin/env node


const program = require("commander");
const version = require("../package.json").version;
const Util = require("./util.js");

program.version(version, '-v, --version');

const tasks = {
    test: require("../tasks/test.js"),
    build: require("../tasks/build/build.js"),
    server: require("../tasks/server/server.js"),
    preview: require("../tasks/preview/preview.js")
};

const runTask = function(cmd, ...args) {
    const task = tasks[cmd];
    if (task) {
        Util.consoleStart(cmd);
        task.apply(this, args);
        Util.consoleEnd(cmd);
        return;
    }
};

program.usage('<command> [arguments]');

program
    .command('test')
    .description('test')
    .action(function() {
        runTask('test', arguments);
    });
program
    .command('build')
    .description('build')
    .action(function() {
        runTask('build', arguments);
    });

program
    .command('server')
    .description('server')
    .action(function() {
        runTask('server', arguments);
    });

program
    .command('preview [port]')
    .description('preview')
    .action(function() {
        runTask('preview', arguments);
    });

program.on('--help', function() {
    console.log('');
    console.log('  Examples:');
    console.log('');
    console.log('ts test');
    console.log('ts build');
    console.log('ts server');
    console.log('ts preview');
    console.log('');
    console.log('ts --version: ' + version);
});

program
    .command('*')
    .description('unknown command')
    .action(function() {
        console.log('Unknown command, execute "ts --help" for help');
    });

//===============================================================
program.parse(process.argv);