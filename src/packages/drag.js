import Util from '../util/index.js'

let {
    proxy,
    EventBase
} = Util;

var E = {
    MOUSEDOWN: "mousedown",
    MOUSEMOVE: "mousemove",
    MOUSEUP: "mouseup",
    //drag
    DRAG_INIT: "drag_init",
    DRAG_START: "drag_start",
    DRAG_UPDATE: "drag_update",
    DRAG_COMPLETE: "drag_complete"
};
// 全部绝对定位 相对于容器
// 两种方式计算位置
/** 点击位置相对与页面和相对于元素之差 
 * 1. {
 *      left:e.pageX - click.x - relative.left
 *      top:e.pageY - click.y - relative.top
 * }
 * // p.left p.top 计算相对复杂
 * 2 {
 *      left:p.left + mouse.moveX  
 *      top:p.top + mouse.moveY
 * }
 */

class Drag extends EventBase {
    /**
     * 
     * @param {Object} opts 
     * @param {String} opts.ns 
     * @param {DOM} opts.$el    可拖动对象
     * @param {DOM} opts.$holder 可拖动对象活动的容器
     * @param {DOM} opts.mouseHandler 当前鼠标被劫持的对象
     */
    constructor(opts) {
        super();
        this.$options = Object.assign(opts, this.defaultOption())
        let keys = Object.keys(this.$options);
        let self = this;
        keys.forEach((key) => {
            proxy(self, "$options", key)
        })
        this.dragInit();
    }
    defaultOption() {
        return {
            ns: "drag",
            $holder: $(document.body),
            mouseHandler: null,
            dragging: false
        }
    }
    dragInit() {
        this.mouseInit();
        this.$el.on("mousedown." + this.ns, (e) => {
            this.dragStartHandler(e)
        })
    }
    mouseInit() {
        this.mouse = {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            offsetX: 0,
            offsetY: 0,
            moveX: 0,
            moveY: 0
        };
    }
    dragStartHandler(e) {
        if (this.mouseHandler) {
            // We may have missed mouseup (out of window)
            this.dragCompletedHandler(e, true);
            // 不可同时拖动多个对象
            return;
        }

        // 记住鼠标当前位置
        let mouse = this.mouse;
        mouse.startX = e.pageX;
        mouse.startY = e.pageY;
        mouse.currentX = mouse.startX;
        mouse.currentY = mouse.startY;

        // 由于鼠标可能离开了可拖动操作的区域，回来后会触发了mouseLeave导致mouseup丢失, 
        // mouseup可以只触发一次就解绑， 但是mousemove不可以 
        let mousemoveDelegate = (e) => {
            this.dragUpdateHandler(e)
        }
        let mouseupDelegate = (e) => {
            this.dragCompletedHandler(e);
        }

        this.$holder.on("mousemove", mousemoveDelegate);
        this.$holder.one("mouseup", mouseupDelegate)

        this.mouseHandler = this.$el;
        // 防止触发多个嵌套的可拖动对象
        event.preventDefault();
        this.trigger(E.DRAG_START, this.mouse)
    }
    dragCompletedHandler(e, missed) {
        // 防止多次触发
        if (this.mouseHandler) {
            this.updateMouseInfo(e);
        }
        this.$holder.off("mousemove");
        // 释放句柄，计算最终位置
        this.trigger(E.DRAG_COMPLETE, this.mouse);
        this.mouseHandler = null;
        if (!missed) {
            this.mouseInit();
        }
    }
    dragUpdateHandler(e) {
        this.updateMouseInfo(e);
        this.trigger(E.DRAG_UPDATE, this.mouse);
    }
    updateMouseInfo(e) {
        let mouse = this.mouse;
        mouse.previousX = mouse.currentX;
        mouse.previousY = mouse.currentY;
        mouse.currentX = e.pageX;
        mouse.currentY = e.pageY;

        mouse.offsetX = mouse.currentX - mouse.startX;
        mouse.offsetY = mouse.currentY - mouse.startY;
        mouse.moveX = mouse.currentX - mouse.previousX;
        mouse.moveY = mouse.currentY - mouse.previousY;
    }
}

export default Drag;