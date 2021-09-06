import Util from "../src/util/index.js";
import Url from "../src/util/url.js";

describe("A suite of util functions", () => {
  describe("basic:", () => {
    it("extend Object", () => {
      let target = {
        a: 1,
      };
      let source1 = {
        b: 2,
      };
      let source2 = {
        c: 3,
      };
      let extend = Util.extend;
      extend(target, source1, source2);
      expect(target.b).toEqual(2);
      expect(target.c).toEqual(3);
    });

    it("type : Boolean Number String Function Array Date RegExp Object Error Symbol", () => {
      expect(Util.type(true)).toBe("boolean");
      expect(Util.isBoolean(false)).toBe(true);

      expect(Util.type(1)).toBe("number");
      expect(Util.type(NaN)).toBe("number");
      expect(Util.isNumber(1)).toBe(true);

      expect(Util.type("ABCD")).toBe("string");
      expect(Util.isString("ABCD")).toBe(true);

      expect(Util.type(null)).toBe("null");
      expect(Util.type(Util.noop)).toBe("function");
      expect(Util.isFunction(Util.noop)).toBe(true);

      expect(Util.type([1, 2, 3])).toBe("array");
      expect(Util.isArray([1, 2, 3])).toBe(true);

      expect(Util.type(new Date())).toBe("date");
      expect(Util.isDate(new Date())).toBe(true);

      expect(Util.isRegExp(new RegExp("12"))).toBe(true);
      expect(Util.isRegExp(/12/g)).toBe(true);

      expect(
        Util.type({
          a: 1,
        })
      ).toBe("object");
      expect(
        Util.isObject({
          a: 1,
        })
      ).toBe(true);

      expect(Util.type(new Error())).toBe("error");
      expect(Util.isError(new Error())).toBe(true);

      expect(
        Util.type(
          Symbol({
            toString: () => {
              return "foo";
            },
          })
        )
      ).toBe("symbol");
      expect(Util.isSymbol(Symbol(12)));
    });

    it("urlParse", () => {
      let url = "http://www.test.com:443/animals?a=1&b=2#abc";
      let obj = Url.parse(url);
      expect(obj.protocol).toBe("http");
      expect(obj.host).toBe("www.test.com:443");
      expect(obj.port).toBe("443");
      expect(obj.path).toBe("/animals?a=1&b=2");
      expect(obj.query).toBe("a=1&b=2");
      expect(obj.search).toBe("?a=1&b=2");
      expect(obj.hash).toBe("#abc");
      expect(obj.params.a).toBe("1");
      expect(obj.params.b).toBe("2");

      // TODO url 中的转义字符如何处理 ， 权限如何处理
      // http://a@b@c/ => user:a@b host:c
      // http://a@b?@c => user:a host:b path:/?@c

      let url2 = "http://www.test.com:8080/?a%20=%201&b=2#efg";
      let obj2 = Url.parse(url2);
      console.log(obj2);
      expect(obj2.host).toBe("www.test.com:8080");
      expect(obj2.port).toBe("8080");
      expect(obj2.path).toBe("/?a%20=%201&b=2");
      expect(obj2.query).toBe("a%20=%201&b=2");
      expect(obj2.params["a "]).toBe(" 1");
      expect(obj2.hash).toBe("#efg");
    });
  });

  describe("event:", () => {
    let EventBase = Util.EventBase;

    let eventInstance;
    beforeEach(() => {
      eventInstance = new EventBase();
    });
    afterEach(() => {
      eventInstance = null;
    });
    it("bind/on", (done) => {
      eventInstance.on("message", (e, data) => {
        expect(data.code).toBe("200");
        done();
      });
      eventInstance.trigger("message", {
        code: "200",
        msg: "ok",
      });
    });

    it("bind/on:run defaultEvent", (done) => {
      let p1 = new Promise((resolve) => {
        eventInstance.on("message", (e, data) => {
          resolve("p1");
        });
      });

      let p2 = new Promise((resolve) => {
        eventInstance.on(
          "message",
          (e, data) => {
            resolve("p2");
          },
          {
            defaultEvent: true,
          }
        );
      });
      Promise.all([p1, p2]).then((data) => {
        let [foo, bar] = data;
        expect(foo).toBe("p1");
        expect(bar).toBe("p2");
        done();
      });
      eventInstance.trigger("message", {
        code: "200",
        msg: "ok",
      });
    });

    it("unbind/off:stop defaultEvent", (done) => {
      let p1 = new Promise((resolve) => {
        eventInstance.on("message", (e, data) => {
          resolve("p1");
        });
      });
      let p2 = new Promise((resolve) => {
        setTimeout(() => {
          resolve("p2 reject");
        });
        let defaultEventHandler = (e, data) => {
          resolve("p2");
        };
        eventInstance.on("message", defaultEventHandler, {
          defaultEvent: true,
        });
      });
      Promise.all([p1, p2]).then((data) => {
        let [foo, bar] = data;
        expect(foo).toBe("p1");
        expect(bar).toBe("p2 reject");
        done();
      });
      eventInstance.off("message", {
        defaultEvent: true,
      });
      eventInstance.trigger("message", {
        code: "200",
        msg: "ok",
      });
    });

    it("bind/on:set namespace rule 1 similar to css rule", (done) => {
      let p1 = new Promise((resolve) => {
        eventInstance.on("message", (e, data) => {
          resolve(e.namespace);
        });
      });
      let p2 = new Promise((resolve) => {
        eventInstance.on("message.n1", (e, data) => {
          resolve(e.namespace);
        });
      });

      let p3 = new Promise((resolve) => {
        eventInstance.on("message.n2", (e, data) => {
          resolve(e.namespace);
        });
      });
      Promise.all([p1, p2, p3]).then((data) => {
        const [foo, bar, baz] = data;
        expect(foo).toBe("");
        expect(bar).toBe("n1");
        expect(baz).toBe("n2");
        done();
      });
      // TODO 触发特定命名空间的事件
      eventInstance.trigger("message", {
        code: "200",
        msg: "ok",
      });
    });

    it("bind/on:set namespace rule 2 similar to css rule", (done) => {
      let p1 = new Promise((resolve) => {
        let t = setTimeout(function () {
          resolve("p1 reject");
        });
        eventInstance.on("message", (e, data) => {
          clearTimeout(t);
          resolve("p1");
        });
      });
      let p2 = new Promise((resolve) => {
        let t = setTimeout(function () {
          resolve("p2 reject");
        });
        eventInstance.on("message.n1.n2", (e, data) => {
          clearTimeout(t);
          resolve("p2");
        });
      });
      let p3 = new Promise((resolve) => {
        let t = setTimeout(function () {
          resolve("p3 reject");
        });
        eventInstance.on("message.n1.n2.n3", (e, data) => {
          clearTimeout(t);
          resolve("p3");
        });
      });
      Promise.all([p1, p2, p3]).then((data) => {
        const [foo, bar, baz] = data;
        expect(foo).toBe("p1 reject");
        expect(bar).toBe("p2 reject");
        expect(baz).toBe("p3");
        done();
      });
      eventInstance.trigger("message.n1.n3", {
        code: "200",
        msg: "ok",
      });
    });

    it("bind/on:stopImmediatePropagation", (done) => {
      let order = 1;
      let p1 = new Promise((resolve) => {
        eventInstance.on("message", (e, data) => {
          resolve(`p1:${order++}`);
        });
      });
      let p2 = new Promise((resolve) => {
        eventInstance.on("message", (e, data) => {
          e.stopImmediatePropagation(resolve);
          resolve(`p2:${order++}`);
        });
      });
      let p3 = new Promise((resolve) => {
        let t = setTimeout(() => {
          resolve(`p3 reject:${order++}`);
        });
        eventInstance.on("message", (e, data) => {
          clearTimeout(t);
          resolve(`p3:${order++}`);
        });
      });
      let p4 = new Promise((resolve) => {
        eventInstance.on(
          "message",
          (e, data) => {
            resolve(`p4:${order++}`);
          },
          {
            prepend: true,
          }
        );
      });
      eventInstance.trigger("message", {
        code: "200",
        msg: "ok",
      });
      Promise.all([p1, p2, p3, p4]).then((data) => {
        let [foo, bar, baz, foobar] = data;
        expect(foo).toBe("p1:2");
        expect(bar).toBe("p2:3");
        expect(baz).toBe("p3 reject:4");
        expect(foobar).toBe("p4:1");
        done();
      });
    });
  });
});
