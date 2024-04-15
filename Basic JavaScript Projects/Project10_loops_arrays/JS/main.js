//Loops assignment
function Call_Loop() {
    var Digit= "";
    var X = 3;
    while (X < 13) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//Length property challenge
function string_Length() {
    var text = "Hello, how are you today?";
    var length = text.length;
    document.getElementById("Length").innerHTML = length;
}

//forLoop
var Instruments = ["Saxophone", "Harp", "Clarinet", "Trumpet", "Banjo", "Xylophone"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Arrays and objects
function array_Function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "barking";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " +
        Dog_Picture[3] + ".";
}

//Const keyword
function constant_Function() {
    const Motor_Vehicle = {type:"motorcycle", brand:"Ducati", color:"red"};
    Motor_Vehicle.color = "black";
    Motor_Vehicle.price = "$9000";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Motor_Vehicle.brand + " was " + Motor_Vehicle.price;
}

//Let keyword
let X = 192;
document.getElementById("Let").innerHTML = X;

//Return statement
document.getElementById("return").innerHTML = return_Statement("Holly");
function return_Statement(name) {
    return "Hello " + name;
}

//Object assignment
let truck = {
    make: "Ford",
    model: "F-350",
    year: "2019",
    color: "white",
    description : function() {
        return "The truck is a " + this.year + " " + this.color + " " + this.make + " " + this.model;
        }
};
document.getElementById("Truck_Object").innerHTML = truck.description();

//Loop with a break
let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

//Loop with continue
let text2 = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;