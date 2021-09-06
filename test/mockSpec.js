import Mock from "../src/mock/mock.js";
describe("A suite of basic functions", function() {
    it("Mock --- String: 'name|min-max': string", function() {
        let res = Mock.mock({
            "string|1-10": "★"
        });
        expect(res.hasOwnProperty("string")).toBe(true);
        expect(res.string.length).not.toBeLessThan(1);
        expect(res.string.length).not.toBeGreaterThan(10);
    });
    it("Mock --- String: 'name|count': string", function() {
        let res = Mock.mock({
            "string|3": "★"
        });
        expect(res.hasOwnProperty("string")).toBe(true);
        expect(res.string).toBe("★★★");
    });
    it("Mock --- Number: 'name|+1': number", function() {
        // 输出原始值
        let res = Mock.mock({
            "number|+1": 200
        });
        expect(res.hasOwnProperty("number")).toBe(true);
        expect(res.number).toBe(200);
    });

    it("Mock --- Number: 'name|min-max': number", function() {
        // 输出原始值
        let res = Mock.mock({
            "number|1-100": 100
        });
        expect(res.hasOwnProperty("number")).toBe(true);
        expect(res.number).not.toBeLessThan(1);
        expect(res.number).not.toBeGreaterThan(100);
    });

    it("Mock --- Array: 'name|1': array", function() {
        let res = Mock.mock({
            "array|1": ['GET', 'POST', 'HEAD', 'DELETE']
        });
        expect(res.hasOwnProperty("array")).toBe(true);
        // expect(res.array.length).toBe(1);
    })
});