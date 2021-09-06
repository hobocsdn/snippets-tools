import VM from "../src/vm/vm.js";

describe("A suite of event functions", () => {
    it("extend Object", () => {
        let vm = new VM()
        expect(vm.toString()).toBe("[Object VM]");
    });
});