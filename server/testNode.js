// const url = require("url");
// var l = "http://www.test.com:443/animals?a%20=1&b=%202#abcd"
// var res = url.parse(l);
// console.log(res);

console.log(process.argv);

const toSize = size => {
  return `${size / 1024 / 1024}M`;
};
console.log(process.memoryUsage());

function inner() {
  var innerArr = [];
  for (let index = 0; index < 8; index++) {
    innerArr.push(new Array(12.5 * 1024 * 1024)); // 100M
    var memory = process.memoryUsage();
    console.time("inner", index);
    console.log(toSize(memory.heapUsed));
    console.timeEnd("inner", index);
  }
}
inner();

var arr = [];
for (let index = 0; index < 8; index++) {
  console.time("global", index);
  arr.push(new Array(12.5 * 1024 * 1024)); // 100M
  var memory = process.memoryUsage();
  console.log(toSize(memory.heapUsed));
  console.timeEnd("global", index);
}

console.log(process.memoryUsage());

// const net = require('net');
// const server = net.createServer((c) => {
//     // 'connection' listener
//     console.log('client connected');
//     c.on('end', () => {
//         console.log('client disconnected');
//     });
//     c.write('hello\r\n');
//     c.pipe(c);
// });
// server.on('error', (err) => {
//     throw err;
// });
// server.listen(8124, () => {
//     console.log('server bound');
// });
