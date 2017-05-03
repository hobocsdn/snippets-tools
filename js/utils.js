"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// 编写常用工具集合
/*
task=>熟练使用 ES6完成工具开发
###### 基本功能
1. 对象(类数组)、字符串、数字类型基本处理 类型判断 扩展
2. 日志输出
3. 功能测试
4.

#### 扩展工具
1. 时间格式化 字符串的常见应用场景(驼峰转换)
2. 随机数生成
3. 颜色生成器
4. 二维码生成器
5. 表单生成器
6. 位置随机生成
7. 动画
*/

(function (window, undefined) {
    var utils = {};
    var class2type = {};
    "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function (name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    /*
        return：min~max
    */
    //Math.random(0~1 随机数)、Math.ceil(向上取整 min~max)、Math.floor(min-1~ max)、Math.round(min-1~ max+1
    //硬币正反面(随机产生0,1)
    utils.random = function (max, min) {
        if (min === undefined) min = 0;
        return Math.round(Math.random() * (max - min) + min);
    };

    utils.$ = function (ele) {
        return document.querySelector(ele);
    };

    //颜色
    utils.randomColor = function (color) {
        var charCode = '0123456789abcdef';
        if (color === undefined) color = '#';
        color += charCode[Math.floor(Math.random() * 16)];
        if (color.length == 7) {
            return color;
        } else {
            return arguments.callee(color);
        }
    };
    // 获取对象中某几个属性的值 以数组形式返回 object to arry
    utils.obj2Arr = function () {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        // 类数组： [].slice.call(arrayLike); Array.from(arrayLike);
        // 全返回
        if (keys.length) {
            keys = Object.keys(obj);
        }
        var res = [];
        keys.forEach(function (key) {
            res.push(obj[key]);
        });
        return res;
    };

    utils.type = function (obj) {
        if (obj == null) {
            return obj + "";
        }
        toString = Object.prototype.toString;
        return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
    };
    /*
     * 对象数组排序
     * @param {String} firstKey 优先排序
     * @param {String} secondKey 次要排序(firstKey相等(包含undefined)
     * @param {String} dataType 数据类型
     * @param {Boolean} asc 升序
     */
    utils.sortBy = function (opts) {
        var firstKey = opts.firstKey;
        var secondKey = opts.secondKey;
        var dataType = opts.dataType;
        var asc = opts.asc ? -1 : 1;
        var comparer = function comparer(a, b) {
            var av = a[firstKey];
            var bv = b[firstKey];
            if (av !== bv) {
                if (av > bv || av === void 0) return 1;
                if (av < bv || bv === void 0) return -1;
            }
            return asc * (a[secondKey] - b[secondKey]);
        };
        var dateComparer = function dateComparer(a, b) {
            var d1 = new Date(a[firstKey]);
            var d2 = new Date(b[firstKey]);
            var dt1 = av.getTime();
            var dt2 = bv.getTime();
            if (dt1 === dt2 || isNaN(dt1) && isNaN(dt2)) {
                return asc * (a[secondKey] - b[secondKey]);
            } else {
                if (av > bv || av === void 0) return 1;
                if (av < bv || bv === void 0) return -1;
            }
        };
        var handlers = {
            number: comparer,
            string: comparer,
            date: dateComparer
        };
        return handlers[dataType] || comparer;
    };
    window.utils = utils;
})(window, void 0);

//测试coverage
(function (window, undefined) {
    var _this = this;

    var repeatTest = function repeatTest(item) {
        var fn = item.fn,
            args = item.args,
            times = item.times,
            expect = item.expect;
        var fail = false;
        for (var i = 0; i < times; i++) {
            var res = fn.apply(_this, args);
            if (typeof expect === "function") {
                if (!expect.call(_this, res)) {
                    fail = true;
                    console.error(res);
                }
            }
        }
        if (!fail) {
            console.log(item.case + " success");
        }
    };
    tesList = [{
        case: "random",
        fn: utils.random,
        args: [10, 5],
        times: 100,
        expect: function expect(res) {
            return res < 5 || res > 10 ? false : true;
        }
    }, {
        case: "color",
        fn: utils.randomColor,
        times: 100,
        expect: function expect(res) {
            return res.indexOf("#") === -1 || res.length !== 7 ? false : true;
        }
    }];
    tesList.forEach(function (item) {
        repeatTest(item);
    });
})(window, void 0);