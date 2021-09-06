import "./list-group.scss"

import Util from '../util/index.js'

let {
    proxy,
    EventBase
} = Util;
export default class ListGroup extends EventBase {
    /**
     * 
     * @param {Object} opts 
     * @param {Array} opts.$parent 
     * @param {Array} opts.$el 
     * @param {Array} opts.className 
     * @param {String} opts.template 
     * @param {Array} opts.data 
     * @param {Object} opts.data[index] 
     * @param {String} opts.data[index].id 
     * @param {String} opts.data[index].label 
     * @param {Array} opts.data[index].subs 
     */
    constructor(opts) {
        super();
        this.$options = Object.assign(opts, this.defaultOption())

        let keys = Object.keys(this.$options);
        let self = this;
        keys.forEach((key) => {
            proxy(self, "$options", key)
        })
        this.render();
    }
    defaultOption() {
        return {
            className: "list"
        }
    }
    render() {
        this.trigger("onRenderStart");

        let self = this;
        this.$el = $('<div/>').addClass(this.className);
        this.data.forEach((item) => {
            var $item = self.createItem(item);
            if (item.subs && item.subs.length) {
                item.subs.forEach(subItem => {
                    var $subItem = self.createItem(item);
                    self.$el.append($subItem);
                });
                self.$el.append($item);
            }
            self.$el.append($item);
        });
        this.$el.on("click", ".list-item", function() {
            var itemId = $(this).data("id");
            self.trigger("change", itemId);
        });
        this.$el.on("click", ".list-group", function() {
            // re-render
            self.toggleItem();
        });
        this.mount()
    }
    mount() {
        this.$el.appendTo(this.$parent || document.body);
        this.trigger("onMounted");
    }
    toggleItem() {

    }
    expandItem() {

    }
    collapseItem() {

    }
    createItem(item) {
        let tpl = this.template || this.getTpl();
        let $item = $(tpl).data("id", item.id).html(item.label);
        if (item.type === "group") {
            $item.addClass("list-group");
        }
        return $item;
    }
    getTpl(itemType) {
        return '<div class="list-item"></div>'
    }
    toString() {
        return ["Object ListGroup"];
    }
}