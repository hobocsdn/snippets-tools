// promise.js 实现

// d定义三个状态
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

/* 必须接收一个函数作为参数 */
const isFunction = f => Object.toString(f) === '[Object function]'

class MPromise {
    constructor(executor) {
        if (isFunction(executor)) {
            throw new Error('MyPromise must accept a function as a parameter')
        }
        // 初始化默认状态、当前promise返回值
        this._status = PENDING
        this._value = undefined

        // 成功失败队列管理
        this._fulfilledQueues = []
        this._rejectedQueues = []

        // 执行executor
        try {
            // 传递绑定的上下文给resolve 、 reject
            executor(this._resolve.bind(this), this._reject.bind(this))
        } catch (err) {
            this._reject(err)
        }
    }
    _resolve(val) {
        // 只更改一次
        setTimeout(() => {

            if (this._status !== PENDING) return
            this._status = FULFILLED
            // 依次执行成功队列中的函数，并清空队列
            const runFulfilled = (value) => {
                let cb;
                while (cb = this._fulfilledQueues.shift()) {
                    cb(value)
                }
            }
            // 依次执行失败队列中的函数，并清空队列
            const runRejected = (err) => {
                let cb
                while (cb = this._rejectedQueue.shift()) {
                    cb(err)
                }
            }
            /* 如果resolve的参数为Promise对象，则必须等待该Promise对象状态改变后,
               当前Promise的状态才会改变，且状态取决于参数Promise对象的状态
            */
            if (val instanceof MPromise) {
                val.then(value => {
                    this._value = value
                    runFulfilled(value)
                }, err => {
                    this._value = err
                    runRejected(err)
                })
            } else {
                this._value = val
                runFulfilled(val)
            }
        })
    }
    _reject() {
        setTimeout(() => {
            // 只更改一次
            if (this._status !== PENDING) return
            this._status = REJECTED

            this._value = err
            let cb
            while (cb = this._rejectedQueue.shift()) {
                cb(err)
            }
        })
    }
    then(onFulfilled, onRejected) {
        const {
            _status,
            _value
        } = this
        return new MPromise((resolve, reject) => {
            let fulfilledHandler = value => {
                try {
                    if (!isFunction(onFulfilled)) {
                        resolve(value)
                    } else {
                        let res = onFulfilled(value);
                        if (res instanceof MPromise) {
                            // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                            // new Promise((resolve,reject)=>{}) === new Promise().then(resolve,reject)
                            res.then(resolve, reject)
                        } else {
                            //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                            reject(res)
                        }
                    }
                } catch (err) {
                    reject(err)
                }
            }
            let rejectedHandler = err => {
                try {
                    if (!isFunction(onRejected)) {
                        reject(err)
                    } else {
                        let res = onRejected(err);
                        if (res instanceof MyPromise) {
                            // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                            res.then(resolve, reject)
                        } else {
                            //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                            reject(res)
                        }
                    }
                } catch (err) {
                    reject(err)
                }
            }
            switch (_status) {
                case PENDING: // 放入对应队列 todo undefined是否放入队列
                    this._fulfilledQueues.push(onFulfilled)
                    this._rejectedQueues.push(onRejected)
                    break;
                case FULFILLED:
                    fulfilledHandler(_value)
                    break;
                case REJECTED:
                    rejectedHandler(_value)
                    break;
            }
            // 简单点返回当前实例，保证可以支持链式调用
        })
    }
    static all() {}
    static resolve() {}
    static reject() {}
    static toString() {
        return "[Object MPromise]"
    }
}
console.log('===== start =====')
new MPromise((resolve, reject) => {
    resolve(1)
}).then(res => {
    console.log('then 1')
    return res
}).then(res => {
    console.log('then 2')
    console.log(res)
})
console.log('===== end ======')