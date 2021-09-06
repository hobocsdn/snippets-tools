/**
 * 中介者模式  (只负责发布事件(媒婆功能)，实现对象之间的解耦)
 * 广播?????
 */

/**
 * @private 
 */
let _message = {};

let Mediator = {
    /**
     * 
     * @param {String} type 
     * @param {function} action 
     */
    addSub(type, action) {
        if (!_message[type]) {
            _message[type] = [];
        }
        _message[type].push(action);
    },
    /**
     * 
     * @param {String} type 
     * @param {function} action 
     */
    notify(type, data) {
        var handlerList = _message[type];
        if (handlerList) {
            handlerList.forEach(handler => {
                if (typeof handler === "function") {
                    handler.call(this, data);
                }
            });
        }
    }
}

export default Mediator;