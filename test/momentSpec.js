import moment from "../src/mock/moment/index.js";
describe("A suite of basic functions", function() {
    it("Moment :format", function() {
        expect(moment("2018-12-12").format("yyyy/MM/dd")).toBe("2018/12/12");
        expect(moment("2018/12/12").date()).toBe("2018-12-12");

        expect(moment("2018-12-12 4:30").format("yyyy/MM/dd HH:mm:ss")).toBe("2018/12/12 04:30:00");
        expect(moment("2018/12/12").datetime()).toBe("2018-12-12 00:00:00");
        expect(moment("2018-12-12 4:30").time()).toBe("04:30:00");

        expect(moment("2018-12-1 4:30").format("MM/dd/yyyy HH:mm:ss")).toBe("12/01/2018 04:30:00");
        expect(moment("2018-12-10 4:30").format("y-M-d H:m:s")).toBe("18-12-10 4:30:0");


    })

    it("Moment :compare", function() {
        // 同一天 用一个月 
    })

    //偏移
    it("Moment :diff", function() {

    })

});