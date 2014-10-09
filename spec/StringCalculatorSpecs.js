describe("String Calculator", function () {
    var stringCalculator;

    beforeEach(function () {
        stringCalculator =  new panel.utils.StringCalculator();
    });
    
    it('Add empty string returns "0"', function () {
        expect(stringCalculator.add(panel.utils.StringCalculator.prototype.emptyString)).toEqual("0");
    });
    it('Add 1 returns "1"', function () {
        expect(stringCalculator.add("1")).toEqual("1");
    });
    it('Adds 1,2 return "3', function () {
       expect(stringCalculator.add("1,2")).toEqual("3");
    });

});

panel.utils.StringCalculator.prototype.emptyString = "";