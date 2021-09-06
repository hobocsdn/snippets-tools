// Underscore.js 1.8.3
/* 
 * 频率控制 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次
 * @param fn {function}  需要调用的函数
 * @param wait  {number}    延迟时间，单位毫秒
 * @param options  {leading:false,tailing:true} 给 leading参数传递false 绑定的函数先执行，而不是wait后后执行。
 * @return {function}实际调用函数
 */
export let throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function() {
        var now = new Date().getTime(); //事件触发时间
        if (!previous && options.leading === false) previous = now; //previous 第一次触发是时间
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};



/*
 * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 wait，fn 才会执行
 * @param fn {function}  要调用的函数
 * @param wait   {number}    空闲时间
 * @param immediate  {bool} 给 immediate参数传递false 绑定的函数先执行，而不是delay后后执行。
 * @return {function}实际调用函数
 */
export let debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
        //上次执行与这次执行时间间隔
        var last = new Date().getTime() - timestamp; //事件频繁触发的情况下，timestamp不断更新，因此总是最后一次timestamp 后等待wait之后执行函数

        if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
        }
    };

    return function() {
        context = this;
        args = arguments;
        timestamp = new Date().getTime();
        var callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    };
};


export let raf = (function() {
    let requestAnimationFrame, cancelAnimationFrame;
    var lastTime = 0;
    if (!window.requestAnimationFrame) {
        requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!cancelAnimationFrame) {
        cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
    return {
        requestAnimationFrame: window.requestAnimationFrame.bind(window) || requestAnimationFrame,
        cancelAnimationFrame: window.cancelAnimationFrame.bind(window) || cancelAnimationFrame
    }
}());