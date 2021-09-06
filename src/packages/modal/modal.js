import Util from '../../util/index.js'

let {
    proxy,
    EventBase
} = Util;

class Modal extends EventBase {
    constructor() {
        this.$mask = $("<div />").addClass("modal-mask");
        this.$mask.appendTo(document.body);
    }
    show() {
        this.$mask.show().css({
            "opacity": 1
        });
    }

}