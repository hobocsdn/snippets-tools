import Random from "../src/mock/random/index.js";
describe("A suite of basic functions", function() {
    it("Random -- boolean : 'expect reutrn an boolean'", function() {
        expect(typeof(Random.boolean())).toBe("boolean");
    })

    it("Random -- natural : 'expect reutrn an number large than or equal 0'", function() {
        expect(typeof(Random.natural())).toBe("number")
        let natural = Random.natural(20, 50)
        expect(natural).toBeGreaterThanOrEqual(20)
        expect(natural).toBeLessThanOrEqual(50)
    })

    it("Random -- integer : 'expect reutrn an number'", function() {
        expect(typeof(Random.integer())).toBe("number")
        let int = Random.integer(20, 50)
        expect(int).toBeGreaterThanOrEqual(20)
        expect(int).toBeLessThanOrEqual(50)
    })

    it("Random -- character : 'expect reutrn char'", function() {
        var char = Random.character();
        expect(typeof(char)).toBe("string");
        expect(char.length).toBe(1);
    });

    it("Random -- string : 'expect reutrn char'", function() {
        var str = Random.string("all", 8, 8);
        expect(typeof(str)).toBe("string");
        expect(str.length).toBe(8);
    });

    xit("Random -- range : 'expect reutrn Array which is Arithmetic progressions'", function() {
        var arr = Random.range(1, 10, 1);
        expect(arr instanceof Array).toBe(true);
        expect(arr.length).toBe(9);
    });

    it("Random -- shuffle : 'expect reutrn random cards form an array'", function() {
        // 随机发 6 张牌
        let cards = [1, 2, 3, 4, 5, 6, 7, 8, 10, "J", "Q", "K"];
        let arr1 = Random.shuffle(cards, 6);
        expect(arr1 instanceof Array).toBe(true);
        expect(arr1.length).toBe(6);

        var arr2 = Random.shuffle(cards, 6, 10);
        expect(arr2.length).toBeGreaterThanOrEqual(6);
        expect(arr2.length).toBeLessThanOrEqual(10);
    });

});