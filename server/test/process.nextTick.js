setImmediate(() => {
    console.log('setImmediate FIRED 1');
})
setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
}, 0);

setImmediate(() => {
    console.log('setImmediate FIRED 2');
})

process.nextTick(function A() {
    console.log(1);
    process.nextTick(function B() {
        console.log(2);
    });
});
process.nextTick(function B() {
    console.log(3);
});

// output
// 1 
// 3 
// 2 
// TIMEOUT FIRED
// setImmediate FIRED 1
// setImmediate FIRED 2