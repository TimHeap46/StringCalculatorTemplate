var panel = {};
panel.utils = {}

panel.utils.StringCalculator = function () {

    this.result = "";
};

panel.utils.StringCalculator.prototype.add = function (listOfNumbers) {

    if (listOfNumbers === panel.utils.StringCalculator.prototype.emptyString)
        return "0";


    if (listOfNumbers.indexOf(",") == -1)
        return listOfNumbers;

    var numbers = String.prototype.splitComma(listOfNumbers);
    
    if (numbers === this.emptyString) {

        this.result = this.defaultValue;
    }

    return this.result;
};

panel.utils.StringCalculator.prototype.emptyString = "";
panel.utils.StringCalculator.prototype.defaultValue = "0";

String.prototype.splitComma = function () {
    return this.split(",");
};

