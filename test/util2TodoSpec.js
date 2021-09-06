import Util from "../src/mock/util.js";
describe("A suite of basic functions", () => {
    it("extend Object", () => {
        let target = {
            a: 1
        };
        let source1 = {
            b: 2
        };
        let source2 = {
            c: 3
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

        expect(Util.type(new Date)).toBe("date");
        expect(Util.isDate(new Date)).toBe(true);

        expect(Util.isRegExp(new RegExp("12"))).toBe(true);
        expect(Util.isRegExp(/12/g)).toBe(true);

        expect(Util.type({
            a: 1
        })).toBe("object");
        expect(Util.isObject({
            a: 1
        })).toBe(true);

        expect(Util.type(new Error)).toBe("error");
        expect(Util.isError(new Error)).toBe(true);

        expect(Util.type(Symbol({
            toString: () => {
                return "foo"
            }
        }))).toBe("symbol")
        expect(Util.isSymbol(Symbol(12)))

    });

    it("String :", () => {
        expect(Util.repeat("*", 100)).toBe(new Array(100 + 1).join("*"));
    })

    it("Number:", () => {
        let arr = [6, 2, 4];
        expect(Util.clamp.apply(this, arr)).toBe(4);
    });

    it("compare", () => {
        var object = {
            a: 1
        };
        var other = {
            a: 1
        }
        expect(Util.eq(object, object)).toBe(true);
        expect(Util.eq(object, other)).toBe(false);
    })

    it("Object getValue : ", () => {
        expect(Util.getValue({
            a: {
                b: {
                    c: 1
                }
            }
        }, "a.b.c")).toBe(1);
    });

    it("image:", () => {
        expect(Util.dataImage({
            width: 200,
            height: 100
        }).indexOf("data:image/png;base64") > -1).toBe(true);
    });

    //ES6 新语法练习
    it("promise: then <===> done", (done) => {
        // all、reject、resolve
        var p1 = new Promise(function(resolve, reject) {
            setTimeout(function() {
                var a = "foo";
                resolve(a);
            }, 2000);
        })
        p1.then((data) => {
            expect(data).toBe("foo");
        }).then((data) => {
            expect(data).toBe(undefined);
            return "next"
        }).then((data) => {
            expect(data).toBe("next");
            done();
        });
    });

    it("promise: catch <===> fail", (done) => {
        var p1 = new Promise(function(resolve, reject) {
            setTimeout(function() {
                reject({
                    message: "this is an async error"
                });
            }, 1000);
        });

        p1.then(() => {
            console.log("never throw error");
        }).catch((error) => {
            expect(error.message).toBeTruthy();
        });
        // or 
        p1.then(() => {
            console.log("never throw error");
        }, (error) => {
            expect(error.message).toBeTruthy();
            done();
        });
    });

    it("promise: all", (done) => {
        // all、reject、resolve
        var p1 = new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(1);
            }, 2000);
        })
        var p2 = new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(2);
            }, 3000);
        });

        Promise.all([p1, p2]).then((data) => {
            const [foo, bar] = data;
            expect(foo).toBe(1);
            expect(bar).toBe(2);
            done();
        })
    });

});