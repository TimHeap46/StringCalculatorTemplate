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

    //var numberList = String.prototype.splitComma(listOfNumbers);
    var numberList = listOfNumbers.split(",");
    if (numberList === this.emptyString) {

        this.result = this.defaultValue;
        return this.result;
    }

    for (i = 0; i < numberList.length; i++) {
        this.result = Number(this.result) + Number(numberList[i]);
    }
    return this.result.toString();
};

panel.utils.StringCalculator.prototype.emptyString = "";
panel.utils.StringCalculator.prototype.defaultValue = "0";

//String.prototype.splitComma = function () {
    //return this.split(",");
    //var variables = this.split(",");
    
    //for(var i=0;i<variables.length;i++)
    //{
    //    this.result += variables[i];
    //}
    //return this.result;
    //return String.prototype.split(/,\s*/);
//};

//String.prototype.splitComma = splitByComma;
//function splitByComma() {
//    var variables = this.split(",");
//    return variables;
//}

