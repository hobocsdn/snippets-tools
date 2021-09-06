let VERSION = "1.0.0";
let merge = (...sources) => Object.assign(...sources);

class WebContextInfo {
    constructor() {
        this.cacheInfo = {};
        this.url();
        this.referrer();
        this.resolution();
        this.browser();
        this.os();
    }

    /**
     * 获取当前url
     * @returns {string|window.location.href|*}
     */
    url() {
        return this.cacheInfo.url = document.location.href;
    }

    /**
     * 获取上一个访问页面
     * @returns {*}
     */
    referrer() {
        return this.cacheInfo.referrer = document.referrer;
    }

    /**
     * 获取屏幕分辨率信息
     * @returns {string}
     */
    resolution() {
        return this.cacheInfo.resolution = window.screen.width + "*" + window.screen.height;
    }

    /**
     * 获取操作系统信息(待更新)
     * @returns {string}
     */
    os() {
        var ret = "Unknown";
        var sUA = navigator.userAgent.toLowerCase();
        if (sUA.indexOf('win') != -1) {
            ret = "Windows";
        } else if (sUA.indexOf('linux') != -1) {
            ret = 'Linux';
        } else if (sUA.indexOf('mac') != -1) {
            ret = "Mac";
        }
        return this.cacheInfo.os = ret;
    }

    /**
     * 获取浏览器信息
     * @returns {string}
     */
    browser() {
        let br = { type: "Unknown", version: "0" };
        let explorer = window.navigator.userAgent.toLowerCase();
        if (explorer.indexOf("msie") >= 0) {
            let ver = explorer.match(/msie ([\d.]+)/)[1];
            br = { type: "IE", version: ver };
        } else if (explorer.indexOf("firefox") >= 0) {
            let ver = explorer.match(/firefox\/([\d.]+)/)[1];
            br = { type: "Firefox", version: ver };
        } else if (explorer.indexOf("chrome") >= 0) {
            let ver = explorer.match(/chrome\/([\d.]+)/)[1];
            br = { type: "Chrome", version: ver };
        } else if (explorer.indexOf("opera") >= 0) {
            let ver = explorer.match(/opera.([\d.]+)/)[1];
            br = { type: "Opera", version: ver };
        } else if (explorer.indexOf("Safari") >= 0) {
            let ver = explorer.match(/version\/([\d.]+)/)[1];
            br = { type: "Safari", version: ver };
        }
        return this.cacheInfo.browser = br.type + "," + br.version;
    }
}

/**
 * 日志级别,级别越高，输出的日志越少。比如：当前级别如果是WARN，则只输出ERROR,WARN的日志
 *
 * @type {{error: number, warn: number, info: number, log: number, debug: number}}
 */
let level = {
    "error": 4,
    "warn": 3,
    "info": 2,
    "log": 1,
    "debug": 0
};
let __config = {
    debug: 0, //是否开启调试模式。如果开启调试模式，则可以在console中输入window.log4j进行调试；
    level: "debug", //日志级别，error(4)、warn(3)、info(2)、log(1)、debug(0),级别越高，输出的日志越少。
    tagFilter: "", //日志tag筛选,正则表达式字符串
    post: 0, //当发生异常是是否post到服务器
    postContextInfo: 1, //是否提交环境数据
    postUrl: "/api/exception" //异常信息提交的服务器地址
};

class log4j {
    constructor() {
        this.version = VERSION;
        this.__config = __config;
    }
    config(...args) {
            if (arguments.length == 0)
                return tthi.__config;
            this.__config = merge(__config, ...args);
        }
        /*
         * 默认两个参数
         * @param {String} msg 输出信息
         * @param {String} tag 标记
         */
    log(...args) {
        this.exec("log", ...args);
    }
    info(...arg) {
        this.exec("info", ...args);
    }
    warn(...arg) {
        this.exec("warn", ...args);
    }
    error(...arg) {
        this.exec("error", ...args);
    }
    debug(...arg) {
        this.exec("debug", ...args);
    }
    exec(level, msg, tag) {
        let logLevel = level[this.__config.level] || level["debug"];

        if (logLevel > Level[level])
            return;
        let needLog = false;
        //过滤打印信息
        if (tag != undefined) {
            let reg = new RegExp(this.__config.tagFilter);
            needLog = reg.test(tag);
        } else {
            needLog = true;
        }
        if (needLog) {
            console ? console[level](msg) : !0;
            if (msg instanceof Error && this.__config.post) {
                this.post(msg); //上报服务器
            }
        }
    }
    post(msg) {
        let body = getPostData(msg);
        try {
            $.post(this.__config.postUrl, body);
        } catch (e) {
            console ? console.error(e) : !0;
        }
    }

    getPostData(msg) {
        let body = {};
        if (this.__config.postContextInfo) {
            body = new WebContextInfo();
        }
        if (msg instanceof Error) {
            body = merge(body, { name: msg.name, message: msg.message, stack: msg.stack });
        } else {
            body = merge(body, { name: "", message: msg + "", stack: "" });
        }
        return body;
    }

    /*防冲突处理*/
    static noConflict() {
        window.log4j = oldLog4j;
        return log4j;
    }
}

export default log4j;