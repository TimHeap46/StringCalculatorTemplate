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

    it('returns 3 when passed 1,2', function () {


        var param = "1,2";
        expect(stringCalculator.add(param)).toEqual("3");
    });

});

panel.utils.StringCalculator.prototype.emptyString = "";