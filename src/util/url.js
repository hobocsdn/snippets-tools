// url 格式
//protocol:[//[user[:password]@]host[:port]][/path][?query][#hash]

// 参考nodejs
// const protocolPattern = /^[a-z0-9.+-]+:/i;
// const portPattern = /:[0-9]*$/;
// const hostPattern = /^\/\/[^@/]+@[^@/]+/;
// /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]$/
// (ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?

const urlReg = /^(?:([A-Za-z]+):)?(\/\/)(([0-9.\-A-Za-z]+)(?::(\d+))?)((?:\/([^?#]*))?(\?([^#]*))?)(#.*)?$/;
const matchList = ['href', 'protocol', 'slashes', 'host', 'hostname', 'port', 'path', 'pathname', "search", 'query', 'hash'];

export default class Url {
    static parse(url, parseQueryString, slashesDenoteHost) {
        if (url instanceof Url) return url;
        var urlObject = new Url();
        urlObject.urlParse(url, parseQueryString, slashesDenoteHost);
        return urlObject;
    }

    constructor() {
        this.protocol = null;
        this.slashes = null;
        this.auth = null;
        this.host = null;
        this.port = null;
        this.hostname = null;
        this.hash = null;
        this.search = null;
        this.query = null;
        this.pathname = null;
        this.path = null;
        this.href = null;
        this.params = {};
    }
    urlParse(url) {
        if (typeof(url) !== "string") {
            return null;
        }
        let res = urlReg.exec(url);
        matchList.forEach((match, index) => {
            this[match] = res[index];
        });
        if (this.query) {
            let q = this.query.split("&");
            let self = this;
            let reg = /(.*)=(.*)/;
            q.forEach((item) => {
                let r = reg.exec(item);
                let key = decodeURIComponent(r[1]);
                let val = decodeURIComponent(r[2]);
                if (r) {
                    self.params[key] = val;
                }
            })
        }
    }

}