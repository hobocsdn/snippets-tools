/**
 * @file 事件消息系统 (观察者模式,发布/订阅模式:解决主题对象与观察之间功能的耦合))
 * @author Tim Guo(tim.guo@morningstar.com)
 * 
 */


/**
 * 描述
 *
 * @class
 * 
 */

export class Event {
    constructor(o) {
        this.isDefaultPrevented = false;
        this.isPropagationStopped = false;
        this.isImmediatePropagationStopped = false;

        /**
         * 属性描述
         *
         * @type {String} type 事件类型
         * @type {Object} data 事件需要传递的信息
         * @type {Object} target 事件目标对象
         * @type {String} namespace 命名空间
         * @type {RegExp} rnamespace 命名空间匹配规则
         * @type {Object/Array} parent 指定事件冒泡对象/广播列表
         * @type {Object} currentTarget 当前目标对象
         * @type {Object} delegateTarget 代理目标对象
         * @private
         */
        this.type = o.type;
        this.data = o.data;
        this.target = o.target;
        this.namespace = o.namespace;
        this.rnamespace = o.rnamespace;
        this.parent = o.parent || null;
        this.currentTarget = o.target;
        this.delegateTarget = o.target;
        this.timeStamp = new Date().getTime();
    }
    /**
     * 阻止默认事件
     *
     * @private
     */
    preventDefault() {
        this.isDefaultPrevented = true;
    }
    /**
     * 在执行完当前事件处理程序之后,停止所有后续节点的事件处理程序的运行
     *
     * @private
     */
    stopPropagation() {
        this.isPropagationStopped = true;
    }
    /**
     * 在执行完当前事件处理程序之后，停止当前节点以及所有后续节点的事件处理程序的运行
     *
     * @private
     */
    stopImmediatePropagation() {
        this.isImmediatePropagationStopped = true;
        this.stopPropagation();
    }
}

let addEvents = (eventListeners, eventList, maxListeners) => {
    eventList.forEach(event => {
        let type = event.type;
        if (eventListeners[type] === undefined) {
            eventListeners[type] = {
                events: [],
                defaultEvent: null
            }
        }
        let handler = event.handler;
        if (typeof(handler) !== "function") {
            return;
        }
        let eventListener = eventListeners[type];
        addEvent(eventListener, event, maxListeners)
    });
}

let addEvent = (eventListener, event, maxListeners) => {
    if (event.defaultEvent) {
        eventListener.defaultEvent = event;
        return;
    }
    let events = eventListener.events;
    if (events.length > maxListeners) {
        console.warn("max Event listener limit!!");
        return;
    }
    if (event.prepend) {
        events.unshift(event);
    } else {
        events.push(event);
    }
}

let removeEvents = (eventListeners, eventList) => {
    eventList.forEach(event => {
        removeEvent(eventListeners, event);
    });
};

let removeEvent = (eventListeners, event) => {
    // by namespace --- by handler -- by type
    let type = event.type;
    if (event.defaultEvent) {
        removeEventByDefault(eventListeners, type);
        return;
    }

    let namespace = event.namespace;
    if (!type && namespace) {
        removeEventByNameSpace(eventListeners, namespace);
        return;
    }
    let handler = event.handler;
    if (typeof(handler) == "function") {
        removeEventByHandler(eventListeners, type, handler);
        return
    }
    removeEventByType();
}

let removeEventByDefault = (eventListeners, type) => {
    let eventListener = eventListeners[type];
    if (!eventListener) {
        return;
    }
    if (eventListener.defaultEvent) {
        eventListener.defaultEvent = null;
    }
}

let removeEventByNameSpace = (eventListeners, namespace) => {
    let types = Object.keys(eventListeners);
    types.forEach(function(type) {
        let eventListener = eventListeners[type];
        let events = eventListener.events;
        for (let i = 0; i < events.length; i++) {
            let item = events[i];
            if (item && item.namespace === namespace) {
                events.splice(i, 1);
                i--;
            }
        }
    });
}

let removeEventByHandler = (eventListeners, type, handler) => {
    let eventListener = eventListeners[type];
    let events = eventListener.events;
    for (let i = 0; i < events.length; i++) {
        let item = events[i];
        if (item && item.handler === handler) {
            events.splice(i, 1);
            i--;
        }
    }
}

let removeEventByType = (eventListeners, type) => {
    let eventListener = eventListeners[type];
    if (!eventListener) {
        return;
    }
    // 保留默认事件
    if (eventListener.defaultEvent) {
        eventListener.events = [];
    } else {
        delete eventListeners[type];
    }
}

let removeAllEvents = (eventListeners) => {
    let types = Object.keys(eventListeners);
    types.forEach(function(type) {
        removeEventByType(eventListeners, type);
    });
}

let sendEvent = (eventListener, event, data, target) => {
    // trigger events/defaultEvent
    sendEventList(eventListener, event, data, target);
    sendDefaultEvent(eventListener, event, data, target);
}

let sendEventList = (eventListener, event, data, target) => {
    let events = eventListener.events;
    for (let i = 0; i < events.length; i++) {
        let item = events[i];
        event.handleObj = item;
        let res;
        // Triggered event must either 1) have no namespace, or 2) have namespace(s)
        // a subset or equal to those in the bound event (both can have no namespace).
        if (!event.rnamespace || event.rnamespace.test(item.namespace)) {
            // TODO need toCopy ??
            event.namespace = item.namespace;
            res = item.handler.call(target, event, data);
        }
        // 只促发一次的事件
        if (item.one) {
            events.splice(i, 1);
            i--;
        }
        if (event.isImmediatePropagationStopped || res === false) {
            break;
        }
    }
}

let sendDefaultEvent = (eventListener, event, data, target) => {
    let defaultEvent = eventListener.defaultEvent;
    if (!defaultEvent || event.isDefaultPrevented) {
        return;
    }
    defaultEvent.handler.call(target, event, data);
}

let getEventItem = (context, handler, option = {}) => {
    context += "";
    if (!context) {
        return null;
    }
    let arr = context.split('.')
    let type = arr.shift();
    let namespace = arr.join('.');
    let eventItem = {
        context,
        namespace,
        type,
        handler,
        one: option.one,
        prepend: option.prepend,
        defaultEvent: option.defaultEvent
    }
    return eventItem;
};

let getEventList = (types, handler, option) => {
    if (handler && typeof(handler) === "object") {
        option = handler;
    }
    let eventList = [];
    if (typeof(types) === "object") {
        let keys = Object.keys(types);
        keys.forEach((type) => {
            let eventItem = getEventItem(type, types[key], option);
            if (eventItem) {
                eventList.push(eventItem);
            }
        })
    }
    if (typeof(types) === "string") {
        let arr = types.split(" ");
        arr.forEach(((type) => {
            let eventItem = getEventItem(type, handler, option);
            if (eventItem) {
                eventList.push(eventItem);
            }
        }))
    }
    return eventList;
}

function mergeProps(target, list) {
    for (var i = 0, l = list.length; i < l; i++) {
        var item = list[i];
        if (!item) {
            continue;
        }
        for (var k in item) {
            if (target[k] !== item[k]) {
                target[k] = item[k];
            }
        }
    }
    return target;
}


export class EventBase {
    // static expando:"jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),      

    static extend(...args) {
        Object.assign(this, ...args);
    }
    getEventListeners() {
        if (!this.eventListeners) {
            this.eventListeners = {};
        }
        return this.eventListeners;
    }
    /**
     * 
     * @param {String/Object} types 
     * @param {Function/Object} handler 
     * @param {Object} option 
     * @param {Boolean=} option.prepend 先触发/默认后触发(可选)
     * @param {Boolean=} option.one 触发一次即移除(可选)
     * 
     * bind("click.n1.n2",function,{})
     * 
     */
    bind(types, handler, option) {
        let eventListeners = this.getEventListeners();
        let eventList = getEventList(types, handler, option);
        if (eventList.length) {
            addEvents(eventListeners, eventList);
        }
        return this;
    }
    unbind(types, handlers, option) {
        let eventListeners = this.getEventListeners();
        if (!arguments) {
            removeAllEvents(eventListeners);
            return this;
        }
        let eventList = getEventList(types, handlers, option);
        removeEvents(eventListeners, eventList);
    }

    // ===================================================
    on() {
        return this.bind.apply(this, arguments);
    }
    off() {
        return this.unbind.apply(this, arguments);
    }
    // ===================================================
    /**
     * 
     * @param {string} type 
     * @param {Object=} data (可选) 
     */
    trigger(type, data) {
        let eventListeners = this.getEventListeners();

        let arr = type.split(".");
        let eventType = arr.shift();
        let namespace = arr.join(".");
        let rnamespace = namespace ? new RegExp("(^|\\.)" + arr.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
        let eventListener = eventListeners[eventType];
        if (!eventListener) {
            return;
        }
        let event = new Event({
            type: eventType,
            target: this,
            namespace,
            rnamespace,
            data
        });
        sendEvent(eventListener, event, data, this);

        // 阻止节点往上冒泡
        if (event.isPropagationStopped) {
            return this;
        }
        if (this.parent && this.parent instanceof EventBase) {
            this.parent.trigger(type, data);
        }
        return this;
    }
    emit() {
        return this.trigger.apply(this, arguments);
    }
    // ===================================================

}