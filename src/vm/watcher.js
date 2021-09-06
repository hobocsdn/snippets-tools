import Dep from './dep';
class Watcher {
    constructor(vm, key, cb) {
        this.vm = vm;
        this.key = key;
        this.cb = cb;
        this.deps = [];
        this.depIds = [];
        this.value = this.get(); //实例化时巧妙的利用属性访问getter 将订阅者添加到属性的Dep 管理
    }
    get() {
        Dep.target = this;
        // 巧妙添加到监听依赖队列上
        let value = this.vm._data[this.key];
        Dep.target = null;
        return value;
    }
    update() {
        this.run();
    }
    run() { //执行回调
        var value = this.vm._data[this.key];
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    }
    addDep(dep) {
        //监控对象依赖收集管理
        //根据属性id 去重 添加监听
        if (!this.depIds.includes(dep.id)) {
            this.depIds.push(dep.id);
            this.deps.push(dep);
            dep.addSub(this); //属性依赖添加观察者
        }
    }
}


export default Watcher;