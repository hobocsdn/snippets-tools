// import Constant from '../constant.js'
// import Random from './random/index.js'

import {
    EventBase,
    Event
} from './event.js'

import log4j from './log4j.js'

let Util = {
    extend(...args) {
        Object.assign(...args);
    }
};

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
"Boolean Number String Function Array Date RegExp Object Error Symbol".split(' ').forEach((value) => {
    Util[`is${value}`] = function(obj) {
        return Util.type(obj) === value.toLowerCase()
    }
})

Util.extend(Util, {
    isPlainObject(obj) {
        return Object.prototype.toString.call(obj) === "[object Object]";
    },
    hasOwn(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
    }
})

Util.extend(Util, {
    EventBase,
    Event,
    log4j
})


// proxy
let sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: Util.noop,
    set: Util.noop
};

Util.extend(Util, {
    /**
     * 
     * @param {Object} target 在指定的目标对象(vm)上访问get/修改set 
     * @param {String} sourcekey  实际访问的对象 _data
     * @param {String} key  属性名 
     */
    proxy(target, sourceKey, key) {
        sharedPropertyDefinition.get = function proxyGetter() {
            return this[sourceKey][key]
        };
        sharedPropertyDefinition.set = function proxySetter(val) {
            this[sourceKey][key] = val;
        };
        Object.defineProperty(target, key, sharedPropertyDefinition);
    },
    mixin(target, source, ...args) {
        if (args.length) {
            args.forEach(key => {
                if (hasOwn(source.prototype, key)) {
                    target.prototype[key] = source.prototype[key];
                }
            });
        } else {
            //merge(target.prototype,source.prototype);
            for (var key in source.prototype) {
                //不覆盖原始方法
                if (!hasOwn(target.prototype, key)) {
                    target.prototype[key] = source.prototype[key];
                }
            }
        }
    }
});

Util.extend(Util, {
    urlParse(url) {
        url = url || window.location.search;
        let reg = /[?&][^?&]+=[^?&]+/g;
        let arr = url.match(reg);
        let param = {};
        arr.forEach((item) => {
            // cut (?&)
            let temp = item.substring(1).split("=");
            let key = decodeURIComponent(temp[0]);
            let val = decodeURIComponent(temp[1]);
            param[key] = val;
        });
        return param;
    }
});


export default Util;