//global variable
var A = 12;
function Add_numbers_1() {
    document.write(34 + A + "<br>");
}
function Add_numbers_2() {
    document.write(A + 213);
}
Add_numbers_1();
Add_numbers_2();

//local variable
function Add_numbers_1() {
    var A =12;
    document.write(34 + A + "<br>");
}
function Add_numbers_2() {
    document.write(A + 213);
}
Add_numbers_1();
Add_numbers_2();

//function with error, debugging with console.log()
function Add_numbers_1() {
    var A = 12;
    console.log(34 + A);
}
function Add_numbers_2() {
    console.log(A + 213);
}
Add_numbers_1();
Add_numbers_2();

//if statement that utilizes the new Date().getHours()
function get_Date() {
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//if statement
if (12 < 19) {
    document.write("The left number is smaller than the number on the right.")
}

//my function that utilizes if statement and else statement
function get_Age() {
    var user_input = document.getElementById("userInput").value;
    if (user_input < 60) {
        reply = "You are very young!";
        document.getElementById("feedback").innerHTML = reply;
    }
    else {
        reply = "You are getting old!";
        document.getElementById("feedback").innerHTML = reply;
    }
}

//time of day else if statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
