import Util from '../util/index.js'
let {
    proxy
} = Util;

export default class Svg {
    static get SVG_NS() {
        return "http://www.w3.org/2000/svg";
    }
    static get SVG_LINK() {
        return "http://www.w3.org/1999/xlink";
    }
    /**
     * 
     * @param {Object} opts 
     * @param {Object} opts.className 
     * @param {Object} opts.classPrefix 
     * @param {Object} opts.width 
     * @param {Object} opts.height 
     * @param {Object} opts.dir 
     * @param {Object} opts.width 
     */
    constructor(opts) {
        this.$options = Object.assign(opts, this.defaultOption())
        let keys = Object.keys(this.$options);
        let self = this;
        keys.forEach((key) => {
            proxy(self, "$options", key)
        });
        this.svg_root = this.create({
            "class": "svg-icon",
            "pointer-events": this.pointerEvents,
            overflow: "hidden",
            xmlns: this.SVG_NS,
            "xmlns:xlink": this.SVG_LINK,
            version: 1.1,
            width: this.width,
            height: this.height
        })

    }
    defaultOption() {
        return {
            width: 20,
            height: 20,
            pointerEvents: "none",
            cursor: "pointer",
            fill: "#666666",
            scalemode: 1
        }
    }
    create(name, data, parent, child) {
        name = name || "g";
        var node = this.createElement(name);
        if (data) {
            let keys = Object.keys(data);
            keys.forEach((k) => {
                //TODO
                node.setAttribute(k, data[k]);
            })
        }
        if (parent) {
            $(parent).append(node);
        }
        return node;
    }
    createElement(name) {
        if (document.createElementNS) {
            return document.createElementNS(this.SVG_NS, name);
        } else {
            return document.createElement(name);
        }
    }
    viewBox() {

    }
}