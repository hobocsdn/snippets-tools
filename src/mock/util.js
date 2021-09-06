import Constant from './constant.js'
// import Random from './random/index.js'

let Util = {}
Util.extend = (...args) => {
    Object.assign(...args);
}
Util.extend(Util, {
    noop() {},
    /**
     * string | number | math
     */
    type(obj) {
        return (obj === null || obj === undefined) ? String(obj) : Object.prototype.toString.call(obj).match(/\[object (\w+)\]/)[1].toLowerCase();
    },
    keys(obj) {
        // TODO ,it contains attr from prototype clain 
        return Object.keys(obj);
    },
    // 浅拷贝
    extend: (...args) => {
        Object.assign(...args);
    },
    getValue(o, key) {
        if (this.type(o) === "object") {
            let value = o;
            const attrs = key.split(".");
            attrs.forEach(atrr => {
                if (value) {
                    value = value[atrr];
                }
            });
            return value;
        }
        return null;
    }
})

// type
Constant.TYPE.split(' ').forEach((value) => {
    Util[`is${value}`] = function(obj) {
        return Util.type(obj) === value.toLowerCase()
    }
})


//String
Util.extend(Util, {
    repeat(string, n) {
        // new Array(n+1).join(string)
        // (x^2)^(n/2) may be faster
        let result = '';
        let _repeat = (string, n) => {
            if (!string || n < 1) {
                return result;
            }
            if (n % 2) {
                result += string
            }
            n = Math.floor(n / 2)
            if (n) {
                string += string;
                return _repeat(string, n);
            }
            return result;
        }
        return _repeat(string, n);
    }
})

// Object
Util.extend(Util, {
    keys(obj) {
        // TODO ,it contains attr from prototype clain 
        return Object.keys(obj);
    },
    /**
     * 
     *  toPath('a.b.c')
     *  // => ['a', 'b', 'c']
     * toPath('a[0].b.c') TODO
     * // => ['a', '0', 'b', 'c']
     */
    toPath(value) {
        return value.split(".")
    },
    getValue(o, path) {
        if (this.isObject(o)) {
            let value = o;
            const attrs = this.toPath(path);
            attrs.forEach(atrr => {
                if (value) {
                    value = value[atrr];
                }
            });
            return value;
        }
        return null;
    }
});

// array 
Util.extend(Util, {
    /**
     * 集合 a,b 之间的包含关系
     * 
     * @param {Array} a 
     * @param {Array} b 
     * 
     */
    contains(a, b) {
        if (a instanceof Array && b instanceof Array) {
            let res = true;
            Util.iterator(b, (item) => {
                if (!a.includes(item)) { // no use indexOf :NaN !== NaN
                    res = false;
                    return false;
                }
            })
            return res;
        }
        return false
    }
    /**
     * 集合 a,b 之间的交集
     * 
     * @param {Array} a 
     * @param {Array} b 
     * 
     */
    // TODO 并集 
});

// number 
Util.extend(Util, {
    // simple compare: lt lte eq gt gte  NaN !== NaN
    eq(value, other) {
        return value === other || (value !== value && other !== other)
    },
    // 
    // 取中位数、最大值、最小值、求和、求差、偏差、标准差
    clamp(number, lower, upper) {
        return Math.min(Math.max(number, lower), upper);
        // return Math.max(Math.min(number, upper), lower);
    },
    // 判断是否数字
    isNaN(value) {
        // Number(value) === NaN
        isNaN(value)
    }
})

Util.extend(Util, {
    // 非空对象
    isObjectLike(value) {
        return typeof value === "object" && value !== null;
    },
    // deep compare  
    isEequal(value, other) {
        if (value === other) {
            return true;
        }
        if (value !== value && other !== other) {
            return true;
        }
    }
})

// Image

Util.extend(Util, {
    url2Base64(url, cb) {
        var img = new Image();
        img.src = url;
        img.onload = function() {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            canvas.getContext("2d").drawImage(img, 0, 0, width, height);
            var dataURL = canvas.toDataURL("img/jpg");
            cb && cb(dataURL);
        }
        return;
    },
    dataImage(size, text, background, foreground) {
        var width = size.width;
        var height = size.height;
        var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        if (!canvas || !ctx) return '';
        text = text || (`${width}px x ${height}px`);
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = background || "#000"
        ctx.fillRect(0, 0, width, height)
        ctx.fillStyle = foreground || "#FFF"
        ctx.font = 'bold 14px sans-serif'
        ctx.fillText(text, (width / 2), (height / 2), width)
        return canvas.toDataURL('image/png')
    }
})


// iterator
Util.extend(Util, {
    iterator(arr, iterator) {
        if (!Util.isArray(arr)) {
            return;
        }
        let len = arr.length;
        if (Util.isFunction(iterator)) {
            for (var index = 0; index < len; index++) {
                var result = iterator.apply(this, arr[index], index);
                if (result === false) {
                    break;
                }
            }
        }
    }
});

//算术 
Util.extend(Util, {
    sumBy(array, iteratee) {
        if (array === null || !array.length) {
            return 0;
        }
        let result;
        for (const value of array) {
            const current = iteratee(value)
            if (current !== undefined) {
                result = result === undefined ? current : (result + current)
            }
        }
        return result;
    }
})

// promise

Util.extend(Util, {})

export default Util