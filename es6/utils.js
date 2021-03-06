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


(function(window, undefined) {
    let utils = {};
    let class2type = {};
    "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    /*
        return：min~max
    */
    //Math.random(0~1 随机数)、Math.ceil(向上取整 min~max)、Math.floor(min-1~ max)、Math.round(min-1~ max+1
    //硬币正反面(随机产生0,1)
    utils.random = (max, min) => {
        if (min === undefined) min = 0;
        return Math.round(Math.random() * (max - min) + min);
    }

    utils.$ = (ele) => {
        return document.querySelector(ele);
    }

    //颜色
    utils.randomColor = function(color) {
            let charCode = '0123456789abcdef';
            if (color === undefined) color = '#';
            color += charCode[Math.floor(Math.random() * 16)];
            if (color.length == 7) {
                return color;
            } else {
                return arguments.callee(color);
            }
        }
        // 获取对象中某几个属性的值 以数组形式返回 object to arry
    utils.obj2Arr = (obj = {}, keys = []) => {
        // 类数组： [].slice.call(arrayLike); Array.from(arrayLike);
        // 全返回
        if (keys.length) {
            keys = Object.keys(obj);
        }
        let res = [];
        keys.forEach(function(key) {
            res.push(obj[key]);
        });
        return res
    }

    utils.type = (obj) => {
            if (obj == null) {
                return obj + "";
            }
            toString = Object.prototype.toString;
            return typeof obj === "object" || typeof obj === "function" ?
                class2type[toString.call(obj)] || "object" :
                typeof obj;
        }
        /*
         * 对象数组排序
         * @param {String} firstKey 优先排序
         * @param {String} secondKey 次要排序(firstKey相等(包含undefined)
         * @param {String} dataType 数据类型
         * @param {Boolean} asc 升序
         */
    utils.sortBy = (opts) => {
        let firstKey = opts.firstKey;
        let secondKey = opts.secondKey;
        let dataType = opts.dataType;
        let asc = opts.asc ? -1 : 1;
        let comparer = function(a, b) {
            var av = a[firstKey];
            var bv = b[firstKey];
            if (av !== bv) {
                if (av > bv || av === void 0) return 1;
                if (av < bv || bv === void 0) return -1;
            }
            return asc * (a[secondKey] - b[secondKey]);
        };
        let dateComparer = function(a, b) {
            let d1 = new Date(a[firstKey]);
            let d2 = new Date(b[firstKey]);
            let dt1 = av.getTime();
            let dt2 = bv.getTime();
            if (dt1 === dt2 || (isNaN(dt1) && isNaN(dt2))) {
                return asc * (a[secondKey] - b[secondKey]);
            } else {
                if (av > bv || av === void 0) return 1;
                if (av < bv || bv === void 0) return -1;
            }
        };
        let handlers = {
            number: comparer,
            string: comparer,
            date: dateComparer
        }
        return handlers[dataType] || comparer;
    }
    window.utils = utils;
})(window, void 0);


//测试coverage
(function(window, undefined) {
    let repeatTest = (item) => {
        let fn = item.fn,
            args = item.args,
            times = item.times,
            expect = item.expect;
        let fail = false;
        for (let i = 0; i < times; i++) {
            let res = fn.apply(this, args);
            if (typeof(expect) === "function") {
                if (!expect.call(this, res)) {
                    fail = true;
                    console.error(res);
                }
            }
        }
        if (!fail) {
            console.log(item.case+" success");
        }
    }
    let tesList = [{
        case: "random",
        fn: utils.random,
        args: [10, 5],
        times: 100,
        expect: (res) => {
            return (res < 5 || res > 10) ? false : true
        }
    }, {
        case: "color",
        fn: utils.randomColor,
        times: 100,
        expect: (res) => {
            return (res.indexOf("#") === -1 || res.length !== 7) ? false : true;
        }
    }];
    tesList.forEach(function(item) {
        repeatTest(item);
    });
})(window, void 0);