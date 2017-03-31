// 编写常用工具集合
/*
task=>熟练使用 ES6完成工具开发
###### 基本功能
1. 对象、字符串、数字类型基本处理
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
    tesList = [{
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