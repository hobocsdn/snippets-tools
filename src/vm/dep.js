// let targetStack = [];
let uid = 0;
//属性监听订阅管理
class Dep {
    constructor() {
        this.id = uid++;
        this.subs = [];
    }
    // static target: null
    addSub(watcher) { // 添加订阅者
        this.subs.push(watcher);
    }
    removeSub(watcher) {
        var watcher = this.subs;
        if (subs.length) {
            const index = subs.indexOf(watcher)
            if (index > -1) {
                return subs.splice(watcher, 1);
            }
        }
    }
    depend() {
        var watcher = Dep.target;
        if (watcher) {
            watcher.addDep(this); //
        }
    }
    notify() {
        //通知所有订阅者
        var subs = this.subs.slice();
        for (let i = 0, l = subs.length; i < l; i++) {
            var watcher = subs[i];
            watcher.update();
        }
    }
}

Dep.target = null;

export default Dep;