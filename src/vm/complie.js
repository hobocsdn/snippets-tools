class Compile {
    constructor(el, vm) {
        this.vm = vm;
        this.el = document.querySelector(el);
        this.fragment = null;
        this.init();
    }
    init() {
        if (this.el) {
            this.fragment = this.nodeToFragment(this.el);
            this.compileElement(this.fragment);
            this.el.appendChild(this.fragment);
        } else {
            console.log('Dom元素不存在');
        }
    }
    nodeToFragment(el) {
        var fragment = document.createDocumentFragment();
        var child = el.firstChild;
        while (child) {
            // 将Dom元素移入fragment中
            fragment.appendChild(child);
            child = el.firstChild
        }
        return fragment;
    }
    compileElement(el) {
        var childNodes = el.childNodes;
        var self = this;
        [].slice.call(childNodes).forEach(function(node) {
            var reg = /\{\{(.*)\}\}/;
            var text = node.textContent;

            if (self.isTextNode(node) && reg.test(text)) { // 判断是否是符合这种形式{{}}的指令
                self.compileText(node, reg.exec(text)[1]);
            }

            if (node.childNodes && node.childNodes.length) {
                self.compileElement(node); // 继续递归遍历子节点
            }
        });
    }
    compileText(node, exp) {
        var self = this;
        var initText = this.vm[exp];
        this.updateText(node, initText); // 将初始化的数据初始化到视图中
        new Watcher(this.vm, exp, function(value) { // 生成订阅器并绑定更新函数
            self.updateText(node, value);
        });
    }
    updateText(node, value) {
        node.textContent = typeof value == 'undefined' ? '' : value;
    }
    isTextNode(node) {
        return node.nodeType == 3;
    }
}