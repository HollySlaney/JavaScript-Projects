//type of operator
document.write(typeof "Word");
document.write("<br>");

//type coercion
document.write("8" + 6);
document.write("<br>");

//NaN not a number
function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}
document.write("<br>");

//infinity number
document.write(2E310);
document.write("<br>");

//negative infinity number
document.write(-3E310);
document.write("<br>");

//boolean greater than
document.write(22 > 4);
document.write("<br>");

//boolean lesser than
document.write(22 < 4);
document.write("<br>");

//console.log method
console.log(5 + 5);
document.write("<br>");

//console.log method with boolean
console.log(2 > 5);
document.write("<br>");

//double equal signs true and false
document.write(20 == 20);
document.write("<br>");

document.write(12 == 18);
document.write("<br>");

//triple equal signs true and false
X = 20;
Y = 20;
document.write(X===Y);
document.write("<br>");

X = 76;
Y = "76";
document.write(X===Y);
document.write("<br>");

// AND true and false
document.write(20 > 13 && 11 > 2);
document.write("<br>");
document.write(4 > 10 && 19 > 11);
document.write("<br>");

//OR true and false
document.write(6 > 12 || 12 > 6);
document.write("<br>");
document.write(2 > 10 || 12 > 24);
document.write("<br>");

//NOT true and false
function not_Function() {
    document.getElementById("Not").innerHTML = !(10 > 20);
}

function not2_Function() {
    document.getElementById("Not2").innerHTML = !(20 > 10);
}
