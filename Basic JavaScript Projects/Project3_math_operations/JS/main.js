//addition function
function addition_Function() {
    var addition = 4 + 8;
    document.getElementById("math").innerHTML = "4 + 8 = " + addition;
}

//subtraction function
function subtraction_Function() {
    var subtraction = 6 - 3;
    document.getElementById("math2").innerHTML = "6 - 3 = " + subtraction;
}

//multiplication function
function multiplication() {
    var simple_Math = 11 * 7;
    document.getElementById("math3").innerHTML = "11 x 7 = " + simple_Math;
}

//division function
function division() {
    var simple_Math = 55 / 11;
    document.getElementById("math4").innerHTML = "55 / 11 = " + simple_Math;
}

//more math function
function more_Math() {
    var simple_Math = (3 + 10) * 12 / 4 -7;
    document.getElementById("moremath").innerHTML = "3 plus 10, multiplied by 12, divided by 4 and then subtracted by 7 equals " + simple_Math;
}

//modulus operator
function modulus_Operator() {
    var simple_Math = 18 % 4;
    document.getElementById("math5").innerHTML = "When you divide 18 by 4 you have a remainder of: " + simple_Math;
}

//negation operator
function negation_Operator() {
    var a = 100;
    document.getElementById("math6").innerHTML = -a;
}

//increment function
var X = 12;
X++;
document.write(X);

//decrement function
var X = 3.59;
X--;
document.write(X);

//alert with random math number
window.alert(Math.random());

//math object method
let min = Math.max(1, 7, 80, 102, 400, 635);
document.write(min);