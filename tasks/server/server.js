module.exports = () => {
    var Koa = require('koa');
    var serve = require('koa-static');
    var app = new Koa();
    app.use(serve('./demo'));
    app.use(serve('./'));
    app.listen(3009);
};