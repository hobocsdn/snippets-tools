/**
 * @file 观察者 
 * @author Tim Guo(tim.guo@morningstar.com)
 * 
 */

import Dep from './dep.js'

class Observer {
    constructor(value) {
        this.value = value;
        this.dep = new Dep();
        // this.vmCount = 0;

        //将对象变为被观察对象
        def(value, '__ob__', this);

        //监测该对象所有属性，改用setter getter 访问属性
        if (Array.isArray(value)) {
            this.observeArray(value);
        } else {
            this.walk(value);
        }
    }
    walk(obj) {
        let keys = Object.keys(obj);
        keys.forEach(function(key, index) {
            defineReactive(obj, key, obj[key]);
        });
    }
    observeArray(items) {
        items.forEach(function(item, i) {
            observe(item);
        });
    }
}

function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}

function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}

function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
}

/**
 * 重新定义值的访问方式
 * 
 * @param {*} obj 
 * @param {*} key 
 * @param {*} val 
 */
function defineReactive(obj, key, val) {
    let dep = new Dep(); //订阅管理类
    /*Object.getOwnPropertyDescriptor:返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）*/
    let property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
        return;
    }

    let getter = property && property.get;
    let setter = property && property.set;

    let childOb = observe(val);
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            let value = getter ? getter.call(Obj) : val;
            let watcher = Dep.target;
            if (watcher) {
                dep.depend();
                if (childOb) {
                    childOb.dep.depend();
                }
                if (Array.isArray(value)) {
                    dependArray(value)
                }
            }
            return value;
        },
        set: function reactiveSetter(newVal) {
            // update 
            let value = getter ? getter.call(Obj) : val;
            if (newVal === value || (newVal !== newVal && value !== value)) {
                return
            }
            if (setter) {
                setter.call(Obj, newVal);
            } else {
                val = newVal;
            }
            /*添加值的监控*/
            childOb = observe(newVal);
            //通知所有订阅者
            dep.notify();
        },
    })
}

function dependArray(value) {
    for (let e, i = 0, l = value.length; i < l; i++) {
        e = value[i]
        e && e.__ob__ && e.__ob__.dep.depend()
        if (Array.isArray(e)) {
            dependArray(e)
        }
    }
}

/**
 * 
 * @param {PlainObject/Array} data 
 */
let observe = (data) => {
    let ob;
    if (hasOwn(data, '__ob__' && data.__ob__ instanceof Observer)) {
        ob = data.__ob__
    } else if (Array.isArray(data) || isPlainObject(data)) {
        ob = new Observer(data);
    }
    return ob;
}

export default observe;