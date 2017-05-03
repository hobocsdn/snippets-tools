"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @build 2017.4.13
 * @author hobocsdn
 *
 */
/*
 *基于浏览器端的console的日志记录组件。支持如下特性：
 * 1.日志级别设置；
   2.异常提交到服务器；
   3.提交环境信息；
   4.日志Tag过滤器；
 *
*/
(function () {
    var VERSION = "1.0.0";
    var merge = function merge() {
        return Object.assign.apply(Object, arguments);
    };

    var WebContextInfo = function () {
        function WebContextInfo() {
            _classCallCheck(this, WebContextInfo);

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


        _createClass(WebContextInfo, [{
            key: "url",
            value: function url() {
                return this.cacheInfo.url = document.location.href;
            }

            /**
             * 获取上一个访问页面
             * @returns {*}
             */

        }, {
            key: "referrer",
            value: function referrer() {
                return this.cacheInfo.referrer = document.referrer;
            }

            /**
             * 获取屏幕分辨率信息
             * @returns {string}
             */

        }, {
            key: "resolution",
            value: function resolution() {
                return this.cacheInfo.resolution = window.screen.width + "*" + window.screen.height;
            }

            /**
             * 获取操作系统信息(待更新)
             * @returns {string}
             */

        }, {
            key: "os",
            value: function os() {
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

        }, {
            key: "browser",
            value: function browser() {
                var br = { type: "Unknown", version: "0" };
                var explorer = window.navigator.userAgent.toLowerCase();
                if (explorer.indexOf("msie") >= 0) {
                    var ver = explorer.match(/msie ([\d.]+)/)[1];
                    br = { type: "IE", version: ver };
                } else if (explorer.indexOf("firefox") >= 0) {
                    var _ver = explorer.match(/firefox\/([\d.]+)/)[1];
                    br = { type: "Firefox", version: _ver };
                } else if (explorer.indexOf("chrome") >= 0) {
                    var _ver2 = explorer.match(/chrome\/([\d.]+)/)[1];
                    br = { type: "Chrome", version: _ver2 };
                } else if (explorer.indexOf("opera") >= 0) {
                    var _ver3 = explorer.match(/opera.([\d.]+)/)[1];
                    br = { type: "Opera", version: _ver3 };
                } else if (explorer.indexOf("Safari") >= 0) {
                    var _ver4 = explorer.match(/version\/([\d.]+)/)[1];
                    br = { type: "Safari", version: _ver4 };
                }
                return this.cacheInfo.browser = br.type + "," + br.version;
            }
        }]);

        return WebContextInfo;
    }();

    /**
     * 日志级别,级别越高，输出的日志越少。比如：当前级别如果是WARN，则只输出ERROR,WARN的日志
     *
     * @type {{error: number, warn: number, info: number, log: number, debug: number}}
     */


    var level = {
        "error": 4,
        "warn": 3,
        "info": 2,
        "log": 1,
        "debug": 0
    };
    var __config = {
        debug: 0, //是否开启调试模式。如果开启调试模式，则可以在console中输入window.log4j进行调试；
        level: "debug", //日志级别，error(4)、warn(3)、info(2)、log(1)、debug(0),级别越高，输出的日志越少。
        tagFilter: "", //日志tag筛选,正则表达式字符串
        post: 0, //当发生异常是是否post到服务器
        postContextInfo: 1, //是否提交环境数据
        postUrl: "/api/exception" //异常信息提交的服务器地址
    };

    var log4j = function () {
        function log4j() {
            _classCallCheck(this, log4j);

            this.version = VERSION;
            this.__config = __config;
        }

        _createClass(log4j, [{
            key: "config",
            value: function config() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                if (arguments.length == 0) return tthi.__config;
                this.__config = merge.apply(undefined, [__config].concat(args));
            }
            /*
             * 默认两个参数
             * @param {String} msg 输出信息
             * @param {String} tag 标记
             */

        }, {
            key: "log",
            value: function log() {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                this.exec.apply(this, ["log"].concat(args));
            }
        }, {
            key: "info",
            value: function info() {
                this.exec.apply(this, ["info"].concat(_toConsumableArray(args)));
            }
        }, {
            key: "warn",
            value: function warn() {
                this.exec.apply(this, ["warn"].concat(_toConsumableArray(args)));
            }
        }, {
            key: "error",
            value: function error() {
                this.exec.apply(this, ["error"].concat(_toConsumableArray(args)));
            }
        }, {
            key: "debug",
            value: function debug() {
                this.exec.apply(this, ["debug"].concat(_toConsumableArray(args)));
            }
        }, {
            key: "exec",
            value: function exec(level, msg, tag) {
                var logLevel = level[this.__config.level] || level["debug"];

                if (logLevel > Level[level]) return;
                var needLog = false;
                //过滤打印信息
                if (tag != undefined) {
                    var reg = new RegExp(this.__config.tagFilter);
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
        }, {
            key: "post",
            value: function post(msg) {
                var body = getPostData(msg);
                try {
                    $.post(this.__config.postUrl, body);
                } catch (e) {
                    console ? console.error(e) : !0;
                }
            }
        }, {
            key: "getPostData",
            value: function getPostData(msg) {
                var body = {};
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

        }], [{
            key: "noConflict",
            value: function noConflict() {
                window.log4j = oldLog4j;
                return log4j;
            }
        }]);

        return log4j;
    }();

    /*支出 cmd amd 输出模块*/


    if (typeof window.define === 'function' && window.define.amd) {
        window.define('log4j', [], function () {
            return log4j;
        });
    } else {
        //先保存 用于无冲突处理
        oldLog4j = window.log4j;
        window.log4j = log4j;
    }
})(window, undefined);