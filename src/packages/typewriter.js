import Util from '../util/index.js'
let {
    proxy
} = Util;
let styleBuffer = '';
let stringStorage = {};
let GUID = 0;

// co 函数库 与 Thunk 函数
export default class typewriter {
    /**
     * 
     * @param {Object/Array} opts 
     * @param {String} opts.content 
     * @param {String} opts.type // style / normal
     * @param {DOM} opts.charsPerInterval 每次输出字符数
     * @param {DOM} opts.$el 
     */
    constructor(opts) {
        // super();
        if (!Array.isArray(opts)) {
            opts = [opts];
        }
        this.progress = 0;
        this.$options = opts.map((item) => {
            let o = Object.assign(item, this.defaultOption());
            o.id = GUID++;
            return o;
        })
        let autoTypeWriter = function*() {
            for (let opts of this.$options) {
                yield this.writeFlow(opts);
            }
        }
        let g = autoTypeWriter.apply(this);
        this.run(g);
    }
    defaultOption() {
        return {
            speed: 16,
            charsPerInterval: 1
        }
    }
    // 处理一系列异步顺序执行
    run(g) {
        function next(data) {
            var result = g.next(data);
            if (result.done) return result.value;
            result.value.then(function(data) {
                next(data);
            });
        }
        next();
    }

    writeFlow(opts) {
        return new Promise((resolve, reject) => {
            this.progress = 0;
            this.writeTo(opts, resolve, reject);
        });
    }
    writeTextTo(o, resolve, reject) {
        let storageId = o.id;
        let content = o.content;
        let charsPerInterval = o.charsPerInterval;
        let progress = this.progress;
        let message = stringStorage[storageId] || "";
        let chars = content.slice(progress, progress + charsPerInterval);
        message += chars;
        this.progress += charsPerInterval;
        // update
        stringStorage[storageId] = message;

        setTimeout(() => {
            let isEnd = progress >= content.length;
            let input = message + ((progress & 1) && !isEnd ? '_' : ''); //奇偶判断
            o.$el.innerHTML = input;
            if (!isEnd) {
                this.writeTo(o, resolve, reject);
            } else {
                resolve()
            }
        }, o.speed);
    }
    // writeStyleTo() {
    //     this.styleNode = this.createStyleNode();
    //     let css = '';
    //     if (styleNode.styleSheet) {
    //         styleNode.styleSheet.cssText = css;
    //     } else {
    //         styleNode.appendChild(document.createTextNode(css));
    //     }
    // }
    // createStyleNode() {
    //     let head = document.getElementsByTagName('head')[0];
    //     let style = document.createElement('style');
    //     style.type = 'text/css';
    //     head.appendChild(style);
    //     return styleNode;
    // }
}