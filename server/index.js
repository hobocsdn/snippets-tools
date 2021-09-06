var app = require("http").createServer(handler);
var io = require("socket.io")(app);
var fs = require("fs");

app.listen(3008);

console.log("server---3008");
console.log(process);
function handler(req, res) {
  console.log(__dirname);
  fs.readFile(__dirname + "/demo/index.html", function(err, data) {
    if (err) {
      res.writeHead(500);
      return res.end("Error loading index.html");
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on("connection", function(socket) {
  socket.emit("news", {
    hello: "world"
  });
  socket.on("my other event", function(data) {
    console.log(data);
  });
});

// var Koa = require('koa');
// var serve = require('koa-static');
// var app = new Koa();

// app.use(serve('../demo'));
// app.use(serve('../'));

// app.listen(80);
