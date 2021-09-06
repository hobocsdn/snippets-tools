import Mock from "../src/mock/regexp/index.js";
describe("A suite of basic functions", function() {
    // 正则练习

    it("Regexp --- china: 匹配中文", function() {
        let reg = /^[\u0391-\uFFE5]+$/;
        expect(reg.test("匹配中文")).toBe(true);
        expect(reg.test("匹配中文11")).toBe(false);
    })

    it("Regexp --- zero-width positive lookahead: 零宽断言，正向前瞻", function() {
        // 匹配某个位置，右边（正向）是X，它不真正匹配捕获子串 可匹配以XXX结尾的字符串
        let reg = /\d+(?=foo){1,}/g;
        expect("11foofoo2foo55foo".match(reg).toString()).toBe('11,2,55');

        // 匹配 4 次重复以上的字符
        expect(/(\w)(?=\1{3,})/.test("AAAAAAAA")).toBe(true)
    })

    it("Regexp --- 驼峰转换", function() {
        // 驼峰转换
        expect("foo-style-css".replace(/-(\w)/g, (all, letter) => {
            return letter.toUpperCase();
        })).toBe('fooStyleCss');

        expect("fooStyleCss".replace(/([A-Z])/g, "-$1").toLowerCase()).toBe('foo-style-css');
    })


    it("Regexp --- String: 'name|min-max'", function() {
        let reg_key = /(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/;
        console.log("string|+1".match(reg_key))
        console.log("string|1-100".match(reg_key))
        console.log("string|1-100.1-10".match(reg_key))

    })
})