// const Readable = require('stream').Readable

// // 底层数据
// const dataSource = ['a', 'b', 'c']

// const readable = Readable()
// readable._read = function() {
//     process.nextTick(() => {
//         if (dataSource.length) {
//             this.push(dataSource.shift())
//         } else {
//             this.push(null)
//         }
//     })
// }
// readable.on('data', (data) => {
//     console.log(data);
//     process.stdout.write('\ndata: ' + data);
//     // output
//     // buffer: a
//     // buffer: b
//     // buffer: c
// });



// case2

var Read = require('stream').Readable;
var r = new Read();

r.push('hello');


r.on('readable', function() {
    var chunk = r.read();
    console.log('get data by readable event: ', chunk.toString())
    // output 
    // helloworld
});

r.on('end', function() {
    console.log("read end----------");
});

r.push('world');
r.push(null); //nextTick trigger "readable" event