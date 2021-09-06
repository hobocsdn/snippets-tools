/* 拦截器管理 */

const InterceptorManager = function() {
    this.handlers = {}
}

InterceptorManager.prototype.use = function(fulfilled, rejected) {
    this.handlers.push({
        fulfilled,
        rejected
    })
    return this.handlers.length - 1
}

// 遍历所有拦截器
InterceptorManager.prototype.forEach = function forEach(fn) {
    this.handlers.forEach(function forEachHandler(h) {
        if (h !== null) {
            fn(h);
        }
    });
};


// TODO mock
const dispatchRequest = () => {
    return new Promise()
}


const Axios = function() {
    this.interceptors = {
        request: new InterceptorManager,
        response: new InterceptorManager
    }
}

Axios.prototype.request = function(config) {
    // 核心逻辑 ：真正请求放中间，链式调用
    var chain = [dispatchRequest, undefined];
    // 请求拦截(顺序是否保留设置)
    this.interceptors.request.forEach((interceptor) => {
        chain.unshift(interceptor.fulfilled, interceptor.rejected)
    })
    // 响应拦截
    this.interceptors.response.forEach((interceptor) => {
        chain.push(interceptor.fulfilled, interceptor.rejected)
    })
    var promise = Promise.resolve(config);

    while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
    }
}

export default Axios


/*
```
const axios = new Axios()
axios.interceptors.request.use(fulfill1,reject1)
axios.interceptors.request.use(fulfill2,reject2)

axios.interceptors.request.use(fulfill1,reject1)
axios.interceptors.request.use(fulfill2,reject2)

```
*/