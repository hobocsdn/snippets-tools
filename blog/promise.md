
### 【探索】promise 之知根知底
知根知底三步走
 1、会用(I can)
 2、知原理(I know)
 3、手把手撸(I do)

### 会用
1、基本用法
```
new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(data);
  } else {
    reject(error);
  }
});
```

2、Promise.prototype.then 方法
语法：promise.then(onFulfilled, onRejected)
```
promise.then(onFulfilled1, onRejected1).then(onFulfilled2, onRejected2)
```

3、Promise.prototype.catch 方法
语法：promise.catch(onFulfilled, onRejected)
```
new Promise((resolve,reject){
    throw new Error('test')
}).catch(error=>{
    console.log(error)
})
```

3、all、resolve、reject等静态方法
- Promise.all
- Promise.resolve
- Promise.reject
```

```


### 懂原理
- promise 为什么出现？解决了什么问题？
  解决`同步/异步`，`回调地狱`问题

**实现原理**

1、三种状态 
 - Pending(进行中)
 - Fulfilled(已成功)
 - Rejected(已失败)

2、状态转换.
 - 只能有以下两种转换，Pending => Fulfilled 或 Pending => Rejected
 - 对象的状态不受外界影响
 - 状态改变之后不会再发生变化，会一直保持这个状态。 
  
3、通过回调函数resolve 和 reject传递值 

具体构造函数、实例方法、静态方法
1、构造函数
- 构造函数Promise必须接受一个函数handle作为参数
- 参数又包含两个函数 resolve 、reject

2、then 方法
- 接受两个参数，成功时回调`onFulfilled`, 失败时回调`onRejected`,
- 支持链式调用(then方法必返回一个promise对象)

3、all、resolve、reject、race


**缺陷**
- 无法取消Promise，一旦新建它就会立即执行，无法中途取消
- 内部错误无法反应到外部(???)

### 手把手撸
- 第一步：定义三个状态
- 第二步：定义构造函数:传入handle，handle接收两个参数作为状态传递
```
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
const isFunction = variable => typeOf variable === 'function'

class MPromise {
    constructor(handle) {
        if (isFunction(handle)) {
            throw new Error('MPromise must accept a function as a parameter')
        }
        // 初始化默认状态
        this._status = PENDING

        // 执行handle  【resolve/reject 为伪代码】
        handle(resolve,reject)
    }
}

```
- 第三步：实现resolve、reject,绑定执行上下文

```
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
const isFunction = variable => typeOf variable === 'function'

class MPromise {
    constructor(handle) {
        if (isFunction(handle)) {
            throw new Error('MPromise must accept a function as a parameter')
        }
        // 初始化默认状态
        this._status = PENDING
        this._value = undefined

        try {
            // 传递绑定的上下文给resolve 、 reject
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (err) {
            this._reject(err)
        }
    }
    _resolve(val) {
        // 只更改一次
        if (this._status !== PENDING) return
        this._status = FULFILLED
        this._value = val
    }
    _reject() {
        // 只更改一次
        if (this._status !== PENDING) return
        this._status = REJECTED
        this._value = err
    }
}

```

- 第四步：由于then支持链式回调，增加FULFILLED 和 REJECTED 回调队列管理，具体实现(将参数onFulfilled, onRejected放入队列进行管理，直到状态变更)，

```
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
const isFunction = variable => typeOf variable === 'function'

class MPromise {
    constructor(handle) {
        if (isFunction(handle)) {
            throw new Error('MPromise must accept a function as a parameter')
        }
        // 初始化默认状态
        this._status = PENDING
        this._value = undefined

        // 成功失败队列管理
        this._fulfilledQueues = []
        this._rejectedQueues = []

        try {
            // 传递绑定的上下文给resolve 、 reject
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (err) {
            this._reject(err)
        }
    }
    _resolve(val) {
        // 只更改一次
        if (this._status !== PENDING) return
        this._status = FULFILLED
        this._value = val
    }
    _reject() {
        // 只更改一次
        if (this._status !== PENDING) return
        this._status = REJECTED
        this._value = err
    }
    then(onFulfilled,onRejected){
        const {_status,_value} = this
        switch(_status){
            case PENDING:// 放入对应队列 todo undefined是否放入队列
                this._fulfilledQueues.push(onFulfilled)
                this._rejectedQueues.push(onRejected)
                break;
            case FULFILLED:
                onFulfilled(_value)
                break;
            case REJECTED:
                onRejected(_value)
                break;
        }
        // 简单点返回当前实例，保证可以支持链式调用
        return this
    }
}

```
- 第五步：既然then都进行队列管理了， _resolve, _reject 依次执行对应成功/失败队列中的函数，并清空队列

```
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
const isFunction = variable => typeOf variable === 'function'

class MPromise {
    constructor(handle) {
        if (isFunction(handle)) {
            throw new Error('MPromise must accept a function as a parameter')
        }
        // 初始化默认状态
        this._status = PENDING
        this._value = undefined

        // 成功失败队列管理
        this._fulfilledQueues = []
        this._rejectedQueues = []

        try {
            // 传递绑定的上下文给resolve 、 reject
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (err) {
            this._reject(err)
        }
    }
    _resolve(val) {
        // 只更改一次
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
    }
    _reject(err) {
        // 只更改一次
        if (this._status !== PENDING) return
        this._status = REJECTED

        this._value = err
        let cb
        while (cb = this._rejectedQueue.shift()) {
            cb(err)
        }
    }
    then(onFulfilled,onRejected){
        const {_status,_value} = this
        switch(_status){
            case PENDING:// 放入对应队列 todo undefined是否放入队列
                this._fulfilledQueues.push(onFulfilled)
                this._rejectedQueues.push(onRejected)
                break;
            case FULFILLED:
                onFulfilled(_value)
                break;
            case REJECTED:
                onRejected(_value)
                break;
        }
        // TODO 为了保证支持链式调用，可以返回当前实例，，但也有可能是新的promise对象
        return this
    }
}
```

- 第六步 promise 异步执行，因此需要把_resolve _reject 改造成异步函数

```
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
const isFunction = variable => typeOf variable === 'function'

class MPromise {
    constructor(handle) {
        if (isFunction(handle)) {
            throw new Error('MPromise must accept a function as a parameter')
        }
        // 初始化默认状态
        this._status = PENDING
        this._value = undefined

        // 成功失败队列管理
        this._fulFilledQueues = []
        this._rejectedQueues = []

        try {
            // 传递绑定的上下文给resolve 、 reject
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (err) {
            this._reject(err)
        }
    }
    _resolve(val) {
        // 只更改一次
        setTimeout(()=>{
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
    _reject(err) {
        // 只更改一次
        setTimeout(()=>{
            if (this._status !== PENDING) return
            this._status = REJECTED

            this._value = err
            let cb
            while (cb = this._rejectedQueue.shift()) {
                cb(err)
            }
        })
    }
    then(onFulfilled,onRejected){
        const {_status,_value} = this
        switch(_status){
            case PENDING:// 放入对应队列 todo undefined是否放入队列
                this._fulfilledQueues.push(onFulfilled)
                this._rejectedQueues.push(onRejected)
                break;
            case FULFILLED:
                onFulfilled(_value)
                break;
            case REJECTED:
                onRejected(_value)
                break;
        }
        // TODO 为了保证支持链式调用，可以返回当前实例，，但也有可能是新的promise对象
        return this
    }
}

```
- 第七步 then 传递给下一个then 的值不是上一次执行的结果

```
```


### 拓展
- [promise 对象](http://es6.ruanyifeng.com/#docs/promise)