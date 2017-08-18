var bmiResult = 0;
var bmiStatus = 0;

function calBmi(bmiWeight = 100, bmiHeight = 100) {
    finHeight = bmiHeight / 100;
    bmiResult = bmiWeight / Math.pow(finHeight, 2);
    if(bmiResult < 18.5) {
        bmiStatus = "Du er undervægtig.";
    } else if(bmiResult >= 18.5 && bmiResult < 25) {
        bmiStatus = "Du er normal.";
    } else if(bmiResult >= 25 && bmiResult < 30) {
        bmiStatus = "Du er overvægtig.";
    } else if(bmiResult >= 30 && bmiResult < 35) {
        bmiStatus = "Du er i fedme klasse I.";
    } else if(bmiResult >= 35 && bmiResult < 40) {
        bmiStatus = "Du er i fedme klasse II.";
    } else if(bmiResult > 40) {
        bmiStatus = "Du er i fedme klasse III.";
    }
    console.log("Dit BMI er: " + bmiResult.toFixed(2) + " " + bmiStatus);
}

calBmi(88,193);