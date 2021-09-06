import {
    EventBase
} from '../util/event.js'

import Util from '../util/index.js'
import observe from './observe.js'
import Watcher from './watcher.js'

let {
    isPlainObject,
    isFunction,
    isString,
    noop
} = Util;

/**
 * 属性描述
 *
 * @type {Object Observer} __ob__ 观察者实例
 * @type {Object} _data 
 */

class VM extends EventBase {
    constructor(opts = {}) {
        super();
        this.$options = opts;
        // 设置代理并观察对象
        opts.data && this.initData(this);
        opts.watch && this.initWatch(this, opts.watch);
    }
    initData(vm) {
        let data = vm.$options.data;
        data = vm._data = data.call(this);
        let keys = Object.keys(data);
        let i = keys.length;
        while (i--) {
            proxy(vm, '_data', keys[i]);
        }
        observe(data);
    }
    /**
     * 
     * @param {VM} vm 
     * @param {Object} watch 
     * {
     *  attr1:Object,
     *  {
     *      handler:Function,
     *      immediate:Boolean //是否立即处理
     *  }
     *  attr2:Function
     * }       
     */
    initWatch(vm, watch) {
        const keys = Object.keys(watch);
        keys.forEach(function(key, index) {
            var options = watch[key];
            vm.$watch(vm, key, options);
        });
    }
    $watch(vm, key, handler) {
        let options = handler;
        let cb;
        if (isPlainObject(handler)) {
            cb = handler.handler;
        } else if (isString(handler)) {
            cb = vm[handler];
        } else if (isFunction(handler)) {
            cb = handler;
        }
        let watcher = new Watcher(vm, key, cb, options);
        if (options.immediate) {
            cb.call(vm, watcher.value);
        }
        return watcher;
    }
    toString() {
        return "[Object VM]";
    }
}


let sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
};


/**
 * 
 * @param {Object} target 在指定的目标对象(vm)上访问get/修改set 
 * @param {String} sourcekey  实际访问的对象 _data
 * @param {String} key  属性名 
 */
function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
        this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
}

export default VM;